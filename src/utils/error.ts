import { ApiError, RequestError } from '../types/api';

/**
 * Chose what to do with each API error
 * @param error api error
 */
export const handleApiError = (receivedError: RequestError): ApiError => {
  if ('response' in receivedError) {
    // It is an API error
    if (receivedError.response === undefined) {
      const newData = receivedError.toJSON() as Error;
      if (newData.message === 'Network Error') {
        return {
          status: 500,
          message: 'Verifique sua conexão com a internet.'
        }
      }
      // Error WITHOUT a message, making it harder to debug in the future
      console.error('Error without a message. User will not have the correct feedback', receivedError);
      return {
        status: 500,
        message: 'Verifique sua conexão com a internet.'
      };
    }

    // Else
    // It's an API error, it's possible to handle it
    const { data: { error } } = receivedError.response;

    // Some status should only be handled by the frontend
    const userErrors = [400, 401, 402, 403, 422];

    if (!error.status || userErrors.indexOf(error.status) < 0) {
      // This is not an user error, logging to Rollbar
      console.error(error.message, receivedError);
    } else {
      // User error, will not log to Rollbar, but need to be checked on the view
      console.warn(
        `This is an user error, so will not being send to Rollbar, but check if the user received a friendly message`,
        error
      );
    }

    // Returning the value so the view can use it
    return error;
  } else {
    // It's an request error
    if (receivedError.message) {
      console.error(receivedError);
    } else {
      // Error WITHOUT a message, making it harder to debug in the future
      console.error('Error without a message. User will not have the correct feedback', receivedError);
    }
    return { status: 500, message: receivedError.message || 'Erro de requisição' };
  }
};

/**
 * Get a friendly message to show to the user
 * @param statusCode Next status code
 */
export const getMessageFromStatusCode = (statusCode: number): string => {
  // Add any case that you need to handle
  switch (statusCode) {
    case 404:
      return 'Não encontramos o que você está procurando';
    case 500:
      return 'Aconteceu um problema, mas os programadores já foram avisados e estão resolvendo';
    default:
      console.info(`Status Code ${statusCode} is showing a generic message to the user`, {
        method: 'getMessageFromStatusCode'
      });
      return 'Aconteceu um problema, mas os programadores já foram avisados e estão resolvendo';
  }
};

/* if (!('error' in response) && !('abort' in response)) {
  message.success('Dados salvos com sucesso!');
} else {
  message.error('Ocorreu um erro ao efetuar essa ação, tente novamente.');
} */

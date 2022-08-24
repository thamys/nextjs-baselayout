export interface User {
  _id: {
    email: string;
    dbname: string;
  };
  id: number;
  nome: string;
  cnpj: string;
  ie: string;
  razao_social: string;
  nome_fantasia: string;
  logradouro: string;
  numero: string;
  complemento: string;
  bairro: string;
  cidade: string;
  uf: string;
  cep: string;
  telefone: string;
  celular: string;
  logo: string;
  validade: Date;
  id_cadastro: 1;
  email: string;
  login: string;
  senha: string;
  nivel: number;
  status: string;
  data_cadastro: Date;
  id_contabilidade: string;
  email_sefaz: string;
  senha_sefaz: string;
  servidor_email: string;
  sm: string;
  is_funcionario: string;
  data_acesso: Date;
  permissoes: string;
  permissoes_menu: string;
  permissoes_nova: string;
  data_logout: string;
  dbname: string;
}

export interface FormLogin {
  email: string;
  password: string;
  remember: boolean;
}

export interface ResetPasswordForm {
  email: string;
}

export interface InsertCodeForm {
  code: string;
}

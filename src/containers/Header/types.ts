export type onFinishType = (values: any) => void;
export type onFinishFailedType = (values: any) => void;


export interface TemplateLoginFormProps {
  onFinish: onFinishType;
  onFinishFailed: onFinishFailedType;
}

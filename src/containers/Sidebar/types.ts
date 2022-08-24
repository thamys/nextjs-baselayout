import type { MenuProps } from 'antd';

export type onFinishType = (values: any) => void;
export type onFinishFailedType = (values: any) => void;
export type MenuItem = Required<MenuProps>['items'][number];

export interface TemplateLoginFormProps {
  onFinish: onFinishType;
  onFinishFailed: onFinishFailedType;
}

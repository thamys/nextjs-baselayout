import { Button, ButtonProps } from "antd";
import React, { PropsWithChildren } from "react";

const index: React.FC<ButtonProps & PropsWithChildren> = ({
  children,
  ...props
}) => {
  return <Button {...props}>{children}</Button>;
};

export default index;

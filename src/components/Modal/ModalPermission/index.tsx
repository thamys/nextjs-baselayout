import React, { useMemo } from "react";
import styles from "./styles.module.css";
import { Button, message, Modal, Typography } from "antd";
import { RootState, useAppDispatch, useAppSelector } from "../../../store";
import {
  setUserMutation,
  updatePermissionAction,
} from "../../../store/ducks/users";

const { Title, Text } = Typography;

export const ModalTrocaPermissao = () => {
  const dispatch = useAppDispatch();

  const { user, status, actionType } = useAppSelector(
    (state: RootState) => state.usersReducer
  );

  const handleOk = async () => {
    //**Action que altera permissão e limpa o usuário do estado local */
    const response = await dispatch(
      updatePermissionAction({ id: user.id, role: "Master" })
    );

    if(response?.payload?.status === 200){
      message.success("Permissao Alterada com Sucesso!");
      dispatch(setUserMutation({ user: null, actionType: "iddle" }));
    }else{
      message.error("Não foi possivel alterar a Permissão, deu algum erro!");
    }

  };

  const handleClose = () => {
    dispatch(setUserMutation({ user: null, actionType: "iddle" }));
  };

  const isVisible = useMemo(
    () => user !== null && actionType === "changePermission",
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [user]
  );

  return (
    <>
      <Modal
        style={{ top: "-30%", textAlign: "center" }}
        centered={true}
        visible={isVisible}
        onCancel={handleClose}
        footer={[
          <Button
            key="submit"
            type="primary"
            loading={status === "loading"}
            onClick={handleOk}
          >
            Sim
          </Button>,
          <Button key="back" onClick={handleClose}>
            Não
          </Button>,
        ]}
      >
        <Title level={5}>
          Deseja mudar o nível do usuário {user?.username || ""} para <Text className={styles.textColorMaster}>{"MASTER"}</Text>?
        </Title>
        <Text>
          O nível Master permite acesso a todas as funções da ferramenta.
        </Text>
      </Modal>
    </>
  );
};
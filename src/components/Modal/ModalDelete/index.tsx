import React, { useMemo } from "react";
import { Button, message, Modal, Typography } from "antd";
import { RootState, useAppDispatch, useAppSelector } from "../../../store";
import {
    deleteUserAction,
    setUserMutation,
} from "../../../store/ducks/users";

const { Title } = Typography;

export const ModalDelete = () => {
  const dispatch = useAppDispatch();

  const { user, status, actionType } = useAppSelector(
    (state: RootState) => state.usersReducer
  );

  const handleOk = async () => {
    //**Action que altera permissão e limpa o usuário do estado local */
    const response = await dispatch(
        deleteUserAction({ id:user.id })
    );

    if(response?.payload?.status === 200){
      message.success("Usuario deletado com sucesso.");
      dispatch(setUserMutation({ user: null, actionType: "iddle" }));
    }else{
      message.error("Não foi possivel excluir o Usuario.");
    }

  };

  const handleClose = () => {
    dispatch(setUserMutation({ user: null, actionType: "iddle" }));
  };

  const isVisible = useMemo(
    () => user !== null && actionType === "delete",
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
          Deseja deletar o usuário {user?.username || ""}?
        </Title>
      </Modal>
    </>
  );
};

import React, { useEffect } from "react";
import { RootState, useAppDispatch, useAppSelector } from "@store/index";
import { getExamplesAction } from "@store/ducks/example";
import ExamplesTableTemplate from "./template";

const ExamplesTable: React.FC = () => {
  const dispatch = useAppDispatch();

  const { examples } = useAppSelector((state: RootState) => state.exampleReducer);
  
  useEffect(() => {
    dispatch(getExamplesAction());
  }, []);

  return <ExamplesTableTemplate data={examples} />;
};

export default ExamplesTable;

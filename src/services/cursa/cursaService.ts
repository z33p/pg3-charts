import { AxiosResponse } from "axios";
import { IReprovacoesPorAno } from "../shared/cursa/IReprovacoesPorAno";
import { httpInstance } from "../http";

const getQtdReprovacoesPorAno = async (): Promise<IReprovacoesPorAno[]> => {
  const response: AxiosResponse<IReprovacoesPorAno[]> =
    await httpInstance().get("/api/reprovacoesPorAno");

  return response.data;
};

export const cursaService = {
  getQtdReprovacoesPorAno,
};

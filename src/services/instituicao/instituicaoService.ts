import { AxiosResponse } from "axios";
import { httpInstance } from "../http";
import { ICursosPorInsituicao } from "../shared/instituicao/ICursosPorInstituicao";

const getQtdCursoPorInstituicao = async (): Promise<ICursosPorInsituicao[]> => {
  const response: AxiosResponse<ICursosPorInsituicao[]> =
    await httpInstance().get("/api/cursoPorInstituicao");

  return response.data;
};

export const instituicaoService = {
  getQtdCursoPorInstituicao,
};

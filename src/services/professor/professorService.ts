import { AxiosResponse } from "axios";
import { httpInstance } from "../http";
import { IDisciplinaPorProfessor } from "../shared/professor/IDisciplinasPorProfessor";
import { IProfessoresPorEstadoCivil } from "../shared/professor/IProfessoresPorEstadoCivil";

const getQtdDisciplinasPorProfessor = async (): Promise<
  IDisciplinaPorProfessor[]
> => {
  const response: AxiosResponse<IDisciplinaPorProfessor[]> =
    await httpInstance().get("/api/disciplinaPorProfessor");

  return response.data;
};

const getQtdProfessorPorEstadoCivil = async (): Promise<
  IProfessoresPorEstadoCivil[]
> => {
  const response: AxiosResponse<IProfessoresPorEstadoCivil[]> =
    await httpInstance().get("/api/professorPorEstadoCivil");

  return response.data;
};

export const professorService = {
  getQtdDisciplinasPorProfessor,
  getQtdProfessorPorEstadoCivil,
};

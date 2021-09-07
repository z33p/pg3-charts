import { IProfessor } from "./IProfessor";

export interface IProfessoresPorEstadoCivil extends IProfessor {
  qtdProfessoresPorEstadoCivil: number;
  name: string;
}

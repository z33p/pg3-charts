import { ICurso } from "../curso/ICurso";
import { IInstituicao } from "./IInstituicao";

export interface ICursosPorInsituicao extends IInstituicao {
  qtdCursos: number;
  cursos: Array<ICurso>;
}

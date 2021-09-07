import {
  ComposedChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from "recharts";
import { professorService } from "./services/professor/professorService";
import { useState, useEffect } from "react";

import { CircularProgress } from "@material-ui/core";
import { IDisciplinaPorProfessor } from "./services/shared/professor/IDisciplinasPorProfessor";

function GraphictQtdDisciplinasPorProfessor() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<IDisciplinaPorProfessor[]>([]);

  const getQtdDisciplinasPorProfessor = async () => {
    setIsLoading(true);

    const data: IDisciplinaPorProfessor[] =
      await professorService.getQtdDisciplinasPorProfessor();

    setIsLoading(false);

    return data;
  };

  useEffect(() => {
    getQtdDisciplinasPorProfessor()
      .then((data) => {
        setData(data);
      })
      .catch((erro) => {
        console.log("Erro", erro);
        setData([]);
      });
  }, []);

  if (isLoading) return <CircularProgress />;

  return (
    <div>
      <h3>Quantidade de Disciplinas por Professor</h3>

      <ComposedChart width={900} height={800} layout="vertical" data={data}>
        <CartesianGrid />
        <XAxis type="number" />
        <YAxis dataKey="tx_nome" type="category" scale="band" width={300} />
        <Tooltip />
        <Legend />

        <Bar
          dataKey="qtdDisciplinas"
          name="Quantidade Disciplinas"
          barSize={20}
          fill="green"
        />
      </ComposedChart>
    </div>
  );
}

export default GraphictQtdDisciplinasPorProfessor;

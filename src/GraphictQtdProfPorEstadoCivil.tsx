import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { professorService } from "./services/professor/professorService";
import { useState, useEffect } from "react";
import { CircularProgress } from "@material-ui/core";
import { IProfessoresPorEstadoCivil } from "./services/shared/professor/IProfessoresPorEstadoCivil";

const colors = ["crimson", "green", "turquoise"];

function GraphictQtdProfPorEstadoCivil() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<IProfessoresPorEstadoCivil[]>([]);

  const getQtdProfessorPorEstadoCivil = async () => {
    setIsLoading(true);

    const data: IProfessoresPorEstadoCivil[] =
      await professorService.getQtdProfessorPorEstadoCivil();

    setIsLoading(false);

    return data;
  };

  useEffect(() => {
    getQtdProfessorPorEstadoCivil()
      .then((data) => {
        setData(data);
      })
      .catch((erro) => {
        console.log("Erro", erro);
        setData([]);
      });
  }, []);

  if (isLoading) <CircularProgress />;

  return (
    <div>
      <h3>Quantidade de Professores por Estado Civil</h3>

      <PieChart width={800} height={500}>
        <Pie data={data} dataKey="qtdProfessoresPorEstadoCivil">
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
}

export default GraphictQtdProfPorEstadoCivil;

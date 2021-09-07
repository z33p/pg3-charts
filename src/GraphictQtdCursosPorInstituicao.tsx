import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from "recharts";

import { instituicaoService } from "./services/instituicao/instituicaoService";
import { useState, useEffect } from "react";

import { CircularProgress } from "@material-ui/core";
import { ICursosPorInsituicao } from "./services/shared/instituicao/ICursosPorInstituicao";

const GraphictQtdCursosPorInstituicao = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<ICursosPorInsituicao[]>([]);

  const getQtdCursosPorInstituicao = async () => {
    setIsLoading(true);

    const data: ICursosPorInsituicao[] =
      await instituicaoService.getQtdCursoPorInstituicao();

    setIsLoading(false);

    return data;
  };

  useEffect(() => {
    getQtdCursosPorInstituicao()
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
      <h3>Quantidade de Cursos por Instituição</h3>

      <BarChart width={900} height={800} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="tx_descricao" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar
          dataKey="qtdCursos"
          name="Quantidade Cursos"
          fill="blue"
          barSize={100}
          
        />
      </BarChart>
    </div>
  );
};

export default GraphictQtdCursosPorInstituicao;

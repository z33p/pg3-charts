import {
  ComposedChart,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Line,
  YAxis,
} from "recharts";
import { useState, useEffect } from "react";

import { CircularProgress } from "@material-ui/core";
import { cursaService } from "./services/cursa/cursaService";
import { IReprovacoesPorAno } from "./services/shared/cursa/IReprovacoesPorAno";

function GraphictQtdReprovacoesPorAno() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<IReprovacoesPorAno[]>([]);

  const getQtdReprovacoesPorAno = async () => {
    setIsLoading(true);

    const data: IReprovacoesPorAno[] =
      await cursaService.getQtdReprovacoesPorAno();

    setIsLoading(false);

    return data;
  };

  useEffect(() => {
    getQtdReprovacoesPorAno()
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
      <h3>Quantidade de Reprovações por Ano</h3>

      <ComposedChart width={800} height={500} data={data}>
        <CartesianGrid />
        <XAxis dataKey="id_ano" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="qtdReprovacoesPorAno"
          name="Quantidade de Reprovações por Ano"
          stroke="crimson"
        />
      </ComposedChart>
    </div>
  );
}

export default GraphictQtdReprovacoesPorAno;

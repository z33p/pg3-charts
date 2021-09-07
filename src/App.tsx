import ChartCard from "./ChartCard";
import GraphictQtdCursosPorInstituicao from "./GraphictQtdCursosPorInstituicao";
import GraphictQtdDisciplinasPorProfessor from "./GraphictQtdDisciplinasPorProfessor";
import GraphictQtdProfPorEstadoCivil from "./GraphictQtdProfPorEstadoCivil";
import GraphictQtdReprovacoesPorAno from "./GraphictQtdReprovacoesPorAno";

const style: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
};

const rowStyle: React.CSSProperties = {
  marginTop: 2 + "rem",
  marginBottom: 2 + "rem",
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
};

function App() {
  return (
    <div style={style}>
      <div style={rowStyle}>
        <ChartCard>
          <GraphictQtdCursosPorInstituicao />
        </ChartCard>

        <ChartCard>
          <GraphictQtdDisciplinasPorProfessor />
        </ChartCard>
      </div>

      <div style={rowStyle}>
        <ChartCard>
          <GraphictQtdProfPorEstadoCivil />
        </ChartCard>

        <ChartCard>
          <GraphictQtdReprovacoesPorAno />
        </ChartCard>
      </div>
    </div>
  );
}

export default App;

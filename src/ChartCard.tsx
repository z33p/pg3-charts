import React from "react";

interface Props {
  children: React.ReactNode;
}

const ChartCard = ({ children }: Props) => {
  return (
    <div className="card">
      <div style={{ padding: 1.2 + "em" }}>{children}</div>
    </div>
  );
};

export default ChartCard;

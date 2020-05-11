import React from "react";
import { Table, TableColumn } from "@royalnavy/react-component-library";

const ForecastTable = ({ title, data }) => {
  return (
    <div className="forcastDataDiv">
      <p className="forcastDataTitle">{title}</p>
      <Table data={data}>
        <TableColumn field="first">Order</TableColumn>
        <TableColumn field="second">Max Order</TableColumn>
        <TableColumn field="third">Difference</TableColumn>
      </Table>
    </div>
  );
};

export default ForecastTable;

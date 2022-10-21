import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

export default function TimeRows(props) {
  const { bestTimes } = props;

  return (
    <div style={{ height: 250, width: "100%" }}>
      <DataGrid
        columns={[{ field: "name" }, { field: "time" }]}
        rows={bestTimes}
      />
    </div>
  );
}

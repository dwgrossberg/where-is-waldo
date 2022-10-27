import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

export default function TimeRows(props) {
  const { bestTimes } = props;
  return (
    <div style={{ height: 400, width: "100%" }}>
      <div style={{ display: "flex", height: "100%" }}>
        <div style={{ flexGrow: 1 }}>
          <DataGrid
            columns={[{ field: "name", width: 150 }, { field: "time" }]}
            rows={bestTimes}
            initialState={{
              sorting: {
                sortModel: [{ field: "time", sort: "asc" }],
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}

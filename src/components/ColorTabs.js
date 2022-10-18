/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { NavLink } from "react-router-dom";
import theme from "../theme";

export default function ColorTabs() {
  const [value, setValue] = React.useState("Home");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ width: "100%" }}
      css={css`
        display: flex;
        align-items: center;
        justify-content: space-between;
      `}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="primary"
        indicatorColor="secondary"
        aria-label="primary tabs example"
      >
        <Tab value="Home" label="Home" component={NavLink} to={"/"} />
        <Tab
          value="Top Scores"
          label="Top Scores"
          component={NavLink}
          to={"/top-scores"}
        />
      </Tabs>
      <h1
        css={css`
          color: ${theme.palette.primary.main};
          text-align: right;
          @media screen and (max-width: 550px) {
            font-size: 22px;
          }
        `}
      >
        {"Where's Waldo?"}
      </h1>
    </Box>
  );
}

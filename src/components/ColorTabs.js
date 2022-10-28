/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { NavLink, useLocation } from "react-router-dom";
import theme from "../theme";

export default function ColorTabs() {
  const [value, setValue] = React.useState("Home");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const location = useLocation();
  React.useEffect(() => {
    if (location.pathname.slice(0, 11) === "/best-times") {
      setValue("Best Times");
    }
  }, [location]);

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
          value="Best Times"
          label="Best Times"
          component={NavLink}
          to={"/best-times"}
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
        <a
          href="https://en.wikipedia.org/wiki/Where%27s_Wally%3F"
          target="_blank"
          rel="noreferrer"
          css={css`
            text-decoration: none;
            color: inherit;
          `}
        >
          {"Where's Waldo?"}
        </a>
      </h1>
    </Box>
  );
}

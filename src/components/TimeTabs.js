/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import TimeRows from "./TimeRows";
import { Link } from "react-router-dom";

export default function TimeTabs(props) {
  const { level } = props;
  const [value, setValue] = React.useState(level ? level : "1");
  const { bestTimes } = props;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="best-times-level-tabs">
            <Tab
              label="Level 1"
              value="1"
              component={Link}
              to={"/best-times/level-1"}
              css={css`
                font-size: 12px;
              `}
            />
            <Tab
              label="Level 2"
              value="2"
              component={Link}
              to={"/best-times/level-2"}
              css={css`
                font-size: 12px;
              `}
            />
            <Tab
              label="Level 3"
              value="3"
              component={Link}
              to={"/best-times/level-3"}
              css={css`
                font-size: 12px;
              `}
            />
            <Tab
              label="Level 4"
              value="4"
              component={Link}
              to={"/best-times/level-4"}
              css={css`
                font-size: 12px;
              `}
            />
            <Tab
              label="Level 5"
              value="5"
              component={Link}
              to={"/best-times/level-5"}
              css={css`
                font-size: 12px;
              `}
            />
            <Tab
              label="Level 6"
              value="6"
              component={Link}
              to={"/best-times/level-6"}
              css={css`
                font-size: 12px;
              `}
            />
          </TabList>
        </Box>
        <TabPanel value="1">
          <TimeRows bestTimes={bestTimes[0].level1} />
        </TabPanel>
        <TabPanel value="2">
          <TimeRows bestTimes={bestTimes[1].level2} />
        </TabPanel>
        <TabPanel value="3">
          <TimeRows bestTimes={bestTimes[2].level3} />
        </TabPanel>
        <TabPanel value="4">
          <TimeRows bestTimes={bestTimes[3].level4} />
        </TabPanel>
        <TabPanel value="5">
          <TimeRows bestTimes={bestTimes[4].level5} />
        </TabPanel>
        <TabPanel value="6">
          <TimeRows bestTimes={bestTimes[5].level6} />
        </TabPanel>
      </TabContext>
    </Box>
  );
}

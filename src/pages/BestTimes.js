/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import TimeTabs from "../components/TimeTabs";

const BestTimes = (props) => {
  const { bestTimes } = props;
  return (
    <div className="BestTimes">
      <TimeTabs bestTimes={bestTimes} />
    </div>
  );
};

export default BestTimes;

import TimeTabs from "../components/TimeTabs";

const BestTimes = (props) => {
  const { bestTimes, level } = props;
  return (
    <div className="BestTimes">
      <TimeTabs bestTimes={bestTimes} level={level} />
    </div>
  );
};

export default BestTimes;

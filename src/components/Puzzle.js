import { useParams } from "react-router-dom";

const Puzzle = (props) => {
  const { puzzles } = props;
  const params = useParams();
  const thisPuzzle = puzzles.find((item) => item.id === params.id);
  return <img src={thisPuzzle.img} alt={thisPuzzle.id}></img>;
};

export default Puzzle;

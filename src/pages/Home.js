/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import theme from "../components/theme";

const Home = (props) => {
  const { puzzles } = props;
  return (
    <div
      className="Home"
      css={css`
        display: grid;
        grid-template: 50px repeat(auto-fit, minmax(250px, 1fr)) / repeat(
            auto-fit,
            minmax(250px, 1fr)
          );
        gap: 20px;
        margin-bottom: 25px;
      `}
    >
      <p
        css={css`
          grid-area: 1 / 1 / 2 / -1;
          place-self: center;
        `}
      >
        Choose a game board to get started!
      </p>
      {puzzles.map((item) => (
        <Link to={"/puzzles/" + item.id} style={{ textDecoration: "none" }}>
          <img
            key={item.id}
            src={item.img}
            alt={item.id}
            loading="lazy"
            css={css`
              width: 100%;
              place-self: center;
              cursor: pointer;
              border: 2px dotted ${theme.palette.primary.main};
              outline: 4px solid ${theme.palette.secondary.main};
              &:hover {
                outline: 4px dotted ${theme.palette.primary.main};
                border: 2px solid ${theme.palette.secondary.main};
              }
            `}
          />
        </Link>
      ))}
    </div>
  );
};

export default Home;

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
        grid-template: 50px repeat(auto-fit, minmax(200px, 1fr)) / repeat(
            auto-fit,
            minmax(300px, 1fr)
          );
        gap: 20px;
        margin-bottom: 25px;
        align-items: center;
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
        <Link
          to={"/puzzles/" + item.id}
          key={item.id}
          style={{ textDecoration: "none" }}
          css={css`
            &:hover {
              box-shadow: 1px 1px ${theme.palette.secondary.main};
            }
          `}
        >
          <img
            src={item.img}
            alt={item.id}
            loading="lazy"
            css={css`
              width: 100%;
              place-self: center;
              justify-content: center;
              cursor: pointer;
              margin-bottom: 5px;
              border: 2px dotted ${theme.palette.primary.main};
              outline: 4px solid ${theme.palette.secondary.main};
              &:hover {
                outline: 4px dotted ${theme.palette.primary.main};
                border: 2px solid ${theme.palette.secondary.main};
                box-shadow: 1px 1px ${theme.palette.secondary.main};
              }
            `}
          />
          <div>Level {item.level}</div>
        </Link>
      ))}
    </div>
  );
};

export default Home;

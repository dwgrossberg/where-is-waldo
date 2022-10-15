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
            border-radius: 0 0 7px 7px;
            border-bottom: 2px solid transparent;
            display: block;
            position: relative;
            padding-bottom: 5px;
            &:hover {
              border-bottom: 2px dotted ${theme.palette.primary.main};
              box-shadow: 0 8px 8px -4px lightgrey;
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
            `}
          />
          <div
            css={css`
              display: flex;
              align-items: center;
              justify-content: space-between;
            `}
          >
            Level {item.level}
            <div>
              {item.characters.map((char) => {
                let src;
                switch (char) {
                  case "waldo":
                    src = "./assets/waldo.jpg";
                    break;
                  default:
                    src = undefined;
                    break;
                }
                return <img key={char} src={src}></img>;
              })}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Home;

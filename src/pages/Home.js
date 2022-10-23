/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import theme from "../theme";

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
          font-size: 18px;
        `}
      >
        Choose a puzzle to get started!
      </p>
      {puzzles.map((item) => (
        <Link
          to={"/puzzles/" + item.id}
          key={item.id}
          css={css`
            display: block;
            position: relative;
            padding-bottom: 5px;
            border: 3px solid transparent;
            border-bottom: 2px solid transparent;
            border-radius: 0 0 7px 7px;
            border-bottom: 0.5px dotted white;
            box-shadow: 0 2px 2px -1.5px lightgrey;
            text-decoration: none;
            color: inherit;
            &:hover {
              box-shadow: 0 5px 5px -3px ${theme.palette.secondary.main};
              .puzzle-img {
                border: 3px dotted ${theme.palette.primary.main};
                outline: 3px solid ${theme.palette.secondary.main};
              }
              p {
                color: ${theme.palette.primary.main};
              }
            }
          `}
        >
          <img
            src={item.img}
            alt={item.id}
            className={"puzzle-img"}
            loading="lazy"
            css={css`
              width: 100%;
              place-self: center;
              justify-content: center;
              cursor: pointer;
              margin-bottom: 5px;
              border: 3px dotted white;
              outline: 3px solid lightgrey;
            `}
          />
          <div
            css={css`
              display: flex;
              align-items: center;
              justify-content: space-between;
              padding: 3px 7px;
            `}
          >
            <p>Level {item.level}</p>
            <div
              css={css`
                display: flex;
                gap: 5px;
                align-items: center;
              `}
            >
              {item.characters.map((item) => {
                return (
                  <img
                    key={item.name}
                    alt={item.id}
                    src={item.img}
                    css={css`
                      height: 20px;
                    `}
                  ></img>
                );
              })}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Home;

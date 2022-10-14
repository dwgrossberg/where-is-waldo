/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import gitHubIcon from "../assets/github.png";

const Footer = () => {
  return (
    <div className="Footer">
      <div
        className="made-by"
        css={css`
          color: #202832;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          gap: 10px;
          font-size: 12px;
          padding: 3px;
          border-radius: 7px;
          width: 100%;
        `}
      >
        <p>Made by</p>
        <a
          href="https://github.com/dwgrossberg"
          css={css`
            text-decoration: none;
            color: #202832;
          `}
        >
          <img
            id="github-icon"
            alt="github-icon"
            src={gitHubIcon}
            css={css`
              height: 12px;
              max-height: 16px;
              margin-top: 3px;
              transition: transform 0.3s ease-in-out;
              &:hover {
                transform: rotate(360deg) scale(1.2);
              }
            `}
          />
        </a>
        <p>Dan Grossberg</p>
      </div>
    </div>
  );
};

export default Footer;

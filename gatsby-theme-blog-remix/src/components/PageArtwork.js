import React from "react";
/** @jsx jsx */
import { jsx } from "theme-ui";

/* Shadow me to change, or remove the artwork   */

const PageArtwork = () => {
  return (
    <>
      <svg
        sx={{
          position: `absolute`,
          top: `10vh`,
          left: 0,
          width: `10vw`,
          height: `auto`,
          opacity: [0.3, 0.5, 1],
          zIndex: -1,
        }}
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 552 471'
      >
        <rect fill='#e0deff' width='316' height='265' />
        <rect fill='#f86278' x='236' y='206' width='316' height='265' />
      </svg>

      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1264 795'
        sx={{
          position: `absolute`,
          bottom: `10vh`,
          right: 0,
          width: `20vw`,
          height: `auto`,
          opacity: [0.3, 0.5, 1],
          zIndex: -1,
        }}
      >
        <rect fill='#fa9eac' x='632' width='316' height='265' />
        <rect fill='#e0deff' x='948' y='264' width='316' height='265' />
        <rect fill='#ffe69b' y='530' width='316' height='265' />
      </svg>
    </>
  );
};

export default PageArtwork;

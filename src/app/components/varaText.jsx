'use client';
import { useEffect } from 'react';
import Vara from 'vara';

export default function VaraText({ text }) {
  useEffect(() => {
    var vara = new Vara(
      '#vara-container',
      'https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Pacifico/PacificoSLO.json',
      [
        {
          text: text,
          fontSize: 72,
          strokeWidth: 1,
          color: 'white',
          textAlign: 'center',
          y: 5,
        },
      ],
    );
  }, [text]);

  return (
    <div
      id="vara-container"
      className="z-[20]"
      style={{
        width: '1000px',
        height: '200px',
        overflow: 'visible',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    ></div>
  );
}

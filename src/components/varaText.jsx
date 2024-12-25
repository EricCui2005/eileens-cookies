'use client';
import { useEffect } from 'react';
import Vara from 'vara';

export default function VaraText({ text }) {
  useEffect(() => {
    var vara = new Vara(
      '#vara-container',
      'https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Satisfy/SatisfySL.json',
      [
        {
          text: text,
          fontSize: 72,
          strokeWidth: 1,
          color: 'white',
          textAlign: 'center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
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
        height: '80px',
        position: 'relative', // Required for absolute positioning of SVG
        overflow: 'hidden', // Prevent overflow issues
      }}
    ></div>
  );
}

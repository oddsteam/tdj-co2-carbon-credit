// components/FlourishEmbed.tsx
'use client';

import { useEffect } from 'react';

interface FlourishEmbedProps {
  src: string; // ตัวอย่าง: "visualisation/22534216"
}

export default function FlourishEmbed({ src }: FlourishEmbedProps) {
  useEffect(() => {
    const scriptId = 'flourish-embed-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.src = 'https://public.flourish.studio/resources/embed.js';
      script.id = scriptId;
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div
      className="flourish-embed flourish-chart w-full"
      data-src={src}
    >
      <noscript>
        <img
          src={`https://public.flourish.studio/${src}/thumbnail`}
          width="100%"
          alt="chart visualization"
        />
      </noscript>
    </div>
  );
}

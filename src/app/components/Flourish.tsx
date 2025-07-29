'use client';

import { useEffect, useState } from 'react';

interface FlourishEmbedProps {
  src: string; // ตัวอย่าง: "visualisation/22534216"
}

export default function FlourishEmbed({ src }: FlourishEmbedProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [src]);

  return (
    <div className="w-full h-full flex items-center justify-center relative">
      {loading ? (
        <div className="flex items-center justify-center">
          <div className="w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin" />
        </div>
      ) : (
        <iframe
          title="Flourish chart"
          src={`https://public.flourish.studio/${src}/embed`}
          className="w-full h-full border-0"
          loading="lazy"
        />
      )}
    </div>
  );
}

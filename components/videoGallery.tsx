// components/VideoGallery.tsx
import React from 'react';

const videoLinks: string[] = [
  'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  'https://youtu.be/3JZ_D3ELwOQ',
  'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  // 'https://youtu.be/3JZ_D3ELwOQ',
  // 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  // 'https://youtu.be/3JZ_D3ELwOQ',
];

const getYouTubeEmbedUrl = (url: string): string | null => {
  const match = url.match(/(?:youtube\.com\/.*v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
  return match ? `https://www.youtube.com/embed/${match[1]}` : null;
};

export const VideoGallery = () => {
  return (
    <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
      {videoLinks.map((url, index) => {
        const embedUrl = getYouTubeEmbedUrl(url);
        return embedUrl ? (
          <div key={index} className="aspect-video">
            <iframe
              className="w-full h-full rounded shadow"
              src={embedUrl}
              title={`YouTube video ${index + 1}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ) : null;
      })}
    </div>
  );
};


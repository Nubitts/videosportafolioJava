import React from 'react';

const VideoCard = ({ video, onClick }) => {
    // Calculate aspect ratio to avoid layout shift (padding-bottom hack or aspect-ratio property)
    // We will use inline style for aspect-ratio as it's the cleanest modern way
    const aspectRatio = video.width && video.height ? `${video.width} / ${video.height}` : '16/9';

    return (
        <div className="mb-6 break-inside-avoid group cursor-pointer relative" onClick={() => onClick(video)}>
            <div className="relative rounded-lg overflow-hidden bg-gray-900 shadow-lg transition-transform duration-300 group-hover:-translate-y-1">
                <div style={{ aspectRatio: aspectRatio }}>
                    <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                    />
                </div>

                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-white font-bold text-lg leading-tight mb-1">{video.title}</h3>
                        <div className="flex flex-wrap gap-2 mb-2">
                            {video.tags && video.tags.map(tag => (
                                <span key={tag} className="text-xs text-gray-300 bg-white/10 px-2 py-0.5 rounded-full backdrop-blur-sm">#{tag}</span>
                            ))}
                        </div>
                        <button className="flex items-center gap-2 text-white text-sm font-semibold mt-2">
                            <span className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 ml-0.5">
                                    <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                                </svg>
                            </span>
                            Watch Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoCard;

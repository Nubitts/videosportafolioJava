import React from 'react';
import Masonry from 'react-masonry-css';
import VideoCard from './VideoCard';

const VideoGrid = ({ videos, onVideoClick }) => {
    const breakpointColumnsObj = {
        default: 4,
        1280: 3,
        1024: 3,
        768: 2,
        500: 1
    };

    return (
        <Masonry
            breakpointCols={breakpointColumnsObj}
            className="flex w-auto -ml-6"
            columnClassName="pl-6 bg-clip-padding"
        >
            {videos.map((video) => (
                <VideoCard key={video.id} video={video} onClick={onVideoClick} />
            ))}
        </Masonry>
    );
};

export default VideoGrid;

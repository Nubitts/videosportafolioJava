import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './components/Header';
import VideoGrid from './components/VideoGrid';
import VideoModal from './components/VideoModal';

function App() {
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch videos from Spring Boot backend
        // Use relative path relying on Vite proxy in dev or same origin in prod
        axios.get('/api/videos')
            .then(response => {
                setVideos(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching videos:", error);
                // Fallback for demo if backend isn't running yet or fails
                setVideos([
                    { id: '1', title: 'Video Demo', vimeoId: '76979871', thumbnail: 'https://i.vimeocdn.com/video/456_640.jpg', width: 640, height: 800, tags: ['arte', 'motion'] },
                    { id: '2', title: 'Nature Timelapse', vimeoId: '1084537', thumbnail: 'https://i.vimeocdn.com/video/456_640.jpg', width: 640, height: 480, tags: ['nature', 'timelapse'] },
                    { id: '3', title: 'Urban Exploration', vimeoId: '22439234', thumbnail: 'https://i.vimeocdn.com/video/456_640.jpg', width: 640, height: 960, tags: ['urban', 'city'] },
                    { id: '4', title: 'Abstract Art', vimeoId: '5183353', thumbnail: 'https://i.vimeocdn.com/video/456_640.jpg', width: 640, height: 640, tags: ['abstract', 'art'] },
                    { id: '5', title: 'Music Video', vimeoId: '3345423', thumbnail: 'https://i.vimeocdn.com/video/456_640.jpg', width: 640, height: 360, tags: ['music', 'video'] }
                ]);
                setLoading(false);
            });
    }, []);

    return (
        <div className="min-h-screen bg-brand-dark font-sans text-gray-100">
            <Header />

            <main className="container mx-auto px-6 py-8">
                {loading ? (
                    <div className="flex justify-center items-center h-64">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-accent"></div>
                    </div>
                ) : (
                    <VideoGrid videos={videos} onVideoClick={setSelectedVideo} />
                )}
            </main>

            {selectedVideo && (
                <VideoModal video={selectedVideo} onClose={() => setSelectedVideo(null)} />
            )}
        </div>
    );
}

export default App;

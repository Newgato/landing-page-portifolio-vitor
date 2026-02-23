import './VideoBackground.css';
import videoFile from '../assets/video-background2.mp4';

const VideoBackground = () => {
    return (
        <div className="video-background">
            <video autoPlay loop muted playsInline className="video-content">
                <source src={videoFile} type="video/mp4" />
            </video>
            <div className="overlay"></div>
        </div>
    );
};

export default VideoBackground
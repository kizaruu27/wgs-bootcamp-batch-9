export default function VideoView({selectedVideo, videoData, onTitleClick}) {
    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-8 video-section">
                    <iframe width="865" height="576"
                        src={`https://www.youtube.com/embed/${selectedVideo.url}`}>
                    </iframe>
                    <h3>{selectedVideo.title}</h3>
                    <p>{selectedVideo.description}</p>
                    <p>{selectedVideo.timeStamp}</p>
                </div>
                <div className="col-4 video-thumbnail">
                    {videoData.map((video, key) => {
                        return (
                            <div className="video-item my-5 d-flex-wrap" key={key} onClick={() => onTitleClick(video.id.videoId, video.snippet.thumbnails.high.url, video.snippet.title, video.snippet.description, new Date(video.snippet.publishedAt.toString()).toLocaleDateString(), videoData)}>
                                <img src={video.snippet.thumbnails.high.url}  width={250}/>
                                <h3>{video.snippet.title}</h3>
                                <p>{new Date(video.snippet.publishedAt.toString()).toLocaleDateString()}</p>
                                <p>{video.snippet.description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
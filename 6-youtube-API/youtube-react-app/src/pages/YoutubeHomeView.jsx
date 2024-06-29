import SearchBar from "../components/SearchBar";
import VideoList from "../components/VideoList";

export default function YoutubeHomeView() {
    return (
        <div className="container w-50 text-center mt-3">
            <SearchBar />
            <VideoList />
        </div>
    )
}
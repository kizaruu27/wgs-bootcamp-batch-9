import SearchBar from "../components/SearchBar";
import VideoList from "../components/VideoList";
import VideoView from "../components/VideoView";
import { useSelector } from "react-redux";

export default function YoutubeHomeView() {
    const isSelected = useSelector(state => state.youtube.isSelected);

    return (
        <>
            <div className="container w-50 text-center mt-3">
                <SearchBar />
            </div>
            {isSelected ? <VideoView /> : <VideoList/>}
            
        </>
    )
}
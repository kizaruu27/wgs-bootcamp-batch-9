import SearchBar from "../components/SearchBar";
import VideoList from "../components/VideoList";
import VideoView from "../components/VideoView";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

export default function YoutubeHomeView() {

    return (
        <>
        <Router>
            <SearchBar />
            <Routes>
                <Route exact path="/list" Component={VideoList}/>
                <Route exact path="/view" Component={VideoView}/>
            </Routes>
        </Router>
        </>
    )
}
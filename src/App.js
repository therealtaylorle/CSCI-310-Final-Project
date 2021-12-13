import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Navbar from './Components/Navbar';
import VideosList from './Components/VideosList';
import VideoPlayer from './Components/VideoPlayer';

function App() {

  const [videosList, setVideosList] = useState([]);
  const [videoId, setVideoId] = useState('');
  const [title, setTitle] = useState('');

  const playVideoHandler = (videoid, videoTitle) => {
    // Setting states to load and play clicked video
    setVideoId(videoid);
    setTitle(videoTitle);
  }
  // Sending request to youtube api to get playlist videos
  useEffect(() => {
    axios.get('https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails%2C%20snippet&maxResults=20&playlistId=PLpv6VkolS0oj8ax6BPyIGvGuBHC9UJ-AL&key=AIzaSyAlSjNJFTTff191RuB6fy4Xc_yfMMbm4MI')
      .then(res => {
        setVideosList(res.data.items);
      })
  }, []);
  return (
    <div className="App">
      <Navbar />
      {/**Video player component **/}
      {videoId && <VideoPlayer videoId={videoId} title={title} />}
      {/**Videos list component **/}
      <VideosList playVideoHandler={playVideoHandler} videosList={videosList} />
    </div>
  );
}

export default App;

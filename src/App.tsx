import { createRef } from 'react';
import { playerContext } from './models/context';
import { VideoPlayer } from './components/video/VideoPlayer';
import { Playlist } from './components/playlist/Playlist';
import { Controls } from './components/controls/Controls';
import './App.css';

function App() {
  const ContextWrapper = playerContext.Provider;
  const videoRef = createRef<HTMLVideoElement>();

  return (
    <ContextWrapper value={{ html: videoRef }}>
      <div className='app'>
        <VideoPlayer />
        <Controls />
        <Playlist />
      </div>
    </ContextWrapper>
  );
}

export default App;

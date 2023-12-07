import { useAppState } from '../../models/appState';
import { PlaylistItem } from './PlaylistItem';
import { UrlInput } from './UrlInput';
import './Playlist.css';

export function Playlist() {
  const playlist = useAppState(state => state.playlist);
  const playing = useAppState(state => state.playing);

  return (
    <div className='playlist'>
      <UrlInput />

      <ul className='playlist-items'>
        {playlist.map(item => (
          <PlaylistItem
            key={item.src}
            item={item}
            isPlaying={item === playing}
          />
        ))}
      </ul>
    </div>
  );
}

import { useContext } from 'react';
import { useAppState } from '../../models/appState';
import { pauseVideo, unpauseVideo } from '../../models/playback';
import { playerContext } from '../../models/context';

export function PlayPause() {
  const { html } = useContext(playerContext);
  const playing = useAppState(state => state.playing);
  const isPaused = useAppState(state => state.isPaused);
  const setPaused = useAppState(state => state.setPaused);

  const onclick = () => {
    if (!isPaused) {
      pauseVideo(html.current);
      setPaused(true);
    } else {
      unpauseVideo(html.current);
      setPaused(false);
    }
  };

  return (
    <button
      type='button'
      className='controls-button'
      disabled={!playing}
      onClick={onclick}
    >
      {isPaused && playIcon()}
      {!isPaused && pauseIcon()}
    </button>
  );
}

function playIcon() {
  return (
    <svg
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      width='32'
      height='32'
      viewBox='0 0 32 32'
    >
      <title>play</title>
      <path d='M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM16 29c-7.18 0-13-5.82-13-13s5.82-13 13-13 13 5.82 13 13-5.82 13-13 13zM12 9l12 7-12 7z'></path>
    </svg>
  );
}

function pauseIcon() {
  return (
    <svg
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      width='32'
      height='32'
      viewBox='0 0 32 32'
    >
      <title>pause</title>
      <path d='M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM16 29c-7.18 0-13-5.82-13-13s5.82-13 13-13 13 5.82 13 13-5.82 13-13 13zM10 10h4v12h-4zM18 10h4v12h-4z'></path>
    </svg>
  );
}

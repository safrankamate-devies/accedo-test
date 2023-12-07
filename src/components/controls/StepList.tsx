import { useContext } from 'react';
import { useAppState } from '../../models/appState';
import { playVideo } from '../../models/playback';
import { playerContext } from '../../models/context';

type Props = {
  dir: 1 | -1;
};

export function StepList({ dir }: Props) {
  const { html } = useContext(playerContext);
  const playlist = useAppState(state => state.playlist);
  const playing = useAppState(state => state.playing);
  const setPlaying = useAppState(state => state.setPlaying);

  const onclick = () => {
    const index = playlist.indexOf(playing);
    const next =
      (index === -1 && playlist[0]) ||
      (dir === 1 && playlist[(index + 1) % playlist.length]) ||
      (dir === -1 && playlist[(index + playlist.length - 1) % playlist.length]);

    setPlaying(next);
    playVideo(next.src, html.current);
  };

  return (
    <button
      type='button'
      className='controls-button'
      disabled={!playing}
      onClick={onclick}
    >
      {dir === -1 && prevIcon()}
      {dir === 1 && nextIcon()}
    </button>
  );
}

function prevIcon() {
  return (
    <svg
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      width='32'
      height='32'
      viewBox='0 0 32 32'
    >
      <title>previous</title>
      <path d='M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM16 29c-7.18 0-13-5.82-13-13s5.82-13 13-13 13 5.82 13 13-5.82 13-13 13z'></path>
      <path d='M14 16l8-6v12z'></path>
      <path d='M10 10h4v12h-4v-12z'></path>
    </svg>
  );
}

function nextIcon() {
  return (
    <svg
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      width='32'
      height='32'
      viewBox='0 0 32 32'
    >
      <title>next</title>
      <path d='M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16zM16 29c7.18 0 13-5.82 13-13s-5.82-13-13-13-13 5.82-13 13 5.82 13 13 13z'></path>
      <path d='M18 16l-8-6v12z'></path>
      <path d='M22 10h-4v12h4v-12z'></path>
    </svg>
  );
}

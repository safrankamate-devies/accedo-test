import { useContext } from 'react';
import { useAppState } from '../../models/appState';
import { playerContext } from '../../models/context';
import { seekVideo } from '../../models/playback';

type Props = {
  dir: 1 | -1;
};

export function Seek({ dir }: Props) {
  const { html } = useContext(playerContext);
  const playing = useAppState(state => state.playing);

  const onclick = () => {
    seekVideo(html.current, dir);
  };

  return (
    <button
      type='button'
      className='controls-button'
      disabled={!playing}
      onClick={onclick}
    >
      {dir === -1 && backIcon()}
      {dir === 1 && fwIcon()}
    </button>
  );
}

function backIcon() {
  return (
    <svg
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      width='32'
      height='32'
      viewBox='0 0 32 32'
    >
      <title>backward</title>
      <path d='M16 32c8.837 0 16-7.163 16-16s-7.163-16-16-16-16 7.163-16 16 7.163 16 16 16zM16 3c7.18 0 13 5.82 13 13s-5.82 13-13 13-13-5.82-13-13 5.82-13 13-13zM22 21l-7-5 7-5zM14 21l-7-5 7-5z'></path>
    </svg>
  );
}

function fwIcon() {
  return (
    <svg
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      width='32'
      height='32'
      viewBox='0 0 32 32'
    >
      <title>forward</title>
      <path d='M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM16 29c-7.18 0-13-5.82-13-13s5.82-13 13-13 13 5.82 13 13-5.82 13-13 13zM10 11l7 5-7 5zM18 11l7 5-7 5z'></path>
    </svg>
  );
}

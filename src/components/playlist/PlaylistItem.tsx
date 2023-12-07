import classnames from 'classnames';
import { PlaylistEntry } from '../../models/playlist';
import { useAppState } from '../../models/appState';
import { SyntheticEvent, useContext } from 'react';
import { playerContext } from '../../models/context';
import { playVideo } from '../../models/playback';
import './PlaylistItem.css';

type Props = {
  key: string;
  item: PlaylistEntry;
  isPlaying: boolean;
};

export function PlaylistItem({ item, isPlaying }: Props) {
  const { html } = useContext(playerContext);

  const setPlaying = useAppState(state => state.setPlaying);
  const removeItem = useAppState(state => state.removeItem);

  const onclick = () => {
    setPlaying(item);
    playVideo(item.src, html.current);
  };

  const onremove = (e: SyntheticEvent) => {
    e.stopPropagation();
    removeItem(item);
  };

  return (
    <li
      className={classnames('playlist-item', isPlaying && '-active')}
      tabIndex={0}
      onClick={onclick}
    >
      <div className='playlist-item_label'>{item.label}</div>
      <button type='button' className='playlist-item_remove' onClick={onremove}>
        ✖
      </button>
    </li>
  );
}

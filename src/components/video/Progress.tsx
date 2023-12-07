import { SyntheticEvent, useContext, useEffect, useState } from 'react';
import { playerContext } from '../../models/context';
import { getProgress, seekToPoint } from '../../models/playback';
import { useAppState } from '../../models/appState';
import './Progress.css';

export function Progress() {
  const { html } = useContext(playerContext);
  const playing = useAppState(state => state.playing);

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const next = getProgress(html.current);
      setProgress(next);
    };

    html.current.addEventListener('timeupdate', update);

    return () => html.current.removeEventListener('timeupdate', update);
  }, [html.current]);

  const onclick = (e: SyntheticEvent) => {
    if (!playing) return;

    const { clientX } = e.nativeEvent as PointerEvent;
    const { left, width } = (e.target as HTMLElement).getBoundingClientRect();
    const r = (clientX - left) / width;
    seekToPoint(html.current, r);
  };

  const pct = (100 * progress).toFixed(3) + '%';

  return (
    <div className='videoplayer-progress' onClick={onclick}>
      <div className='videoplayer-progress_bar' style={{ width: pct }} />
    </div>
  );
}

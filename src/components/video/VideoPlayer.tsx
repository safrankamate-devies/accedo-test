import { useContext } from 'react';
import { playerContext } from '../../models/context';
import { Progress } from './Progress';
import './VideoPlayer.css';

export function VideoPlayer() {
  const { html } = useContext(playerContext);

  return (
    <div className='videoplayer'>
      <video className='videoplayer_media' ref={html} />
      <Progress />
    </div>
  );
}

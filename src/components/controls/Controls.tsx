import { PlayPause } from './PlayPause';
import { Seek } from './Seek';
import { StepList } from './StepList';
import './Controls.css';

export function Controls() {
  return (
    <div className='controls'>
      <StepList dir={-1} />
      <Seek dir={-1} />
      <PlayPause />
      <Seek dir={1} />
      <StepList dir={1} />
    </div>
  );
}

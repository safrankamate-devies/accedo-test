import { SyntheticEvent, useState } from 'react';
import { useAppState } from '../../models/appState';
import { PlaylistEntry } from '../../models/playlist';
import './UrlInput.css';

export function UrlInput() {
  const addItem = useAppState(state => state.addItem);
  const [input, setInput] = useState('');

  const oninput = ({ target }: SyntheticEvent) => {
    setInput((target as HTMLInputElement).value);
  };

  const onsubmit = (e: SyntheticEvent) => {
    e.stopPropagation();
    e.preventDefault();
    if (!input.trim()) return;

    const toAdd: PlaylistEntry = {
      src: input,
      label: input.split('/').at(-1),
    };
    addItem(toAdd);
    setInput('');
  };

  return (
    <form className='playlist-input' onSubmit={onsubmit}>
      <input
        type='text'
        className='playlist-input_url'
        value={input}
        onInput={oninput}
      />
      <button type='submit' className='playlist-input_button'>
        Add
      </button>
    </form>
  );
}

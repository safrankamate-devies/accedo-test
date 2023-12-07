import { create } from 'zustand';
import { DEFAULT_PLAYLIST, PlaylistEntry } from './playlist';

export type AppState = {
  playlist: PlaylistEntry[];
  playing: PlaylistEntry;
  isPaused: boolean;

  addItem: (item: PlaylistEntry) => void;
  removeItem: (item: PlaylistEntry) => void;
  setPlaying: (item: PlaylistEntry) => void;
  setPaused: (isPaused: boolean) => void;
};

export const useAppState = create<AppState>(set => ({
  playlist: [...DEFAULT_PLAYLIST],
  playing: null,
  isPaused: false,

  addItem: (toAdd: PlaylistEntry) =>
    set(prev => ({
      playlist: [...prev.playlist, toAdd],
    })),

  removeItem: (toRemove: PlaylistEntry) =>
    set(prev => ({
      playlist: prev.playlist.filter(item => item !== toRemove),
    })),

  setPlaying: (item: PlaylistEntry) =>
    set({
      playing: item,
      isPaused: false,
    }),
  setPaused: (isPaused: boolean) => set({ isPaused }),
}));

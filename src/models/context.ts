import { RefObject, createContext } from 'react';

export type PlayerContext = {
  html: RefObject<HTMLVideoElement>;
};

export const playerContext = createContext<PlayerContext>(undefined);

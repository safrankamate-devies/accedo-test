export type PlaylistEntry = {
  src: string;
  label: string;
};

export const DEFAULT_PLAYLIST: PlaylistEntry[] = [
  {
    src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    label: 'Big Buck Bunny',
  },
  {
    src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    label: 'Tears of Steel',
  },
  {
    src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
    label: 'Sintel',
  },
];

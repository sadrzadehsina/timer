export interface Timer {
  start: () => void;
  stop: () => void;
  time: string;
}
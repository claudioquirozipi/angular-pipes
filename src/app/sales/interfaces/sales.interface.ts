export enum Color {
  red,
  black,
  blue,
  green,
}

export interface Hero {
  name: string;
  fly: boolean;
  color: Color;
}

export type HeroParams = 'name' | 'fly' | 'color';

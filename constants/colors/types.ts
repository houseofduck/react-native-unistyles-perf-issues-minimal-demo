import { COLORS } from '.';

export type ColorName = keyof typeof COLORS;

export type ShadeKeys<T extends ColorName> = keyof (typeof COLORS)[T];

export type ColorKey = `${ColorName}.${ShadeKeys<ColorName>}`;

import { COLORS } from '.';
import { ColorKey, ColorName, ShadeKeys } from './types';

// Overload for when no shade is provided (returns default)
export function getColor<T extends ColorName>(color: T): (typeof COLORS)[T]['default'];
// Overload for when a shade is provided
export function getColor<T extends ColorName, S extends ShadeKeys<T>>(
  color: T,
  shade: S
): (typeof COLORS)[T][S];
export function getColor<T extends ColorName, S extends ShadeKeys<T>>(
  color: T,
  shade?: S
): (typeof COLORS)[T][S] | (typeof COLORS)[T]['default'] {
  if (shade === undefined) {
    return COLORS[color].default;
  }
  return COLORS[color][shade];
}

export function getColorByKey(key: ColorKey): string {
  const [color, shade] = key.split('.') as [ColorName, ShadeKeys<ColorName>];
  return COLORS[color][shade];
}

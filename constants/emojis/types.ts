import EMOJIS from '.';

type ValueOf<T> = T[keyof T];

export type EmojiInfo = {
  readonly name: string;
  readonly code: string;
};

export type EmojiCategory = {
  readonly [key: string]: EmojiInfo;
};

export type EMOJISType = typeof EMOJIS;

export type EmojiCategoryKey = keyof EMOJISType;

export type EmojiKey = ValueOf<{
  [K in EmojiCategoryKey]: keyof EMOJISType[K];
}>;

export type EmojiKeyProp = {
  emojiKey: EmojiKey;
};

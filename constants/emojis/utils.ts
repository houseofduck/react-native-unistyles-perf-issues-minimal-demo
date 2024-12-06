import EMOJIS from '.';
import { EmojiCategoryKey, EmojiInfo, EmojiKey } from './types';

export function isValidEmojiKey(key: string): key is EmojiKey {
  return Object.values(EMOJIS).some(category => Object.keys(category).includes(key));
}

export function getEmojiByKey(emojiKey: EmojiKey): string {
  for (const category of Object.values(EMOJIS)) {
    if (emojiKey in category) {
      return (category[emojiKey as keyof typeof category] as EmojiInfo).code;
    }
  }
  return 'Emoji not found';
}

export function getAllEmojiKeys(): EmojiKey[] {
  return Object.values(EMOJIS).flatMap(
    category => Object.keys(category) as (keyof typeof category)[]
  );
}

export function getEmojisInCategory(category: EmojiCategoryKey): EmojiInfo[] {
  return Object.values(EMOJIS[category]);
}

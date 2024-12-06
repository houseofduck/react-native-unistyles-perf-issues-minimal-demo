import { getColor } from './colors/utils';

export const titleFont = 'CoFoWeather-CondensedBold';
export const bodyFontRegular = 'Inter-Regular';
export const bodyFontMedium = 'Inter-Medium';
export const bodyFontSemiBold = 'Inter-SemiBold';
export const bodyFontBold = 'Inter-Bold';

const typography = {
  headings: {
    h1: {
      fontFamily: titleFont,
      fontSize: 30,
      lineHeight: 36,
    },
    h2: {
      fontFamily: titleFont,
      fontSize: 28,
      lineHeight: 36,
    },
    h3: {
      fontSize: 23,
      fontFamily: titleFont,
      lineHeight: 32,
    },
    h4: {
      fontSize: 20,
      fontFamily: titleFont,
      lineHeight: 28,
    },
    h5: {
      fontSize: 18,
      fontFamily: titleFont,
      lineHeight: 24,
    },
    h6: {
      fontSize: 16,
      fontFamily: titleFont,
      lineHeight: 22,
    },
  },

  body: {
    bodyLarge: {
      fontFamily: bodyFontRegular,
      fontSize: 18,
      lineHeight: 28,
      color: getColor('neutral', 45),
    },
    bodyMedium: {
      fontFamily: bodyFontRegular,
      fontSize: 16,
      lineHeight: 26,
      color: getColor('neutral', 45),
    },
    bodySmall: {
      fontFamily: bodyFontRegular,
      fontSize: 14,
      lineHeight: 20,
      color: getColor('neutral', 45),
    },
  },

  display: {
    displayMassive: {
      fontSize: 92,
      fontFamily: titleFont,
      lineHeight: 112,
    },
    displayExtraLarge: {
      fontSize: 48,
      fontFamily: titleFont,
      lineHeight: 56,
    },
    displayLarge: {
      fontSize: 40,
      fontFamily: titleFont,
      lineHeight: 44,
    },
    displayMedium: {
      fontSize: 36,
      fontFamily: titleFont,
      lineHeight: 44,
    },
    displaySmall: {
      fontSize: 32,
      fontFamily: titleFont,
      lineHeight: 40,
    },
  },

  labels: {
    labelHuge: {
      fontFamily: bodyFontSemiBold,
      fontSize: 24,
      lineHeight: 32,
    },
    labelExtraLarge: {
      fontFamily: bodyFontMedium,
      fontSize: 18,
      lineHeight: 22,
    },
    labelLarge: {
      fontFamily: bodyFontMedium,
      fontSize: 16,
      lineHeight: 20,
    },
    labelMedium: {
      fontFamily: bodyFontMedium,
      fontSize: 14,
      lineHeight: 18,
    },
    labelSmall: {
      fontFamily: bodyFontMedium,
      fontSize: 12,
      lineHeight: 16,
    },
    labelExtraSmall: {
      fontFamily: bodyFontMedium,
      fontSize: 10,
      lineHeight: 14,
    },
  },

  action: {
    buttonLarge: {
      fontFamily: bodyFontMedium,
      fontSize: 18,
      lineHeight: 24,
    },
    buttonMedium: {
      fontFamily: bodyFontSemiBold,
      fontSize: 16,
      lineHeight: 22,
    },
    buttonSmall: {
      fontFamily: bodyFontMedium,
      fontSize: 14,
      lineHeight: 20,
    },
    link: {
      fontFamily: bodyFontRegular,
      fontSize: 16,
      lineHeight: 24,
      textDecorationLine: 'underline',
    },
    ctaLink: {
      fontSize: 16,
      lineHeight: 26,
      textDecorationLine: 'underline',
      fontFamily: bodyFontMedium,
    },
  },

  other: {
    caption: {
      fontFamily: bodyFontRegular,
      fontSize: 12,
      lineHeight: 16,
    },
    emphasized: {
      fontFamily: bodyFontRegular,
      fontSize: 16,
      fontStyle: 'italic',
      lineHeight: 24,
    },
    quote: {
      fontFamily: bodyFontRegular,
      fontSize: 16,
      fontStyle: 'italic',
      lineHeight: 24,
      paddingLeft: 16,
    },
    code: {
      fontFamily: bodyFontRegular,
      fontSize: 14,
      lineHeight: 20,
    },
    allCaps: {
      fontFamily: bodyFontMedium,
      fontSize: 13,
      lineHeight: 18,
      textTransform: 'uppercase',
    },
  },
} as const;

export default typography;

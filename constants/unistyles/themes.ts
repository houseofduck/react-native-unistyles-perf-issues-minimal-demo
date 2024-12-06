import { COLORS } from "../colors";
import { getColor } from "../colors/utils";

type Theme = {
  radius: {
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
  gap: {
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
  padding: {
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
  margin: {
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
  colors: {
    primitives: typeof COLORS;
    surface: {
      "000": string;
      "020": string;
      "050": string;
      "100": string;
      "200": string;
      "300": string;
      "400": string;
      "500": string;
      "600": string;
      "900": string;
    };
    text: {
      "000": string;
      "200": string;
      "400": string;
      "500": string;
      "900": string;
    };
    feedback: {
      warning: {
        default: string;
      };
      error: {
        default: string;
      };
      success: {
        default: string;
      };
    };
    misc: {
      red: {
        default: string;
      };
      green: {
        default: string;
      };
      blue: {
        default: string;
      };
      yellow: {
        default: string;
      };
      purple: {
        default: string;
      };
    };
  };
};

const sharedValues: Pick<Theme, "gap" | "margin" | "padding" | "radius"> = {
  gap: {
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  padding: {
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  margin: {
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  radius: {
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
  },
};

export const lightTheme: Theme = {
  ...sharedValues,
  colors: {
    primitives: { ...COLORS },
    surface: {
      "000": getColor("neutral", 100),
      "020": getColor("neutral", 97),
      "050": getColor("neutral", 95),
      "100": getColor("neutral", 85),
      "200": getColor("neutral", 75),
      "300": getColor("neutral", 65),
      "400": getColor("neutral", 55),
      "500": getColor("neutral", 45),
      "600": getColor("neutral", 35),
      "900": getColor("neutral", 0),
    },
    text: {
      "000": getColor("neutral", 100),
      "200": getColor("neutral", 65),
      "400": getColor("neutral", 55),
      "500": getColor("neutral", 45),
      "900": getColor("neutral", 15),
    },
    feedback: {
      warning: {
        default: "#FCBD11",
      },
      error: {
        default: getColor("red", 35),
      },
      success: {
        default: getColor("green", 45),
      },
    },
    misc: {
      red: {
        default: getColor("red", "default"),
      },
      green: {
        default: getColor("green", "default"),
      },
      blue: {
        default: getColor("blue", "default"),
      },
      yellow: {
        default: getColor("yellow", "default"),
      },
      purple: {
        default: getColor("purple", "default"),
      },
    },
  },
} as const;

export const darkTheme: Theme = {
  ...sharedValues,
  colors: {
    primitives: { ...COLORS },
    surface: {
      "000": getColor("neutral", 15),
      "020": getColor("neutral", 25),
      "050": getColor("neutral", 35),
      "100": getColor("neutral", 45),
      "200": getColor("neutral", 55),
      "300": getColor("neutral", 65),
      "400": getColor("neutral", 75),
      "500": getColor("neutral", 85),
      "600": getColor("neutral", 95),
      "900": getColor("neutral", 100),
    },
    text: {
      "000": getColor("neutral", 0),
      "200": getColor("neutral", 75),
      "400": getColor("neutral", 85),
      "500": getColor("neutral", 90),
      "900": getColor("neutral", 100),
    },
    feedback: {
      warning: {
        default: "#FFE59D",
      },
      error: {
        default: getColor("red", 65),
      },
      success: {
        default: getColor("green", 90),
      },
    },
    misc: {
      red: {
        default: getColor("red", "default"),
      },
      green: {
        default: getColor("green", "default"),
      },
      blue: {
        default: getColor("blue", "default"),
      },
      yellow: {
        default: getColor("yellow", "default"),
      },
      purple: {
        default: getColor("purple", "default"),
      },
    },
  },
} as const;

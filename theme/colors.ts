import { PipesterBrandColor } from "../types/general.types";

interface PipesterColorsType {
  blue: PipesterBrandColor;
  pink: PipesterBrandColor;
  yellow: PipesterBrandColor;
  brown: PipesterBrandColor;
  orange: PipesterBrandColor;
  green: PipesterBrandColor;
  purple: PipesterBrandColor;
}
export const pipesterColors: PipesterColorsType = {
  blue: {
    dark: "#021821",
    median: "#0E6B8E",
    normal: "#55BDE5",
    main: "#9DDBF3",
    bright: "#E3FCFF",
  },

  pink: {
    dark: "#280619",
    median: "#7F1C52",
    normal: "#D44191",
    main: "#EF8BB7",
    bright: "#FFDBEB",
  },
  yellow: {
    dark: "#161104",
    median: "#8D6600",
    normal: "#FFD228",
    main: "#FFEA57",
    bright: "#FFF5AF",
  },
  brown: {
    dark: "#361E10",
    median: "#845539",
    normal: "#DA9E7B",
    main: "#F5DEC7",
    bright: "#ffffff",
  },
  orange: {
    dark: "#1E0E05",
    median: "#7E3C15",
    normal: "#F57931",
    main: "#FEAE80",
    bright: "#FFD9C2",
  },
  green: {
    dark: "#051803",
    median: "#5E7D0D",
    normal: "#BCDA36",
    main: "#DFF36F",
    bright: "#F4FFB5",
  },
  purple: {
    dark: "#120824",
    median: "#3E1985",
    normal: "#6831D4",
    main: "#A985EF",
    bright: "#E5D8FF",
  },
};

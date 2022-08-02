import { PaletteMode } from "@mui/material";
import ProductSans from "../assets/fonts/ProductSans/ProductSans-Regular.ttf";
export const getTheme = (mode: PaletteMode) => ({
  palette: {
    mode: mode,
    primary: {
      main: "#3d5a80",
      dark: "#293241",
      light: "#98c1d9",
    },
    secondary: {
      main: "#9e2a2b",
    },
    background: {
      default: mode === "light" ? "#e9ecef" : "#3A3A4A",
      paper: mode === "light" ? "#fff" : "#484854",
    },
  },
  typography: {
    fontFamily: ["revert-layer", "Product"].join(","),
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "#293241",
          color: "white",
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Product';
          font-style: Regular;
          font-display: swap;
          font-weight: 400;
          src: local('Product'), local('Product-Regular'), url(${ProductSans}) format('ttf');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
  },
});

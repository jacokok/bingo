import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import shimReactPdf from "vite-plugin-shim-react-pdf";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(), shimReactPdf()],
  base: "/bingo/",
});

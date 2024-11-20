import { defineConfig } from "vite";
export default defineConfig({
  base: "",
  build: {
    rollupOptions: {
      input: ["./index.html", "./contact.html","./produse.html","./servicii.html"],
    },
  },
});
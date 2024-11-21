import { defineConfig } from "vite";
export default defineConfig({
  base: "",
  build: {
    rollupOptions: {
      input: ["./index.html", "./contact.html","./produse.html","./servicii.html","./balustrazi.html","./ferestre.html","./produsBalustrada.html","./produsRoleta.html","./produsTermopan.html","./produsUsi.html","./usi.html","./rolete.html"],
    },
  },
});
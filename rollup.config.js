import svelte from 'rollup-plugin-svelte';
import { mdsvex } from "mdsvex";

export default {
  plugins: [
    svelte({
      preprocess: {
        extensions: [".svelte", ".svx"],
        preprocess: mdsvex()
      },
    }),
  ],
};
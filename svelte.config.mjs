import sveltePreprocess from "svelte-preprocess";
import nesting from "postcss-nesting";

export default {
  preprocess: sveltePreprocess({
    sourceMap: true,
    typescript: true,
    postcss: {
      plugins: [nesting],
    },
  }),
};

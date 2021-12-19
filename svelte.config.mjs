import sveltePreprocess from "svelte-preprocess";
import nesting from "postcss-nesting";

export default {
  preprocess: sveltePreprocess({
    postcss: {
      plugins: [nesting],
    },
  }),
};

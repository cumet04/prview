module.exports = {
  stories: ["../src/**/*.stories.@(svelte|mdx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-svelte-csf",
  ],
  core: {
    builder: "storybook-builder-vite",
  },
  async viteFinal(config, { configType }) {
    const original = (await import("../vite.config.mjs")).default;
    config.resolve = original.resolve;

    // refs https://issueexplorer.com/issue/eirslett/storybook-builder-vite/90
    config.server.force = false;
    return config;
  },
  svelteOptions: {
    // MEMO: mjs/cjsの壁を越えられないため、svelte.config.mjsと共通にできず同じ設定をコピペしている
    preprocess: require("svelte-preprocess")({
      sourceMap: true,
      typescript: true,
      postcss: {
        plugins: [require("postcss-nesting")],
      },
    }),
  },
};

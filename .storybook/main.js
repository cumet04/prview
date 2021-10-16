module.exports = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx|svelte)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-svelte-csf",
  ],
  core: {
    builder: "storybook-builder-vite",
  },
  async viteFinal(config, { configType}){
    // refs https://issueexplorer.com/issue/eirslett/storybook-builder-vite/90
    config.server.force = false;
    return config
  },
  svelteOptions: {
    preprocess: import("../svelte.config.mjs").preprocess,
  },
};

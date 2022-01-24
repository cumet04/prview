<script type="ts">
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import Item from "@/components/Item.svelte";
</script>

<Meta
  title="Item"
  component={Item}
  argTypes={{
    status: {
      control: { type: "select" },
      options: ["open", "closed", "merged"],
    },
  }}
/>

<Template let:args>
  <!-- TODO: globalな感じにする -->
  <div class="_color-theme-root-light">
    <Item {...args} />
  </div>
</Template>

<Story
  name="Basic"
  args={{
    pullRequest: {
      number: 26,
      status: "open",
      title: "Add a option to expose daemon's TCP port",
      branch: "cumet04:binding_option",
      iconUrl: "https://github.com/identicons/cumet04.png",
      reviews: [
        {
          status: "pending",
          username: "sveltejs",
          iconUrl: "https://github.com/identicons/sveltejs.png",
        },
        {
          status: "approve",
          username: "vitejs",
          iconUrl: "https://github.com/identicons/vitejs.png",
        },
        {
          status: "comment",
          username: "cumet04",
          iconUrl: "https://github.com/identicons/storybookjs.png",
        },
        {
          status: "request-change",
          username: "cumet04",
          iconUrl: "https://github.com/identicons/cumet04.png",
        },
      ],
    },
  }}
/>

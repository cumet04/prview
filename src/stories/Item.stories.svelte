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
  <Item {...args} />
</Template>

<Story
  name="Basic"
  args={{
    number: 26,
    status: "open",
    title: "Add a option to expose daemon's TCP port",
    branch: "cumet04:binding_option",
    iconUrl: "https://github.com/identicons/cumet04.png",
  }}
/>

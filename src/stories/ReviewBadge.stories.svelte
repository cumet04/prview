<script type="ts">
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import ReviewBadge from "@/components/ReviewBadge.svelte";
</script>

<Meta title="ReviewBadge" component={ReviewBadge} />

<Template let:args>
  <!-- TODO: globalな感じにする
        よくわからないけどsvelteのglobalなdecoratorが動かない -->
  <div class="_color-theme-root-light">
    <ReviewBadge {...args} />
  </div>
</Template>

<Story
  name="Pending"
  args={{
    review: {
      status: "pending",
      username: "cumet04",
      iconUrl: "https://github.com/identicons/cumet04.png",
    },
  }}
/>

<Story
  name="Approve"
  args={{
    review: {
      status: "approve",
      username: "cumet04",
      iconUrl: "https://github.com/identicons/cumet04.png",
    },
  }}
/>

<Story
  name="Comment"
  args={{
    review: {
      status: "comment",
      username: "cumet04",
      iconUrl: "https://github.com/identicons/cumet04.png",
    },
  }}
/>

<Story
  name="Request change"
  args={{
    review: {
      status: "request-change",
      username: "cumet04",
      iconUrl: "https://github.com/identicons/cumet04.png",
    },
  }}
/>

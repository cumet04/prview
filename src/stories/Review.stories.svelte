<script type="ts">
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import Review from "@/components/Review.svelte";
</script>

<Meta title="Review" component={Review} />

<Template let:args>
  <!-- TODO: globalな感じにする
        よくわからないけどsvelteのglobalなdecoratorが動かない -->
  <div class="_color-theme-root-light">
    <Review {...args} />
  </div>
</Template>

<Story
  name="Pending"
  args={{
    status: "pending",
    iconUrl: "https://github.com/identicons/cumet04.png",
  }}
/>

<Story
  name="Approve"
  args={{
    status: "approve",
    iconUrl: "https://github.com/identicons/cumet04.png",
  }}
/>

<Story
  name="Comment"
  args={{
    status: "comment",
    iconUrl: "https://github.com/identicons/cumet04.png",
  }}
/>

<Story
  name="Request change"
  args={{
    status: "request-change",
    iconUrl: "https://github.com/identicons/cumet04.png",
  }}
/>

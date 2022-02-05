<script type="ts">
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import RepositoryView from "@/components/RepositoryView.svelte";

  const repository: Repository = {
    org: "cumet04",
    name: "prview",
    pullRequests: [
      {
        number: 26,
        status: "open",
        title: "Add a option to expose daemon's TCP port",
        branch: "cumet04:binding_option",
        iconUrl: "https://github.com/identicons/cumet04.png",
      },
      {
        number: 44,
        status: "open",
        title: "refactor and clean entrypoint codes",
        branch: "refactor_entrypoint",
        iconUrl: "https://github.com/identicons/cumet04.png",
      },
    ],
  };
</script>

<Meta title="RepositoryView" component={RepositoryView} />

<Template let:args>
  <!-- TODO: globalな感じにする -->
  <div class="_color-theme-root-light">
    <RepositoryView {...args} />
  </div>
</Template>

<Story name="Basic" args={{ repository }} />

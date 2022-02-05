<script lang="ts">
  import Item from "@/components/Item.svelte";

  export let repository: Repository;
  const { org, name, pullRequests } = repository;

  const title = `${org}/${name}`;
</script>

<div />

<style lang="postcss">
</style>

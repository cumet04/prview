<script lang="ts">
  export let number: number;
  export let title: string;
  export let branch: string;
  export let iconUrl: string;
  export let status: "open" | "closed" | "merged";
</script>

<div>
  <p>{status}</p>
  <img src={iconUrl} alt="" />
  <p>{number}</p>
  <p>{title}</p>
  <p>{branch}</p>
</div>

<style>
</style>

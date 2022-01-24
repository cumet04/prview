<script lang="ts">
  import ReviewBadge from "@/components/ReviewBadge.svelte";

  export let pullRequest: PullRequest;
  const { number, title, branch, iconUrl, status, reviews } = pullRequest;
</script>

<div class={`item ${status}`}>
  <div class="thumbnail">
    <img src={iconUrl} alt="" />
  </div>

  <div class="content">
    <div class="info">
      <div class="title">
        <div class="number">#{number}</div>
        <div class="name">{title}</div>
      </div>
      <div class="branch">
        <div class="name">{branch}</div>
        <button class="copy">(todo)</button>
      </div>
    </div>

    <div class="sub">
      <ul class="reviews">
        {#each reviews || [] as review}
          <li class="review">
            <ReviewBadge {review} />
          </li>
        {/each}
      </ul>
    </div>
  </div>
</div>

<style lang="postcss">
  .item {
    display: flex;
    width: 100%;
    height: 64px;
    border-left: solid 4px;

    &.open {
      border-left-color: var(--color-success-fg);
    }
    &.closed {
      border-left-color: var(-color-danger-fg);
    }
    &.merged {
      border-left-color: var(--color-done-fg);
    }
  }

  .thumbnail {
    padding: 10px 8px 12px;
    height: 100%;

    & > img {
      height: 42px;
    }
  }

  .content {
    flex-grow: 1;
    display: flex;
    border-bottom: solid 1px #e5e5e5;
  }

  .info {
    flex-grow: 1;
    height: 100%;
    padding-top: 10px;

    & > .title > * {
      display: inline;
      font-size: 18px;
      line-height: 1;
    }
    & > .title > .number {
      color: #888282;
    }

    & > .branch {
      line-height: 1;
      margin-top: 2px;
      & > .name {
        display: inline;
        color: #888282;
        font-size: 14px;
      }
    }
  }

  .reviews {
    display: flex;

    & .review {
      padding-top: 10px;
      list-style: none;
      margin-left: 4px;
    }
  }
</style>

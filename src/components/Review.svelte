<script lang="ts">
  export let iconUrl: string;
  export let username: string;
  export let status: "approve" | "comment" | "request-change" | "pending";

  const iconClass = {
    approve: "check",
    comment: "comment-outline",
    "request-change": "close",
    pending: "dots-horizontal",
  }[status];
</script>

<div class="root">
  <img src={iconUrl} alt={username} class="icon" />
  <div class="status {status}">
    <i class="mdi mdi-{iconClass}" />
  </div>
</div>

<style lang="postcss">
  .root {
    display: inline-block;
    position: relative;
    padding-top: 14px;
    padding-right: 14px;
  }

  .icon {
    width: 24px;
    height: 24px;

    position: absolute;
    top: 0;
    right: 0;
  }

  .status {
    & > i {
      font-size: 30px;
      display: block;
      line-height: 1;

      &::before {
        display: block; /* 謎の高さ余白対策 */
      }
    }

    &.pending {
      color: var(--color-attention-emphasis);
    }
    &.approve {
      color: var(--color-success-fg);
    }
    &.comment {
      color: var(--color-fg-muted);
    }
    &.request-change {
      color: var(--color-danger-fg); /* MEMO: ここの色確認できてない */
    }
  }
</style>

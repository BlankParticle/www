<script lang="ts">
  import type { Snippet } from "svelte";
  import Confirm from "../icons/confirm.svelte";
  import Copy from "../icons/copy.svelte";
  const { children, text }: { children: Snippet; text: string } = $props();
  let copied = $state(false);
</script>

<span class="group inline-flex items-center justify-center gap-2">
  {@render children()}
  <button
    class="opacity-0 transition-opacity duration-200 group-hover:opacity-100"
    onclick={() => {
      navigator.clipboard.writeText(text).then(() => {
        copied = true;
        setTimeout(() => {
          copied = false;
        }, 2000);
      });
    }}
  >
    {#if copied}
      <Confirm />
    {:else}
      <Copy />
    {/if}
  </button>
</span>

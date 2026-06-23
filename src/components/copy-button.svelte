<script lang="ts">
  import Confirm from "../icons/confirm.svelte";
  import Copy from "../icons/copy.svelte";
  import { copyText } from "../lib/clipboard";

  interface Props {
    value: string;
    label: string;
  }

  let { value, label }: Props = $props();
  let copied = $state(false);
</script>

<button
  type="button"
  class="ml-auto grid size-9 shrink-0 cursor-pointer place-items-center rounded-md border-2 border-ink bg-violet text-paper shadow-[3px_3px_0_var(--color-ink)] transition-transform duration-150 ease-out hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0_var(--color-ink)] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none"
  aria-label={label}
  aria-live="polite"
  onclick={() => copyText(value, (v) => (copied = v))}
>
  {#if copied}
    <Confirm />
  {:else}
    <Copy />
  {/if}
</button>

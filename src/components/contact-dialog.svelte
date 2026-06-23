<script lang="ts">
  import CopyButton from "./copy-button.svelte";
  import PushButton from "./push-button.svelte";

  interface Props {
    open: boolean;
    title: string;
    description: string;
    value: string;
    copyLabel: string;
    actionHref?: string;
    actionLabel?: string;
  }

  let { open = $bindable(), title, description, value, copyLabel, actionHref, actionLabel }: Props = $props();

  const close = () => (open = false);
</script>

<svelte:window onkeydown={(e) => e.key === "Escape" && close()} />

{#if open}
  <div
    class="fixed inset-0 z-50 flex items-center justify-center bg-ink/40 p-5"
    role="presentation"
    onclick={(e) => e.target === e.currentTarget && close()}
  >
    <div
      class="relative flex w-full max-w-sm flex-col gap-5 rounded-lg border-2 border-ink bg-paper p-6 shadow-[6px_6px_0_var(--color-ink)]"
      role="dialog"
      aria-modal="true"
      aria-label={title}
      tabindex="-1"
    >
      <button
        type="button"
        class="absolute -top-2.5 -right-2.5 grid size-8 cursor-pointer place-items-center rounded-full border-2 border-ink bg-paper text-sm font-bold text-ink transition-colors duration-150 hover:bg-orange-deep hover:text-paper"
        aria-label="Close"
        onclick={close}
      >
        ✕
      </button>
      <h2 class="font-display text-2xl font-extrabold tracking-tight text-violet">{title}</h2>
      <p class="text-sm text-ink-muted">{description}</p>
      <div class="flex items-center gap-3 rounded-md border-2 border-dashed border-violet/50 bg-lime/20 px-4 py-3">
        <span class="min-w-0 truncate font-bold text-ink">{value}</span>
        <CopyButton {value} label={copyLabel} />
      </div>
      {#if actionHref && actionLabel}
        <PushButton href={actionHref} target="_blank" rel="noopener noreferrer" class="text-center">
          {actionLabel}
        </PushButton>
      {/if}
    </div>
  </div>
{/if}

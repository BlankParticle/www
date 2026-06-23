<script lang="ts">
  interface Props {
    name: string;
    tilt: string;
    ink: string;
    href?: string;
    onclick?: () => void;
  }

  let { name, tilt, ink, href, onclick }: Props = $props();

  const className = $derived(
    `cursor-pointer rounded-full border-2 bg-paper px-4 py-1.5 text-sm font-bold shadow-[2px_2px_0_currentColor] transition-transform spring-duration-300 spring-bounce-60 hover:-translate-y-1 hover:scale-110 hover:rotate-0 hover:text-paper active:translate-y-0 active:scale-95 active:shadow-none ${tilt} ${ink}`,
  );
</script>

{#if href}
  <a class={className} {href} target="_blank" rel="noopener noreferrer">{name}</a>
{:else}
  <button type="button" class={className} {onclick}>{name}</button>
{/if}

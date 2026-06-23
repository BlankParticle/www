<script lang="ts">
  import type { Snippet } from "svelte";
  import type { HTMLAttributes } from "svelte/elements";

  type Variant = "violet" | "orange" | "violet-outline";

  interface Props extends HTMLAttributes<HTMLElement> {
    children: Snippet;
    variant?: Variant;
    href?: string;
    target?: string;
    rel?: string;
  }

  let { children, variant = "violet", href, class: extra = "", ...rest }: Props = $props();

  const base =
    "rounded-md border-2 px-5 py-2.5 font-bold transition-transform duration-150 ease-out hover:translate-x-[2px] hover:translate-y-[2px] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none";

  const variants: Record<Variant, string> = {
    violet:
      "border-ink bg-violet text-paper shadow-[4px_4px_0_var(--color-ink)] hover:shadow-[2px_2px_0_var(--color-ink)]",
    orange:
      "border-orange-deep bg-paper text-orange-deep shadow-[4px_4px_0_var(--color-orange)] hover:shadow-[2px_2px_0_var(--color-orange)]",
    "violet-outline":
      "border-violet bg-paper text-violet shadow-[4px_4px_0_var(--color-violet)] hover:shadow-[2px_2px_0_var(--color-violet)]",
  };

  const className = $derived(`${base} ${variants[variant]} ${extra}`);
</script>

{#if href}
  <a {href} class={className} {...rest}>{@render children()}</a>
{:else}
  <button type="button" class={`cursor-pointer ${className}`} {...rest}>{@render children()}</button>
{/if}

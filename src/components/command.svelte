<script lang="ts">
  import type { Snippet } from "svelte";

  const { children }: { children: Snippet } = $props();
</script>

<div class="py-1 text-lime-200 text-glow-lime-500 before:content-['$_']">
  {@render children()}
</div>

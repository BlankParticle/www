<script lang="ts">
  import type { Snippet } from "svelte";

  const { children }: { children: Snippet } = $props();
</script>

<div class="text-glow-lime-500 py-1 text-lime-200 before:content-['$_']">
  {@render children()}
</div>

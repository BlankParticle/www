<script lang="ts">
  import type { Snippet } from "svelte";
  const { children }: { children: Snippet } = $props();
</script>

<div class="py-1 text-fuchsia-100">
  {@render children()}
</div>

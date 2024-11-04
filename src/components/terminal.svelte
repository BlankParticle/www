<script lang="ts">
  import type { Snippet } from "svelte";

  const { children }: { children: Snippet } = $props();
</script>

<div class="flex flex-col rounded-xl border border-fuchsia-50/30 bg-gradient-to-tl from-slate-900 to-slate-950">
  <div class="flex w-full items-center justify-between">
    <div class="flex items-center gap-2 p-2">
      <div
        class="size-3 cursor-pointer rounded-full bg-red-500 opacity-70 transition-opacity duration-100 ease-in-out hover:opacity-100"
      ></div>
      <div
        class="size-3 cursor-pointer rounded-full bg-yellow-500 opacity-70 transition-opacity duration-100 ease-in-out hover:opacity-100"
      ></div>
      <div
        class="size-3 cursor-pointer rounded-full bg-green-500 opacity-70 transition-opacity duration-100 ease-in-out hover:opacity-100"
      ></div>
    </div>
  </div>
  <div class="px-3 py-2">
    {@render children()}
  </div>
</div>

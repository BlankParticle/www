<script>
  import BlinkingCursor from "./blinking-cursor.svelte";
</script>

<header class="flex w-full">
  <nav class="py-4 md:py-6">
    <div class="smooth text-lg font-bold text-fuchsia-400/90 hover:text-fuchsia-500">
      <span
        class="smooth underline decoration-fuchsia-300/50 decoration-dotted underline-offset-2 hover:decoration-fuchsia-500"
      >
        web@blankparticle.in
      </span>
      ~ <BlinkingCursor />
    </div>
  </nav>
</header>

<script lang="ts">
  const {
    parts = ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"],
    interval = 100,
  }: {
    parts?: string[];
    interval?: number;
  } = $props();

  let currentPart = $state(0);

  $effect(() => {
    const spin = setInterval(() => {
      currentPart = (currentPart + 1) % parts.length;
    }, interval);
    return () => clearInterval(spin);
  });
</script>

<span>{parts[currentPart]}</span>

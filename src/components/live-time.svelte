<script lang="ts">
  import Moon from "../icons/moon.svelte";
  import Sun from "../icons/sun.svelte";

  let date = $state(new Date());
  let formattedTime = $derived.by(() =>
    Intl.DateTimeFormat("en-IN", { timeZone: "Asia/Kolkata", timeStyle: "medium", hourCycle: "h23" }).format(date),
  );

  let isDay = $derived.by(() => {
    const hour = Number(formattedTime.split(":")[0]);
    if (hour >= 6 && hour < 18) return true;
    return false;
  });

  $effect(() => {
    const interval = setInterval(() => {
      date = new Date();
    }, 1000);
    return () => clearInterval(interval);
  });
</script>

<span class="inline-flex items-center justify-center gap-1 text-fuchsia-100">
  {#if isDay}
    <Sun />
  {:else}
    <Moon />
  {/if}
  {formattedTime}
</span>

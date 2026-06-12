<script lang="ts">
  let date = $state(new Date());
  let formattedTime = $derived(
    Intl.DateTimeFormat("en-IN", { timeZone: "Asia/Kolkata", timeStyle: "medium", hourCycle: "h23" }).format(date),
  );

  $effect(() => {
    const interval = setInterval(() => {
      date = new Date();
    }, 1000);
    return () => clearInterval(interval);
  });
</script>

<span class="tabular-nums">{formattedTime}</span>

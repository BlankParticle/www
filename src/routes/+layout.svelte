<script lang="ts">
  import "../app.css";
  let { children } = $props();
</script>

{@render children()}

<svelte:head>
  <title>blankparticle</title>
  <meta name="description" content="Hello, I am Rahul Mishra, aka BlankParticle" />
  <meta property="og:title" content="blankparticle" />
  <meta property="og:site_name" content="blankparticle" />
  <meta property="og:url" content="https://blankparticle.in" />
  <meta property="og:description" content="Hello, I am Rahul Mishra, aka BlankParticle" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="/og-image.webp" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta property="twitter:domain" content="blankparticle.in" />
  <meta property="twitter:url" content="https://blankparticle.in" />
  <meta name="twitter:title" content="blankparticle" />
  <meta name="twitter:description" content="Hello, I am Rahul Mishra, aka BlankParticle" />
  <meta name="twitter:image" content="/og-image.webp" />
</svelte:head>

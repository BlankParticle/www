<script>
  import Confirm from "../icons/confirm.svelte";
  import LiveTime from "../components/live-time.svelte";
  import { socials } from "../lib/socials";
  const DOMAIN = "blankparticle.com";
  let copied = $state(false);
  const { data } = $props();
  const age = new Date().getFullYear() - 2005;

  const copyEmail = async () => {
    const email = `hello@${DOMAIN}`;
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(email);
      } else {
        const input = document.createElement("textarea");
        input.value = email;
        input.setAttribute("readonly", "true");
        input.style.position = "absolute";
        input.style.left = "-9999px";
        document.body.appendChild(input);
        input.select();
        document.execCommand("copy");
        document.body.removeChild(input);
      }
      copied = true;
      setTimeout(() => {
        copied = false;
      }, 2000);
    } catch (error) {
      copied = false;
    }
  };
</script>

<main class="mx-auto max-w-5xl px-4 py-10 sm:py-16">
  <div class="notebook-sheet px-6 py-10 sm:px-12 sm:py-14">
    <div class="relative z-10 flex flex-col gap-12 pl-16 sm:pl-20">
      <header class="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div class="flex flex-col gap-4">
          <span class="ink-label text-sm">blankparticle.com</span>
          <div class="flex flex-col gap-2">
            <span class="text-lg font-semibold text-[color:var(--ink-muted)]">Hello,</span>
            <h1 class="text-4xl font-[var(--font-display)] sm:text-5xl">I'm Rahul Mishra</h1>
            <p class="text-sm text-[color:var(--ink-muted)] italic">
              also known as <a href="/gh" class="ink-link">@blankparticle</a> online
            </p>
          </div>
          <p class="summary-pill text-sm text-[color:var(--ink)] sm:text-base">
            {age} yo | Software Developer at
            <a href="https://iterate.com" class="ink-link" target="_blank" rel="noopener noreferrer"> Iterate </a>
          </p>
          <div class="flex flex-wrap items-center gap-3 pt-2">
            <button
              type="button"
              class="cta-primary smooth hover:scale-[1.02] hover:bg-[color:var(--accent-strong)]"
              aria-live="polite"
              aria-atomic="true"
              on:click={copyEmail}
            >
              {#if copied}
                <Confirm />
              {:else}
                email me
              {/if}
            </button>
            <a
              href="/cal"
              class="cta-secondary smooth hover:border-[color:var(--accent)] hover:text-[color:var(--accent-strong)]"
            >
              Book a call
            </a>
          </div>
          <p class="text-sm font-semibold text-[color:var(--ink)]">
            Local time: <span class="text-[color:var(--ink)]"><LiveTime /></span> (IST)
          </p>
        </div>
        <div class="flex flex-col items-start gap-4 md:items-end">
          <figure class="polaroid -rotate-2">
            <span class="tape tape-left" aria-hidden="true"></span>
            <span class="tape tape-right" aria-hidden="true"></span>
            <img
              src="/me.png"
              alt="Current pfp of BlankParticle"
              class="size-36 rounded-xl object-cover select-none sm:size-44"
            />
            <figcaption class="mt-3 text-right text-xs font-semibold text-[color:var(--ink-muted)]">
              Rahul Mishra
            </figcaption>
          </figure>
        </div>
      </header>

      <section class="flex flex-col gap-6">
        <div class="flex flex-wrap items-baseline justify-between gap-4">
          <h2 class="text-2xl font-[var(--font-display)] sm:text-3xl">Some projects</h2>
          <span class="ink-label text-xs uppercase">things I built</span>
        </div>
        <div class="grid gap-4 md:grid-cols-2">
          {#each data.projects as project}
            <a
              class="note-card flex flex-col gap-2 p-4 smooth hover:-translate-y-1 hover:shadow-[0_18px_30px_rgba(42,42,42,0.16)]"
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span class="text-lg font-semibold text-[color:var(--ink)]">{project.title}</span>
              <span class="text-sm text-[color:var(--ink-muted)]">{project.description}</span>
              <span class="mt-2 text-xs font-semibold text-[color:var(--accent-strong)]"> Open project → </span>
            </a>
          {/each}
        </div>
      </section>

      <section class="flex flex-col gap-5">
        <div class="flex flex-wrap items-baseline justify-between gap-4">
          <h2 class="text-2xl font-[var(--font-display)] sm:text-3xl">Find me around</h2>
          <span class="ink-label text-xs uppercase">social links</span>
        </div>
        <div class="flex flex-wrap gap-3">
          {#each Object.entries(socials) as [link, name]}
            <a
              class="note-card px-4 py-2 text-sm font-semibold text-[color:var(--ink)] smooth hover:-translate-y-0.5 hover:border-[color:var(--accent)]"
              href={`/${link}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {name}
            </a>
          {/each}
        </div>
      </section>

      <footer
        class="flex flex-wrap items-center justify-between gap-3 border-t border-[color:var(--line)] pt-6 text-xs text-[color:var(--ink-muted)]"
      >
        <a href="/gh/www" class="ink-link" target="_blank" rel="noopener noreferrer"> Made with 💚 by BlankParticle </a>
        <a href="https://svelte.dev" class="ink-link" target="_blank" rel="noopener noreferrer">
          🍀 Powered by SvelteKit
        </a>
      </footer>
    </div>
  </div>
</main>

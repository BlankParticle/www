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
  <div
    class="relative overflow-hidden rounded-[32px] border border-[rgba(42,42,42,0.1)] bg-(--paper) [background-image:repeating-linear-gradient(to_bottom,transparent_0,transparent_26px,var(--line)_27px,var(--line)_28px)] px-6 py-10 shadow-(--shadow) before:pointer-events-none before:absolute before:inset-y-0 before:left-0 before:w-[72px] before:rounded-l-[32px] before:border-r before:border-r-[rgba(42,42,42,0.12)] before:bg-[rgba(125,154,124,0.08)] sm:px-12 sm:py-14"
  >
    <div class="relative z-10 flex flex-col gap-12 pl-16 sm:pl-20">
      <header class="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div class="flex flex-col gap-4">
          <span class="font-[family-name:var(--font-note)] text-sm tracking-[0.04em] text-(--ink-muted)"
            >blankparticle.com</span
          >
          <div class="flex flex-col gap-2">
            <span class="text-lg font-semibold text-(--ink-muted)">Hello,</span>
            <h1 class="font-[family-name:var(--font-display)] text-4xl sm:text-5xl">I'm Rahul Mishra</h1>
            <p class="text-sm text-(--ink-muted) italic">
              also known as
              <a
                href="/gh"
                class="text-(--accent-strong) underline decoration-dashed [text-decoration-thickness:1.5px] underline-offset-4"
                >@blankparticle</a
              >
              online
            </p>
          </div>
          <p
            class="inline-flex items-center gap-2 rounded-full bg-[color-mix(in_srgb,var(--peach)_85%,#fff)] px-[14px] py-[6px] text-sm font-semibold text-(--ink) sm:text-base"
          >
            {age} yo | Software Developer at
            <a
              href="https://iterate.com"
              class="text-(--accent-strong) underline decoration-dashed [text-decoration-thickness:1.5px] underline-offset-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              Iterate
            </a>
          </p>
          <div class="flex flex-wrap items-center gap-3 pt-2">
            <button
              type="button"
              class="rounded-full bg-(--accent) px-[18px] py-[10px] font-bold text-[#f9f6f0] transition-all duration-500 ease-in-out hover:scale-[1.02] hover:bg-(--accent-strong)"
              aria-live="polite"
              aria-atomic="true"
              onclick={copyEmail}
            >
              {#if copied}
                <Confirm />
              {:else}
                email me
              {/if}
            </button>
            <a
              href="/cal"
              class="rounded-full border border-[rgba(42,42,42,0.18)] bg-[rgba(255,255,255,0.6)] px-[18px] py-[10px] font-semibold text-(--ink) transition-all duration-500 ease-in-out hover:border-(--accent) hover:text-(--accent-strong)"
            >
              Book a call
            </a>
          </div>
          <p class="text-sm font-semibold text-(--ink)">
            Local time: <span class="text-(--ink)"><LiveTime /></span> (IST)
          </p>
        </div>
        <div class="flex flex-col items-start gap-4 md:items-end">
          <figure
            class="relative -rotate-2 rounded-[18px] border border-[rgba(42,42,42,0.12)] bg-white px-[14px] pt-[14px] pb-5 shadow-[0_18px_40px_rgba(42,42,42,0.18)]"
          >
            <span
              class="absolute top-[-8px] left-3 h-4 w-[46px] rotate-[-4deg] rounded-[6px] border border-[rgba(42,42,42,0.08)] bg-[rgba(230,211,177,0.55)] shadow-[0_6px_12px_rgba(42,42,42,0.15)]"
              aria-hidden="true"
            ></span>
            <span
              class="absolute top-[-8px] right-[10px] h-4 w-[46px] rotate-[4deg] rounded-[6px] border border-[rgba(42,42,42,0.08)] bg-[rgba(230,211,177,0.55)] shadow-[0_6px_12px_rgba(42,42,42,0.15)]"
              aria-hidden="true"
            ></span>
            <img
              src="/me.png"
              alt="Current pfp of BlankParticle"
              class="size-36 rounded-xl object-cover select-none sm:size-44"
            />
            <figcaption class="mt-3 text-right text-xs font-semibold text-(--ink-muted)">Rahul Mishra</figcaption>
          </figure>
        </div>
      </header>

      <section class="flex flex-col gap-6">
        <div class="flex flex-wrap items-baseline justify-between gap-4">
          <h2 class="font-[family-name:var(--font-display)] text-2xl sm:text-3xl">Some projects</h2>
          <span class="font-[family-name:var(--font-note)] text-xs tracking-[0.04em] text-(--ink-muted) uppercase"
            >things I built</span
          >
        </div>
        <div class="grid gap-4 md:grid-cols-2">
          {#each data.projects as project}
            <a
              class="flex flex-col gap-2 rounded-[20px] border border-[rgba(42,42,42,0.1)] bg-[rgba(255,255,255,0.7)] p-4 shadow-[0_12px_24px_rgba(42,42,42,0.12)] transition-all duration-500 ease-in-out hover:-translate-y-1 hover:shadow-[0_18px_30px_rgba(42,42,42,0.16)]"
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span class="text-lg font-semibold text-(--ink)">{project.title}</span>
              <span class="text-sm text-(--ink-muted)">{project.description}</span>
              <span class="mt-2 text-xs font-semibold text-(--accent-strong)"> Open project → </span>
            </a>
          {/each}
        </div>
      </section>

      <section class="flex flex-col gap-5">
        <div class="flex flex-wrap items-baseline justify-between gap-4">
          <h2 class="font-[family-name:var(--font-display)] text-2xl sm:text-3xl">Find me around</h2>
          <span class="font-[family-name:var(--font-note)] text-xs tracking-[0.04em] text-(--ink-muted) uppercase"
            >social links</span
          >
        </div>
        <div class="flex flex-wrap gap-3">
          {#each Object.entries(socials) as [link, name]}
            <a
              class="rounded-[20px] border border-[rgba(42,42,42,0.1)] bg-[rgba(255,255,255,0.7)] px-4 py-2 text-sm font-semibold text-(--ink) shadow-[0_12px_24px_rgba(42,42,42,0.12)] transition-all duration-500 ease-in-out hover:-translate-y-0.5 hover:border-(--accent)"
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
        class="flex flex-wrap items-center justify-between gap-3 border-t border-(--line) pt-6 text-xs text-(--ink-muted)"
      >
        <a
          href="/gh/www"
          class="text-(--accent-strong) underline decoration-dashed [text-decoration-thickness:1.5px] underline-offset-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made with 💚 by BlankParticle
        </a>
        <a
          href="https://svelte.dev"
          class="text-(--accent-strong) underline decoration-dashed [text-decoration-thickness:1.5px] underline-offset-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          🍀 Powered by SvelteKit
        </a>
      </footer>
    </div>
  </div>
</main>

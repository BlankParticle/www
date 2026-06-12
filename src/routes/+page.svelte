<script>
  import Confirm from "../icons/confirm.svelte";
  import LiveTime from "../components/live-time.svelte";
  import { socials } from "../lib/socials";
  const DOMAIN = "blankparticle.com";
  let copied = $state(false);
  const { data } = $props();
  const age = new Date().getFullYear() - 2005;

  const tickerWords = ["curious", "tinkerer", "builds for fun", "open source", "probably debugging", "say hi"];
  const stickerTilts = [
    "-rotate-2",
    "rotate-1",
    "rotate-2",
    "-rotate-1",
    "rotate-3",
    "-rotate-3",
    "rotate-1",
    "-rotate-2",
  ];
  const stickerInks = [
    "border-violet text-violet hover:bg-violet hover:shadow-[4px_4px_0_var(--color-orange)]",
    "border-orange-deep text-orange-deep hover:bg-orange-deep hover:shadow-[4px_4px_0_var(--color-violet)]",
    "border-ink text-ink hover:bg-ink hover:shadow-[4px_4px_0_var(--color-orange)]",
  ];

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

<main class="mx-auto max-w-4xl px-5 pb-16 sm:px-8">
  <header
    class="flex animate-reveal flex-wrap items-center justify-between gap-2 border-b-2 border-dashed border-violet/35 py-4 text-xs font-bold tracking-[0.18em] text-violet uppercase motion-reduce:animate-none"
  >
    <span>{DOMAIN}</span>
    <span class="hidden text-orange-deep sm:inline">est. 2005 · 100% handmade</span>
    <span>my time: <LiveTime /> ist</span>
  </header>

  <section class="flex flex-col gap-10 py-12 sm:py-16 md:flex-row md:items-center md:justify-between">
    <div class="flex max-w-xl flex-col gap-5">
      <p
        class="animate-reveal text-lg font-bold tracking-wide text-ink-muted [animation-delay:90ms] motion-reduce:animate-none"
      >
        Hello, I'm
      </p>
      <h1
        class="animate-reveal font-display text-[clamp(3.5rem,9vw,6.5rem)] leading-[0.95] font-extrabold tracking-tight text-violet [animation-delay:180ms] motion-reduce:animate-none"
      >
        Rahul Mishra
      </h1>
      <p class="animate-reveal text-base text-ink-muted [animation-delay:270ms] motion-reduce:animate-none">
        also known as
        <a
          href="/gh"
          class="relative mx-1 inline-block font-bold text-ink before:absolute before:inset-x-[-3px] before:inset-y-[1px] before:-z-10 before:-rotate-1 before:bg-lime hover:before:rotate-1"
          >@blankparticle</a
        >
        online. {age} years old, software developer at
        <a
          href="https://iterate.com"
          class="font-bold text-orange-deep underline decoration-orange decoration-wavy decoration-2 underline-offset-4"
          target="_blank"
          rel="noopener noreferrer">Iterate</a
        >, and forever taking software apart to see how it works.
      </p>
      <div
        class="flex animate-reveal flex-wrap items-center gap-4 pt-2 [animation-delay:360ms] motion-reduce:animate-none"
      >
        <button
          type="button"
          class="rounded-md border-2 border-ink bg-violet px-5 py-2.5 font-bold text-paper shadow-[4px_4px_0_var(--color-ink)] transition-transform duration-150 ease-out hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_var(--color-ink)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none"
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
          class="rounded-md border-2 border-orange-deep bg-paper px-5 py-2.5 font-bold text-orange-deep shadow-[4px_4px_0_var(--color-orange)] transition-transform duration-150 ease-out hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_var(--color-orange)]"
        >
          book a call
        </a>
      </div>
    </div>

    <figure
      class="order-first shrink-0 animate-reveal relative self-center [animation-delay:270ms] motion-reduce:animate-none md:order-none md:self-auto"
    >
      <span
        class="absolute -top-6 -right-6 size-28 rounded-full bg-[radial-gradient(currentColor_1px,transparent_1.5px)] bg-size-[9px_9px] text-orange"
        aria-hidden="true"
      ></span>
      <span
        class="absolute -bottom-5 -left-7 size-20 rounded-full bg-[radial-gradient(currentColor_1px,transparent_1.5px)] bg-size-[9px_9px] text-violet"
        aria-hidden="true"
      ></span>
      <img
        src="/me.png"
        alt="Rahul, cut out and stuck on the page like a sticker"
        class="relative size-40 rotate-2 rounded-2xl border-4 border-paper object-cover shadow-[0_0_0_2px_var(--color-ink)] transition-transform duration-300 ease-out select-none hover:rotate-0 sm:size-48"
      />
      <figcaption
        class="absolute -bottom-3 left-1/2 w-max -translate-x-1/2 -rotate-2 border-2 border-ink bg-lime px-2 py-0.5 text-xs font-bold tracking-widest uppercase"
      >
        that's me
      </figcaption>
    </figure>
  </section>

  <div
    class="mx-[calc(50%-50vw)] animate-reveal overflow-hidden border-y-2 border-ink bg-violet py-2 [animation-delay:450ms] motion-reduce:animate-none"
    aria-hidden="true"
  >
    <div class="flex w-max animate-marquee motion-reduce:animate-none">
      {#each [0, 1, 2, 3, 4, 5] as half (half)}
        <span
          class="flex shrink-0 items-center text-sm font-extrabold tracking-[0.2em] whitespace-nowrap text-paper uppercase"
        >
          {#each tickerWords as word}
            <span class="px-3">{word}</span>
            <span>★</span>
          {/each}
        </span>
      {/each}
    </div>
  </div>

  <section class="flex animate-reveal flex-col gap-2 py-12 [animation-delay:540ms] motion-reduce:animate-none sm:py-16">
    <div class="flex items-baseline justify-between gap-4 pb-4">
      <h2 class="font-display text-3xl font-extrabold tracking-tight text-violet sm:text-4xl">Things I built</h2>
      <span class="text-xs font-bold tracking-[0.18em] text-orange-deep uppercase">hot off the press</span>
    </div>
    <ol class="flex flex-col">
      {#each data.projects as project, i}
        <li class="border-t-2 border-dashed border-violet/35 last:border-b-2">
          <a
            class="group flex items-baseline gap-4 py-5 sm:gap-6"
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span class="font-display text-xl font-bold text-orange-deep tabular-nums" aria-hidden="true">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span class="flex min-w-0 flex-col gap-1">
              <span
                class="font-display text-xl font-bold break-words text-violet-deep underline decoration-transparent decoration-2 underline-offset-4 transition-colors duration-200 group-hover:decoration-orange"
              >
                {project.title}
              </span>
              <span class="text-sm text-ink-muted">{project.description}</span>
            </span>
            <span
              class="ml-auto shrink-0 text-lg font-bold text-orange-deep transition-transform duration-200 ease-out group-hover:translate-x-1"
              aria-hidden="true">→</span
            >
          </a>
        </li>
      {/each}
    </ol>
  </section>

  <section class="flex animate-reveal flex-col gap-6 pb-14 [animation-delay:630ms] motion-reduce:animate-none">
    <div class="flex items-baseline justify-between gap-4">
      <h2 class="font-display text-3xl font-extrabold tracking-tight text-violet sm:text-4xl">Find me around</h2>
      <span class="text-xs font-bold tracking-[0.18em] text-orange-deep uppercase">socials sheet</span>
    </div>
    <div class="flex flex-wrap gap-x-3 gap-y-4">
      {#each Object.entries(socials) as [link, name], i}
        <a
          class={`rounded-full border-2 bg-paper px-4 py-1.5 text-sm font-bold shadow-[2px_2px_0_currentColor] transition-transform spring-duration-300 spring-bounce-60 hover:-translate-y-1 hover:scale-110 hover:rotate-0 hover:text-paper active:translate-y-0 active:scale-95 active:shadow-none ${stickerTilts[i % stickerTilts.length]} ${stickerInks[i % stickerInks.length]}`}
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
    class="flex animate-reveal flex-col items-center gap-4 border-t-2 border-dashed border-violet/35 pt-6 text-center text-xs font-bold [animation-delay:720ms] motion-reduce:animate-none sm:flex-row sm:flex-wrap sm:justify-between sm:text-left"
  >
    <a
      href="/gh/www"
      class="text-violet underline decoration-orange decoration-wavy underline-offset-4"
      target="_blank"
      rel="noopener noreferrer"
    >
      Made with 💜 by BlankParticle
    </a>
    <span
      class="order-last -rotate-2 rounded border-2 border-dashed border-orange-deep px-2 py-1 tracking-[0.18em] text-orange-deep uppercase sm:order-none"
    >
      printed on the internet
    </span>
    <a
      href="https://svelte.dev"
      class="text-violet underline decoration-orange decoration-wavy underline-offset-4"
      target="_blank"
      rel="noopener noreferrer"
    >
      🍀 Powered by SvelteKit
    </a>
  </footer>
</main>

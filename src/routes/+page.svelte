<script>
  import CommandOutput from "../components/command-output.svelte";
  import Command from "../components/command.svelte";
  import CopyButton from "../components/copy-button.svelte";
  import LiveTime from "../components/live-time.svelte";
  import Navbar from "../components/navbar.svelte";
  import Spinner from "../components/spinner.svelte";
  import Terminal from "../components/terminal.svelte";
  import { socials } from "../lib/socials";
  const { data } = $props();
</script>

<main class="mx-auto max-w-screen-md p-2">
  <Navbar />
  <Command>cat about-me.md</Command>

  <div class="flex w-full items-center justify-between gap-1">
    <div class="flex flex-col text-xl">
      <span class="font-semibold">Hello,</span>
      <span>I'm Rahul Mishra</span>
      <span class="text-pretty text-sm font-bold text-fuchsia-100/50"
        >also known as <a href="/gh" class="smooth underline decoration-dotted hover:text-fuchsia-500/90"
          >@blankparticle</a
        > online</span
      >
      <span class="text-pretty pt-1 text-sm font-semibold text-fuchsia-100/50">
        {new Date().getFullYear() - 2005} yo | Student | Software Developer
      </span>
      <span class="text-pretty pt-1 text-sm font-semibold text-fuchsia-100/80">
        email me at
        <CopyButton text="hello@blankparticle.in">
          <span class="cursor-pointer select-all underline decoration-dotted">hello@blankparticle.in</span>
        </CopyButton>
      </span>
    </div>
    <div class="p-1 py-5">
      <img
        src="/me.png"
        alt="Current pfp of BlankParticle"
        class="aspect-square size-20 -rotate-12 select-none drama-fuchsia-600/80 drama-20 spring-bounce-40 spring-duration-500 hover:rotate-0 hover:drama-5 md:size-32 md:drama-28"
      />
    </div>
  </div>

  <div class="py-4">
    <Terminal>
      <Command>ssh blankparticle.in</Command>
      <CommandOutput>Welcome to BlankParticle!</CommandOutput>
      <CommandOutput>
        <span class="flex items-center gap-2">
          <span class="text-fuchsia-500 text-glow-fuchsia-500"><Spinner interval={150} /></span>
          Time: <LiveTime /> (IST)
        </span>
      </CommandOutput>
      <CommandOutput>Hope you had a nice day!</CommandOutput>
      <div class="py-3"></div>
      <Command>ls ~/Projects</Command>
      <CommandOutput>
        <div class="flex flex-col gap-3">
          {#each data.projects as project}
            <a
              class="smooth flex flex-col gap-1 rounded-lg border border-slate-800 p-3 hover:border-fuchsia-500 hover:border-glow-fuchsia-600"
              href={project.url}
              target="_blank"
            >
              <span class="font-bold">{project.title}</span>
              <span class="text-pretty text-sm font-semibold text-fuchsia-400">{project.description}</span>
            </a>
          {/each}
        </div>
      </CommandOutput>
      <div class="py-3"></div>
      <Command>ls ~/Writings</Command>
      <CommandOutput>
        <div class="flex flex-col gap-3">
          {#each data.writings as writing}
            <a
              class="smooth flex flex-col gap-1 rounded-lg border border-slate-800 p-3 hover:border-fuchsia-500 hover:border-glow-fuchsia-600"
              href={writing.url}
              target="_blank"
            >
              <span class="font-bold">{writing.title}</span>
              <span class="text-pretty text-sm font-semibold text-fuchsia-400">{writing.description}</span>
            </a>
          {/each}
        </div>
      </CommandOutput>
      <div class="py-3"></div>
      <Command>cat ~/socials.json</Command>
      <CommandOutput>
        <div class="flex flex-wrap gap-2">
          <span class="smooth rounded-lg border border-slate-800 p-2">
            <span class="text-sm font-bold text-fuchsia-400">[</span>
          </span>
          {#each Object.entries(socials) as [link, name], i}
            <a
              class="smooth rounded-lg border border-slate-800 p-2 hover:border-fuchsia-500 hover:border-glow-fuchsia-600"
              href={`/${link}`}
              target="_blank"
            >
              <span class="text-sm font-bold text-fuchsia-400"
                >"{name}"{i === Object.keys(socials).length - 1 ? "" : ","}</span
              >
            </a>
          {/each}
          <span class="smooth rounded-lg border border-slate-800 p-2">
            <span class="text-sm font-bold text-fuchsia-400">]</span>
          </span>
        </div>
      </CommandOutput>
      <div class="py-3"></div>
      <Command>exit</Command>
    </Terminal>
  </div>

  <div class="py-4">
    <Command>node ./footer.tsx</Command>
    <div class="flex w-full flex-wrap items-center justify-between gap-1 py-4">
      <div class="text-xs font-bold text-fuchsia-100/50">
        <a
          href="/gh/www"
          class="smooth underline decoration-dotted hover:text-fuchsia-500/90 hover:text-glow-fuchsia-700"
          target="_blank"
        >
          Made with 💚 by BlankParticle
        </a>
      </div>
      <div class="text-xs font-bold text-fuchsia-100/50">
        <a
          href="https://svelte.dev"
          class="smooth underline decoration-dotted hover:text-fuchsia-500/90 hover:text-glow-fuchsia-700"
          target="_blank"
        >
          ⚡ Powered by SvelteKit
        </a>
      </div>
    </div>
  </div>
</main>

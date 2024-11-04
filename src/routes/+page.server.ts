import type { ServerLoad } from "@sveltejs/kit";

// TODO: make this dynamic
export const load: ServerLoad = () => {
  const projects = [
    {
      title: "tailwind-plugin-realtime-colors",
      description: "🧩 A Tailwind CSS plugin that allows you to load colors from URL of Realtime Colors",
      url: "https://github.com/BlankParticle/tailwind-plugin-realtime-colors",
    },
    {
      title: "get-palette",
      description: "🎨 A simple JS library to get the dominant color or color palette of an image just by its URL.",
      url: "https://github.com/BlankParticle/get-palette",
    },
    {
      title: "gnome-bluetooth-quick-connect",
      description: "🔌 Allow to connect bluetooth paired devices from gnome control panel.",
      url: "https://github.com/Extensions-Valhalla/gnome-bluetooth-quick-connect",
    },
  ];

  const writings = [
    {
      title: "Creating a tailwind plugin shouldn't be that hard, right?",
      description: "A guide to create a Tailwind CSS plugin",
      url: "https://blog.blankparticle.in/creating-a-tailwind-plugin-shouldnt-be-that-hard",
    },
    {
      title: "Redirecting Your Domains using Cloudflare",
      description: "Redirect your domains using Cloudflare",
      url: "https://blog.blankparticle.in/redirecting-your-domains-using-cloudflare",
    },
  ];

  return { projects, writings };
};

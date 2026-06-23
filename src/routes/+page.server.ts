import type { ServerLoad } from "@sveltejs/kit";

export const load: ServerLoad = () => {
  const projects = [
    {
      title: "gnome-bluetooth-quick-connect",
      description: "🔌 Allow to connect bluetooth paired devices from gnome control panel.",
      url: "/gh/gnome-bluetooth-quick-connect",
    },
    {
      title: "portable",
      description: "🚪 Run local apps behind the portable proxy, auto allocate ports, and expose friendly local hostnames",
      url: "/gh/portable",
    },
    {
      title: "tailwind-plugin-realtime-colors",
      description: "🧩 A Tailwind CSS plugin that allows you to load colors from URL of Realtime Colors",
      url: "/gh/tailwind-plugin-realtime-colors",
    },
    {
      title: "get-palette",
      description: "🎨 A simple JS library to get the dominant color or color palette of an image just by its URL.",
      url: "/gh/get-palette",
    },
    {
      title: "safe-durable-objects",
      description: "🔒 tRPC-style Safe RPC methods for Cloudflare Durable Objects",
      url: "https://github.com/iterate-com/safe-durable-objects",
    },
  ];

  return { projects };
};

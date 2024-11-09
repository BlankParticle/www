import type { RequestHandler } from "./$types";

export const GET: RequestHandler = async () =>
  new Response(await fetch("https://cloud.umami.is/script.js").then((r) => r.text()), {
    headers: {
      "Content-Type": "text/javascript",
    },
  });

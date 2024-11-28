import type { RequestHandler } from "./$types";
import { dev } from "$app/environment";

export const GET: RequestHandler = async () =>
  new Response(
    dev
      ? ""
      : await fetch("https://cloud.umami.is/script.js")
          .then((r) => r.text())
          .catch(() => ""),
    {
      headers: {
        "Content-Type": "text/javascript",
      },
    },
  );

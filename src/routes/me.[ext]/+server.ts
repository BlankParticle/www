import { error } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import { dev } from "$app/environment";

const cacheProxy = (url: string) =>
  fetch(url).then(
    (res) =>
      new Response(res.body, {
        headers: {
          "Content-Type": "image/png",
          "Cache-Control": dev ? "no-cache" : "public, max-age=86400, s-maxage=86400",
        },
      }),
  );

export const GET: RequestHandler = async ({ params }) => {
  switch (params.ext) {
    case "jpg":
    case "png":
    case "icon.png":
      return cacheProxy("https://github.com/BlankParticle.png");
  }
  return error(404, "Not Found");
};

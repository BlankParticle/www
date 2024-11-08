import { error, redirect } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import { redirectMap } from "../../lib/socials";

export const GET: RequestHandler = async ({ params }) => {
  const [site, ...path] = params.catchall.split("/");
  if (redirectMap[site]) return redirect(307, redirectMap[site]);
  // Dynamic redirect if $ is present
  if (redirectMap[site + "$"]) return redirect(307, redirectMap[site + "$"] + "/" + path.join("/"));
  return error(404, "Not Found");
};

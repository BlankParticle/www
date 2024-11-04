import { error, redirect } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";

const redirectMap: Record<string, string> = {
  github$: "https://github.com/BlankParticle",
  twitter: "https://twitter.com/blankparticle",
  linkedin: "https://www.linkedin.com/in/blankparticle",
  spotify: "https://open.spotify.com/user/31krf3flzpa44udfgkc5a5xrqn7y",
  myanimelist: "https://myanimelist.net/profile/BlankParticle",
  discord: "https://discordapp.com/users/1096392763144159252",
};

redirectMap.gh$ = redirectMap.github$;
redirectMap.x = redirectMap.twitter;
redirectMap.mal = redirectMap.myanimelist;

export const GET: RequestHandler = async ({ params }) => {
  const [site, ...path] = params.catchall.split("/");
  if (redirectMap[site]) return redirect(307, redirectMap[site]);
  // Dynamic redirect if $ is present
  if (redirectMap[site + "$"]) return redirect(307, redirectMap[site + "$"] + "/" + path.join("/"));
  return error(404, "Not Found");
};

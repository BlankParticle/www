const redirectMap: Record<string, string> = {
  email: "mailto:hello@blankparticle.in",
  github$: "https://github.com/BlankParticle",
  bsky: "https://bsky.app/profile/blankparticle.in",
  twitter: "https://twitter.com/blankparticle",
  blog$: "https://blog.blankparticle.in",
  linkedin: "https://www.linkedin.com/in/blankparticle",
  spotify: "https://open.spotify.com/user/31krf3flzpa44udfgkc5a5xrqn7y",
  myanimelist: "https://myanimelist.net/profile/BlankParticle",
  hashnode: "https://hashnode.com/@BlankParticle",
  devto: "https://dev.to/blankparticle",
  discord: "https://discordapp.com/users/1096392763144159252",
};

redirectMap.gh$ = redirectMap.github$;
redirectMap.bluesky = redirectMap.bsky;
redirectMap.x = redirectMap.twitter;
redirectMap.mal = redirectMap.myanimelist;

const socials: Record<string, string> = {
  email: "Email",
  gh: "GitHub",
  bsky: "BlueSky",
  blog: "Blog",
  twitter: "Twitter",
  linkedin: "LinkedIn",
  spotify: "Spotify",
  myanimelist: "MyAnimeList",
  hashnode: "Hashnode",
  devto: "Dev.to",
  discord: "Discord",
};

export { redirectMap, socials };

const redirectMap: Record<string, string> = {
  email: "mailto:hello@blankparticle.com",
  github$: "https://github.com/BlankParticle",
  twitter: "https://twitter.com/blankparticle",
  blog$: "https://blog.blankparticle.in",
  linkedin: "https://www.linkedin.com/in/blankparticle",
  spotify: "https://open.spotify.com/user/31krf3flzpa44udfgkc5a5xrqn7y",
  hashnode: "https://hashnode.com/@BlankParticle",
  discord: "https://discordapp.com/users/1096392763144159252",
  cal: "https://cal.com/blankparticle",
};

redirectMap.gh$ = redirectMap.github$;
redirectMap.x = redirectMap.twitter;

const socials: Record<string, string> = {
  email: "Email",
  gh: "GitHub",
  twitter: "Twitter",
  blog: "Blog",
  linkedin: "LinkedIn",
  spotify: "Spotify",
  hashnode: "Hashnode",
  discord: "Discord",
};

export { redirectMap, socials };

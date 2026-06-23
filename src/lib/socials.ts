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
  resume: "https://static.rx2.dev/docs/resume.pdf",
};

redirectMap.gh$ = redirectMap.github$;
redirectMap.x = redirectMap.twitter;

const socials: Record<string, string> = {
  email: "Email",
  twitter: "Twitter",
  discord: "Discord",
  gh: "GitHub",
  blog: "Blog",
  linkedin: "LinkedIn",
};

export { redirectMap, socials };

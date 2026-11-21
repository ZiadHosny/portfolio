export type Project = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  /** "contain" for portrait/mobile screenshots */
  fit?: "cover" | "contain";
  stack: string[];
  live?: string;
  code?: string;
  googlePlay?: string;
};

const repo = (name: string) => `https://github.com/ZiadHosny/${name}`;

export const projects: Project[] = [
  {
    title: "Quran Kareem",
    description:
      "Quran recitations by famous reciters in different narrations, on web, mobile, tablet and Android TV.",
    image: "/images/Quran-Kareem.png",
    imageAlt: "Quran Kareem mobile player playing Surah Al-Fatiha by Mishary Rashid Alafasy",
    fit: "contain",
    stack: ["React", "TypeScript", "Redux", "MUI", "Node.js", "Express", "MongoDB"],
    live: "https://quran-app-z.vercel.app/",
    code: repo("Quran-App"),
    googlePlay:
      "https://play.google.com/store/apps/details?id=app.vercel.quran_app_z",
  },
  {
    title: "Pro Shop",
    description:
      "E-commerce store with cart, reviews, search, PayPal checkout and an admin dashboard.",
    image: "/images/pro-shop.png",
    imageAlt: "Pro Shop screens: product carousel, product page with reviews, admin users list and PayPal order summary",
    stack: ["React", "Redux", "Node.js", "Express", "MongoDB"],
    // Live link hidden until the deployment is fixed (currently returns 500).
    code: repo("Pro-Shop"),
  },
  {
    title: "Advanced Audio Player",
    description:
      "Audio player with shuffle and repeat, looping a selected part N times, and saved favorites.",
    image: "/images/Advanced-Audio-Player.png",
    imageAlt: "Advanced Audio Player with playback, repeat and shuffle controls above a list of surahs",
    stack: ["React", "TypeScript", "Node.js", "Express", "MongoDB"],
    live: "https://advancedaudioplayer.netlify.app/",
  },
  {
    title: "Sara7a",
    description:
      "Anonymous messaging app: share your link and receive honest messages from anyone.",
    image: "/images/Sara7a.png",
    imageAlt: "Sara7a login page",
    stack: ["React", "TypeScript", "Node.js", "Express", "MongoDB"],
    live: "https://sara7a-z.vercel.app/",
    code: repo("Sara7a"),
  },
];

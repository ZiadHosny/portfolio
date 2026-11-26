export type Locale = "en" | "ar";

export const locales: Locale[] = ["en", "ar"];

/** English lives at "/", Arabic at "/ar". */
export const localePath = (l: Locale) => (l === "ar" ? "/ar" : "/");

/** Every UI string that is not part of the data files. */
const en = {
  htmlLang: "en",
  dir: "ltr",
  skip: "Skip to content",
  switchLabel: "العربية",
  switchTitle: "عرض الموقع بالعربية",
  openMenu: "Open menu",
  closeMenu: "Close menu",
  nav: {
    experience: "Experience",
    projects: "Projects",
    content: "Content",
    skills: "Skills",
    certifications: "Certifications",
  } as Record<string, string>,
  hero: {
    location: "Software engineer based in Egypt",
    typed: [
      "Full-Stack Software Engineer",
      "Node.js · NestJS · PostgreSQL",
      "React · Next.js · TypeScript",
      "System Design in Arabic",
    ],
    bio: (
      <>
        <strong className="text-fg">5+ years</strong> building scalable back-ends with Node.js, NestJS and PostgreSQL, and
        fast web apps with React and Next.js. I also teach System Design in Arabic.
      </>
    ),
    resume: "Resume",
    email: "Email",
    scroll: "Scroll",
    stats: ["Years of experience", "Projects on GitHub", "Videos on YouTube"],
    firstName: "Ziad",
    lastName: "Hosny.",
    photoAlt: "Ziad Hosny smiling, wearing a black blazer and white shirt",
  },
  sections: {
    experience: { kicker: "Career", title: "Experience" },
    projects: { kicker: "Work", title: "Projects" },
    content: { kicker: "YouTube", title: "Arabic Content" },
    skills: { kicker: "Toolbox", title: "Skills" },
    certifications: { kicker: "Learning", title: "Certifications" },
  },
  experience: {
    present: "Present",
    education: "Education",
    employment: { "Full-time": "Full-time", "Part-time": "Part-time" } as Record<string, string>,
    workplace: { Remote: "Remote", "On-site": "On-site", Hybrid: "Hybrid" } as Record<string, string>,
    via: "via",
  },
  projects: { live: "Live", code: "Code", googlePlay: "Google Play", stack: "Tech stack" },
  content: {
    intro: "I make Arabic content about System Design, Databases, and Design Patterns.",
    latest: "Latest short",
    shortTitle: "Scalability, Availability & Performance",
    shortBody: (
      <>
        Episode 01 of <span className="font-semibold text-fg">System Design in Arabic</span>: what happens when your app
        goes from 10 users to 1M.
      </>
    ),
    channel: "YouTube Channel",
    videos: "videos and counting",
    subscribe: "Subscribe",
    playlist: "Playlist",
    watch: "Watch",
    playlists: ["System Design in Arabic", "Advanced Database in Arabic", "Design Patterns in Arabic"],
    shortVideoTitle: "01 · Scalability, Availability & Performance | System Design",
  },
  skills: {
    groups: { Frontend: "Frontend", Backend: "Backend", Databases: "Databases", Tools: "Tools", AI: "AI" } as Record<string, string>,
  },
  certifications: { open: "Open certificate" },
  showMore: { all: (n: number) => `Show all (+${n})`, less: "Show less" },
  contact: {
    kicker: "06 / Contact",
    title: (accent: React.ReactNode) => (
      <>
        Let&apos;s build something {accent}
      </>
    ),
    accent: "great.",
    body: "Back-end systems, full-stack products, or a System Design chat — my inbox is open.",
    hello: "Say hello",
    resume: "Resume",
  },
  footer: { social: "Social links", updated: "Last updated", intlLocale: "en-US" },
};

const ar: typeof en = {
  htmlLang: "ar",
  dir: "rtl",
  skip: "انتقل إلى المحتوى",
  switchLabel: "English",
  switchTitle: "View the site in English",
  openMenu: "فتح القائمة",
  closeMenu: "إغلاق القائمة",
  nav: {
    experience: "الخبرة",
    projects: "المشاريع",
    content: "المحتوى",
    skills: "المهارات",
    certifications: "الشهادات",
  },
  hero: {
    location: "مهندس برمجيات · مصر",
    typed: [
      "مهندس برمجيات Full-Stack",
      "Node.js · NestJS · PostgreSQL",
      "React · Next.js · TypeScript",
      "أشرح System Design بالعربي",
    ],
    bio: (
      <>
        <strong className="text-fg">أكثر من 5 سنوات</strong> في بناء أنظمة Back-end تتحمّل النمو باستخدام Node.js وNestJS
        وPostgreSQL، وتطبيقات ويب سريعة بـ React وNext.js. وأشرح System Design بالعربي على يوتيوب.
      </>
    ),
    resume: "السيرة الذاتية",
    email: "راسلني",
    scroll: "اكتشف المزيد",
    stats: ["سنوات خبرة", "مشروع على GitHub", "فيديو على يوتيوب"],
    firstName: "زياد",
    lastName: "حسني.",
    photoAlt: "زياد حسني مبتسمًا ويرتدي بليزر أسود وقميصًا أبيض",
  },
  sections: {
    experience: { kicker: "مسيرتي", title: "الخبرة العملية" },
    projects: { kicker: "أعمالي", title: "المشاريع" },
    content: { kicker: "يوتيوب", title: "المحتوى العربي" },
    skills: { kicker: "أدواتي", title: "المهارات" },
    certifications: { kicker: "تعلّم مستمر", title: "الشهادات" },
  },
  experience: {
    present: "حتى الآن",
    education: "التعليم",
    employment: { "Full-time": "دوام كامل", "Part-time": "دوام جزئي" },
    workplace: { Remote: "عن بُعد", "On-site": "من المكتب", Hybrid: "مكتب وعن بُعد" },
    via: "عبر",
  },
  projects: { live: "جرّبه", code: "الكود", googlePlay: "Google Play", stack: "التقنيات" },
  content: {
    intro: "أشرح بالعربي System Design وقواعد البيانات وDesign Patterns، بأسلوب بسيط وأمثلة من مشاريع حقيقية.",
    latest: "أحدث فيديو قصير",
    shortTitle: "Scalability وAvailability وPerformance",
    shortBody: (
      <>
        الحلقة 01 من سلسلة <span className="font-semibold text-fg">System Design بالعربي</span>: ماذا يحدث عندما يكبر تطبيقك
        من 10 مستخدمين إلى مليون؟
      </>
    ),
    channel: "قناتي على يوتيوب",
    videos: "فيديو حتى الآن",
    subscribe: "اشترك",
    playlist: "سلسلة",
    watch: "شاهد السلسلة",
    playlists: ["System Design بالعربي", "قواعد البيانات المتقدمة", "Design Patterns بالعربي"],
    shortVideoTitle: "01 · Scalability, Availability & Performance | System Design بالعربي",
  },
  skills: {
    groups: {
      Frontend: "واجهات المستخدم",
      Backend: "الخوادم والـ APIs",
      Databases: "قواعد البيانات",
      Tools: "أدوات التطوير",
      AI: "الذكاء الاصطناعي",
    },
  },
  certifications: { open: "عرض الشهادة" },
  showMore: { all: (n: number) => `عرض الكل (+${n})`, less: "عرض أقل" },
  contact: {
    kicker: "06 / تواصل",
    title: (accent: React.ReactNode) => <>عندك فكرة؟ {accent}</>,
    accent: "نحوّلها لمنتج حقيقي.",
    body: "نظام Back-end، منتج Full-Stack، أو نقاش عن System Design — يسعدني أن أسمع منك.",
    hello: "تواصل معي",
    resume: "السيرة الذاتية",
  },
  footer: { social: "حساباتي", updated: "آخر تحديث", intlLocale: "ar-EG-u-nu-latn" },
};

export const dict = { en, ar };
export type Dict = typeof en;
export const getDict = (l: Locale): Dict => dict[l];

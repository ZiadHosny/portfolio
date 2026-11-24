import { FiMail } from "react-icons/fi";
import { Logo } from "../Logo";
import { socialIcons } from "../SocialIcon";
import { site, socials } from "@/lib/site";
import { getDict, type Locale } from "@/lib/i18n";

// Evaluated at build time (static page), e.g. "Nov 2026"
const lastUpdated = (locale: Locale) =>
  new Intl.DateTimeFormat(getDict(locale).footer.intlLocale, {
    month: "short",
    year: "numeric",
    timeZone: "Africa/Cairo",
  }).format(new Date());

export const Footer = ({ locale }: { locale: Locale }) => {
  const t = getDict(locale).footer;
  return (
  <footer className="mt-8 border-t border-surface/60 bg-bg-deep/70">
    <div className="container-page flex flex-col items-center gap-6 py-10 text-center">
      <div className="flex items-center gap-2.5 font-semibold">
        <Logo size={28} title="" />
        {site.name}
      </div>

      <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 text-sm text-muted transition hover:text-purple">
        <FiMail aria-hidden="true" /> {site.email}
      </a>

      <ul className="flex max-w-xl flex-wrap justify-center gap-2" aria-label={t.social}>
        {socials.map(({ key, label, href }) => {
          const Icon = socialIcons[key];
          return (
            <li key={key}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-surface/80 text-muted transition hover:-translate-y-0.5 hover:border-purple hover:text-purple"
              >
                <Icon size={18} aria-hidden="true" />
              </a>
            </li>
          );
        })}
      </ul>

      <p className="text-xs text-comment">
        © {new Date().getFullYear()} {locale === "ar" ? "زياد حسني" : site.name} · {t.updated}: {lastUpdated(locale)}
      </p>
    </div>
  </footer>
  );
};

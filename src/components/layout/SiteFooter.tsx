import Link from "next/link";
import { site, socialLinks } from "@/data/portfolio";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border px-6 py-12 lg:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="pixel-heading text-sm">
            Tri Anugerah Yusra
          </p>
          <p className="mt-2 text-sm text-muted">
            © {year} by {site.copyright}_Portfolio
          </p>
        </div>
        <div className="flex flex-wrap gap-6">
          {socialLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted transition hover:text-accent-2"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

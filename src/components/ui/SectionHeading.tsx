import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { SectionGif } from "@/components/ui/SectionGif";

type SectionHeadingProps = {
  /** Small pixel-font label above the heading. */
  eyebrow: string;
  /** Two display lines — the second one renders muted, editorial style. */
  lines: readonly [string, string];
  /** Supporting copy on the right side of the heading. */
  description?: ReactNode;
  action?: { href: string; label: string };
  gif?: { src: string; label: string };
};

export function SectionHeading({
  eyebrow,
  lines,
  description,
  action,
  gif,
}: SectionHeadingProps) {
  const hasAside = Boolean(description || action || gif);

  return (
    <div
      className={`grid gap-10 ${
        hasAside ? "lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:items-stretch" : ""
      }`}
    >
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="display-heading mt-6">
          <span className="block">{lines[0]}</span>
          <span className="block text-muted">{lines[1]}</span>
        </h2>
      </div>

      {hasAside && (
        <div className="flex h-full flex-col justify-between gap-7 lg:pt-1">
          {description && (
            <div className="max-w-md leading-relaxed text-muted">{description}</div>
          )}
          <div className="flex items-end justify-between gap-6">
            {action ? (
              <a
                href={action.href}
                className="group inline-flex items-center gap-1.5 border-b-2 border-foreground pb-1 text-lg font-medium transition-colors hover:border-accent-2 hover:text-accent-2"
              >
                {action.label}
                <ArrowUpRight
                  size={18}
                  className="text-accent-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            ) : (
              <span />
            )}
            {gif && <SectionGif src={gif.src} label={gif.label} />}
          </div>
        </div>
      )}
    </div>
  );
}

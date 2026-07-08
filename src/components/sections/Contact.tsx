"use client";

import { MessageCircle, Send } from "lucide-react";
import { useState } from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionGif } from "@/components/ui/SectionGif";
import { site } from "@/data/portfolio";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const body = encodeURIComponent(
      `Hi Tri,\n\n${message}\n\n— ${name || "Portfolio visitor"}`,
    );
    window.open(
      `${site.whatsappUrl}?text=${body}`,
      "_blank",
      "noopener,noreferrer",
    );
    setSubmitted(true);
  }

  return (
    <section id="contact" className="scroll-mt-24 border-t border-border px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_160px] lg:items-start">
          <FadeIn>
            <p className="section-label">Contact</p>
            <h2 className="pixel-heading mt-4 text-xl md:text-2xl">
              Get in touch
            </h2>
            <p className="mt-4 text-lg font-medium text-accent-3">
              Currently seeking new opportunities!!!
            </p>
            <p className="mt-6 max-w-2xl text-muted leading-relaxed">
              If you&apos;re interested in my work, please contact me or send a
              message for more information. I&apos;m really excited for new
              challenges.
            </p>
          </FadeIn>
          <SectionGif src="/gifs/g7.gif" label="Contact animation" />
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          <FadeIn delay={0.1}>
            <a
              href={site.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="card-surface flex items-center gap-4 rounded-2xl p-6 transition hover:border-accent-2/40"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-soft text-accent-2">
                <MessageCircle size={22} />
              </span>
              <div>
                <p className="text-sm text-muted">WhatsApp</p>
                <p className="font-medium">{site.whatsapp}</p>
              </div>
            </a>
          </FadeIn>

          <FadeIn delay={0.15}>
            {submitted ? (
              <div className="card-surface flex h-full min-h-[280px] flex-col items-center justify-center rounded-2xl p-8 text-center">
                <p className="font-[family-name:var(--font-display)] text-2xl">
                  Thanks for submitting!
                </p>
                <p className="mt-3 text-sm text-muted">
                  Your message was opened in WhatsApp. I&apos;ll get back to you
                  soon.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="card-surface space-y-5 rounded-2xl p-8"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm text-muted"
                  >
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none transition focus:border-accent-2"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm text-muted"
                  >
                    Leave me a message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 outline-none transition focus:border-accent-2"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-brand py-3.5 text-sm font-medium text-white transition hover:brightness-110"
                >
                  Submit
                  <Send size={16} />
                </button>
              </form>
            )}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { useState } from "react";

const cookieImages = [
  "/cookies/146510939d3177b66be71326aa8c34f5.JPG",
  "/cookies/14d366ce0e119348c9ad51e99bafa4b2.JPG",
  "/cookies/366a994bb10551683ae50da0cde510d2.JPG",
  "/cookies/3dd562ca8bde3b1750efb97740732816.JPG",
  "/cookies/586653c5aab73f46521960de2a710255.JPG",
  "/cookies/7220f0d818ff53a8ec35ecdfafb24f2f.JPG",
  "/cookies/8a0038d9d630734526888b1a4da6bd1b.JPG",
  "/cookies/948c06dfe75ff287a618c73b6fc38c7e.JPG",
  "/cookies/a1c0e4a9f6c0b6f44197563f3b58fa74.JPG",
  "/cookies/abd07f1588c976f4977cc8f89d68dda6.JPG",
  "/cookies/c509d6963aacc74ca859e6641a4db58c.JPG",
  "/cookies/dc3b0ad7cb1659775958c222ee4c438f.JPG",
  "/cookies/ea90516d8a6be25b5ce430a18526268a.JPG",
  "/cookies/f0d4e0326a56c7b15278942d3eb9514b.JPG",
  "/cookies/f2df69f842fb4dd4450217114d281163.JPG",
  "/cookies/fc7dcddb99e5af6c38fea31f77062927.JPG",
];

export default function Home() {
  const [galleryExpanded, setGalleryExpanded] = useState(false);
  const visibleImages = galleryExpanded ? cookieImages : cookieImages.slice(0, 8);

  return (
    <div className="min-h-screen" style={{ background: "var(--cream)" }}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#faf8f5]/80 border-b border-[#c4a484]/20">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <a
            href="#"
            className="font-[family-name:var(--font-serif)] text-2xl font-semibold tracking-wide"
            style={{ color: "var(--charcoal)" }}
          >
            Eileen&apos;s Cookies
          </a>
          <div className="hidden md:flex gap-8 text-sm font-medium tracking-wide">
            <a
              href="#about"
              className="transition-colors hover:text-[#a8856a]"
              style={{ color: "var(--charcoal-light)" }}
            >
              About
            </a>
            <a
              href="#services"
              className="transition-colors hover:text-[#a8856a]"
              style={{ color: "var(--charcoal-light)" }}
            >
              Services
            </a>
            <a
              href="#gallery"
              className="transition-colors hover:text-[#a8856a]"
              style={{ color: "var(--charcoal-light)" }}
            >
              Gallery
            </a>
            <a
              href="#contact"
              className="transition-colors hover:text-[#a8856a]"
              style={{ color: "var(--charcoal-light)" }}
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-40"
            style={{ background: "var(--rose)" }}
          />
          <div
            className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full opacity-30"
            style={{ background: "var(--terracotta)", opacity: 0.2 }}
          />
          <div
            className="absolute top-1/3 left-1/4 w-4 h-4 rounded-full"
            style={{ background: "var(--terracotta)", opacity: 0.3 }}
          />
          <div
            className="absolute top-1/2 right-1/3 w-3 h-3 rounded-full"
            style={{ background: "var(--rose-dark)", opacity: 0.4 }}
          />
        </div>

        <div className="text-center px-6 relative z-10 max-w-4xl mx-auto">
          <p
            className="text-sm uppercase tracking-[0.3em] mb-6 font-medium"
            style={{ color: "var(--terracotta)" }}
          >
            Handcrafted with Love
          </p>
          <h1
            className="font-[family-name:var(--font-serif)] text-5xl md:text-7xl lg:text-8xl font-light leading-tight mb-8"
            style={{ color: "var(--charcoal)" }}
          >
            Beautiful Cookies
            <br />
            <span className="italic font-normal">for Every Occasion</span>
          </h1>
          <p
            className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12 font-light"
            style={{ color: "var(--charcoal-light)" }}
          >
            Custom royal icing cookies made with care for your most cherished
            celebrations. From weddings to baby showers and every special event
            in between, each cookie tells your story.
          </p>
          <a
            href="#gallery"
            className="inline-block px-10 py-4 text-sm uppercase tracking-[0.2em] font-medium transition-all duration-300 hover:scale-105"
            style={{
              background: "var(--terracotta)",
              color: "var(--cream)",
            }}
          >
            View Our Work
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <div
            className="w-6 h-10 border-2 rounded-full flex justify-center pt-2"
            style={{ borderColor: "var(--terracotta)" }}
          >
            <div
              className="w-1 h-2 rounded-full"
              style={{ background: "var(--terracotta)" }}
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-32 px-6"
        style={{ background: "var(--cream-dark)" }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <p
            className="text-sm uppercase tracking-[0.3em] mb-6 font-medium"
            style={{ color: "var(--terracotta)" }}
          >
            Our Story
          </p>
          <h2
            className="font-[family-name:var(--font-serif)] text-4xl md:text-5xl font-light mb-8"
            style={{ color: "var(--charcoal)" }}
          >
            A Passion for Perfection
          </h2>
          <p
            className="text-lg leading-relaxed max-w-2xl mx-auto font-light"
            style={{ color: "var(--charcoal-light)" }}
          >
            Every cookie begins with a simple idea and transforms into an
            edible work of art. With years of experience in royal icing
            techniques, we create custom cookies that capture the essence of
            your special moments. Each design is thoughtfully crafted to match
            your vision and exceed your expectations.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p
              className="text-sm uppercase tracking-[0.3em] mb-6 font-medium"
              style={{ color: "var(--terracotta)" }}
            >
              What We Offer
            </p>
            <h2
              className="font-[family-name:var(--font-serif)] text-4xl md:text-5xl font-light"
              style={{ color: "var(--charcoal)" }}
            >
              Our Services
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Wedding */}
            <div
              className="group p-10 text-center transition-all duration-500 hover:-translate-y-2"
              style={{ background: "var(--cream-dark)" }}
            >
              <div
                className="w-20 h-20 mx-auto mb-8 rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110"
                style={{ background: "var(--rose)" }}
              >
                <svg
                  className="w-10 h-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  style={{ color: "var(--terracotta-dark)" }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3
                className="font-[family-name:var(--font-serif)] text-2xl mb-4"
                style={{ color: "var(--charcoal)" }}
              >
                Weddings
              </h3>
              <p
                className="font-light leading-relaxed"
                style={{ color: "var(--charcoal-light)" }}
              >
                Beautiful custom cookies that match your wedding theme
                perfectly. From monograms to florals, we bring your love story
                to life in every bite.
              </p>
            </div>

            {/* Baby Shower */}
            <div
              className="group p-10 text-center transition-all duration-500 hover:-translate-y-2"
              style={{ background: "var(--cream-dark)" }}
            >
              <div
                className="w-20 h-20 mx-auto mb-8 rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110"
                style={{ background: "var(--rose)" }}
              >
                <svg
                  className="w-10 h-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  style={{ color: "var(--terracotta-dark)" }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </div>
              <h3
                className="font-[family-name:var(--font-serif)] text-2xl mb-4"
                style={{ color: "var(--charcoal)" }}
              >
                Baby Showers
              </h3>
              <p
                className="font-light leading-relaxed"
                style={{ color: "var(--charcoal-light)" }}
              >
                Sweet treats to welcome your little one. Onesies, rattles,
                animals, and more—all decorated with care for your special day.
              </p>
            </div>

            {/* Special Events */}
            <div
              className="group p-10 text-center transition-all duration-500 hover:-translate-y-2"
              style={{ background: "var(--cream-dark)" }}
            >
              <div
                className="w-20 h-20 mx-auto mb-8 rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110"
                style={{ background: "var(--rose)" }}
              >
                <svg
                  className="w-10 h-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  style={{ color: "var(--terracotta-dark)" }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                  />
                </svg>
              </div>
              <h3
                className="font-[family-name:var(--font-serif)] text-2xl mb-4"
                style={{ color: "var(--charcoal)" }}
              >
                Special Events
              </h3>
              <p
                className="font-light leading-relaxed"
                style={{ color: "var(--charcoal-light)" }}
              >
                Birthdays, graduations, holidays, corporate gatherings, and
                more. Whatever the occasion, we create custom cookies to make
                it unforgettable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section
        id="gallery"
        className="py-32 px-6"
        style={{ background: "var(--cream-dark)" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p
              className="text-sm uppercase tracking-[0.3em] mb-6 font-medium"
              style={{ color: "var(--terracotta)" }}
            >
              Our Work
            </p>
            <h2
              className="font-[family-name:var(--font-serif)] text-4xl md:text-5xl font-light"
              style={{ color: "var(--charcoal)" }}
            >
              Cookie Gallery
            </h2>
          </div>

          {/* Gallery grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {visibleImages.map((src, index) => (
              <div
                key={index}
                className="aspect-square relative overflow-hidden group"
              >
                <Image
                  src={src}
                  alt={`Cookie design ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                {/* Hover overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "rgba(196, 164, 132, 0.3)" }}
                />
              </div>
            ))}
          </div>

          {/* Show More / Show Less Button */}
          {cookieImages.length > 8 && (
            <div className="text-center mt-12">
              <button
                onClick={() => setGalleryExpanded(!galleryExpanded)}
                className="inline-flex items-center gap-2 px-8 py-3 text-sm uppercase tracking-[0.15em] font-medium transition-all duration-300 hover:scale-105 cursor-pointer"
                style={{
                  background: "transparent",
                  color: "var(--charcoal)",
                  border: "1px solid var(--terracotta)",
                }}
              >
                {galleryExpanded ? (
                  <>
                    Show Less
                    <svg
                      className="w-4 h-4 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 15l7-7 7 7"
                      />
                    </svg>
                  </>
                ) : (
                  <>
                    Show More
                    <svg
                      className="w-4 h-4 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p
            className="text-sm uppercase tracking-[0.3em] mb-6 font-medium"
            style={{ color: "var(--terracotta)" }}
          >
            Get in Touch
          </p>
          <h2
            className="font-[family-name:var(--font-serif)] text-4xl md:text-5xl font-light mb-8"
            style={{ color: "var(--charcoal)" }}
          >
            Let&apos;s Create Something Sweet
          </h2>
          <p
            className="text-lg leading-relaxed mb-12 font-light"
            style={{ color: "var(--charcoal-light)" }}
          >
            Ready to order custom cookies for your special occasion? We&apos;d
            love to hear from you. Reach out to discuss your vision and
            we&apos;ll bring it to life.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="mailto:eileenscookies.erie@gmail.com"
              className="inline-flex items-center gap-3 px-8 py-4 text-sm uppercase tracking-[0.15em] font-medium transition-all duration-300 hover:scale-105"
              style={{
                background: "var(--terracotta)",
                color: "var(--cream)",
              }}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Email Us
            </a>
            <a
              href="tel:+18148069067"
              className="inline-flex items-center gap-3 px-8 py-4 text-sm uppercase tracking-[0.15em] font-medium transition-all duration-300 hover:scale-105"
              style={{
                background: "transparent",
                color: "var(--charcoal)",
                border: "1px solid var(--terracotta)",
              }}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              (814) 806-9067
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="py-12 px-6 border-t"
        style={{ borderColor: "rgba(196, 164, 132, 0.2)" }}
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p
            className="font-[family-name:var(--font-serif)] text-xl"
            style={{ color: "var(--charcoal)" }}
          >
            Eileen&apos;s Cookies
          </p>
          <p className="text-sm" style={{ color: "var(--charcoal-light)" }}>
            Made with love.
          </p>
        </div>
      </footer>
    </div>
  );
}

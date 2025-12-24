"use client";

import { useState } from "react";

const galleryImages = [
  {
    id: 1,
    category: "wedding",
    placeholder: "Wedding Monogram Set",
    color: "#e8d5d0",
  },
  {
    id: 2,
    category: "event",
    placeholder: "Corporate Logo Cookies",
    color: "#f5e6d3",
  },
  {
    id: 3,
    category: "baby-shower",
    placeholder: "Baby Onesie Cookies",
    color: "#d4e5ed",
  },
  {
    id: 4,
    category: "wedding",
    placeholder: "Bridal Dress Cookies",
    color: "#f0ebe5",
  },
  {
    id: 5,
    category: "event",
    placeholder: "Holiday Collection",
    color: "#f5d5e0",
  },
  {
    id: 6,
    category: "baby-shower",
    placeholder: "Woodland Animals",
    color: "#e5edd4",
  },
  {
    id: 7,
    category: "wedding",
    placeholder: "Elegant Lace Pattern",
    color: "#ebe5e3",
  },
  {
    id: 8,
    category: "event",
    placeholder: "Graduation Celebration",
    color: "#d4d8ed",
  },
];

const categories = [
  { id: "all", label: "All" },
  { id: "wedding", label: "Weddings" },
  { id: "baby-shower", label: "Baby Showers" },
  { id: "event", label: "Special Events" },
];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredImages =
    activeCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

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
                Elegant favors and dessert table additions that match your
                wedding theme. From monograms to florals, we bring your love
                story to life.
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
              className="font-[family-name:var(--font-serif)] text-4xl md:text-5xl font-light mb-12"
              style={{ color: "var(--charcoal)" }}
            >
              Cookie Gallery
            </h2>

            {/* Filter buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className="px-6 py-2 text-sm uppercase tracking-[0.15em] transition-all duration-300 cursor-pointer"
                  style={{
                    background:
                      activeCategory === cat.id
                        ? "var(--terracotta)"
                        : "transparent",
                    color:
                      activeCategory === cat.id
                        ? "var(--cream)"
                        : "var(--charcoal-light)",
                    border:
                      activeCategory === cat.id
                        ? "1px solid transparent"
                        : "1px solid var(--terracotta)",
                  }}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {filteredImages.map((img, index) => (
              <div
                key={img.id}
                className="aspect-square relative overflow-hidden group cursor-pointer"
                style={{
                  background: img.color,
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Placeholder content */}
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <p
                    className="font-[family-name:var(--font-serif)] text-lg text-center opacity-60"
                    style={{ color: "var(--charcoal)" }}
                  >
                    {img.placeholder}
                  </p>
                </div>

                {/* Hover overlay */}
                <div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "rgba(196, 164, 132, 0.9)" }}
                >
                  <p
                    className="text-sm uppercase tracking-[0.2em] font-medium"
                    style={{ color: "var(--cream)" }}
                  >
                    View
                  </p>
                </div>
              </div>
            ))}
          </div>
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
              href="mailto:hello@eileenscookies.com"
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
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 text-sm uppercase tracking-[0.15em] font-medium transition-all duration-300 hover:scale-105"
              style={{
                background: "transparent",
                color: "var(--charcoal)",
                border: "1px solid var(--terracotta)",
              }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              Follow Us
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
            © {new Date().getFullYear()} All rights reserved. Made with love.
          </p>
        </div>
      </footer>
    </div>
  );
}

import { useEffect, useRef, useState } from 'react';

type Section = 'home' | 'menu' | 'story' | 'visit';

const links: { id: Section; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'menu', label: 'Menu' },
  { id: 'story', label: 'Our Story' },
  { id: 'visit', label: 'Visit' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<Section>('home');
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id as Section);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    links.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) observer.current?.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', onScroll);
      observer.current?.disconnect();
    };
  }, []);

  const go = (id: Section) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cream-50/95 backdrop-blur-md shadow-[0_6px_24px_rgba(20,43,33,0.12)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-5 sm:px-8 flex items-center justify-between h-20">
        <button
          onClick={() => go('home')}
          className="flex items-center gap-2.5 group"
          aria-label="Bella Cucina home"
        >
          <span
            className={`grid place-items-center w-10 h-10 rounded-full border-2 transition-colors duration-500 ${
              scrolled
                ? 'border-forest-600 text-forest-600'
                : 'border-cream-100 text-cream-100'
            }`}
          >
            <span className="font-serif text-lg font-bold leading-none">BC</span>
          </span>
          <span className="flex flex-col leading-none text-left">
            <span
              className={`font-serif text-xl font-semibold tracking-wide transition-colors duration-500 ${
                scrolled ? 'text-forest-700' : 'text-cream-50'
              }`}
            >
              Bella Cucina
            </span>
            <span
              className={`font-body text-[0.7rem] tracking-[0.25em] uppercase transition-colors duration-500 ${
                scrolled ? 'text-gold-600' : 'text-gold-400'
              }`}
            >
              Trattoria · Est. 1986
            </span>
          </span>
        </button>

        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.id}>
              <button
                onClick={() => go(l.id)}
                className={`relative px-4 py-2 font-body text-lg tracking-wide transition-colors duration-300 ${
                  active === l.id
                    ? scrolled
                      ? 'text-forest-700'
                      : 'text-cream-50'
                    : scrolled
                      ? 'text-forest-600/70 hover:text-forest-700'
                      : 'text-cream-100/80 hover:text-cream-50'
                }`}
              >
                {l.label}
                <span
                  className={`absolute left-1/2 -translate-x-1/2 -bottom-0.5 h-0.5 bg-gold-500 rounded-full transition-all duration-300 ${
                    active === l.id ? 'w-5 opacity-100' : 'w-0 opacity-0'
                  }`}
                />
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => go('visit')}
              className="ml-3 px-5 py-2.5 rounded-full font-body text-lg font-medium text-cream-50 bg-forest-600 hover:bg-forest-700 transition-colors duration-300 shadow-md"
            >
              Reserve
            </button>
          </li>
        </ul>

        <button
          className="md:hidden grid place-items-center w-10 h-10 rounded-lg"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span className={`relative block w-6 h-4 transition-colors ${scrolled ? 'text-forest-700' : 'text-cream-50'}`}>
            <span
              className={`absolute left-0 top-0 w-full h-0.5 bg-current rounded transition-transform duration-300 ${
                open ? 'rotate-45 translate-y-1.5' : ''
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 w-full h-0.5 bg-current rounded transition-opacity duration-300 ${
                open ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`absolute left-0 top-3 w-full h-0.5 bg-current rounded transition-transform duration-300 ${
                open ? '-rotate-45 -translate-y-1.5' : ''
              }`}
            />
          </span>
        </button>
      </nav>

      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-500 bg-cream-50 shadow-lg ${
          open ? 'max-h-80' : 'max-h-0'
        }`}
      >
        <ul className="px-5 py-4 flex flex-col gap-1">
          {links.map((l) => (
            <li key={l.id}>
              <button
                onClick={() => go(l.id)}
                className={`w-full text-left px-4 py-3 rounded-lg font-body text-xl transition-colors ${
                  active === l.id
                    ? 'text-cream-50 bg-forest-600'
                    : 'text-forest-700 hover:bg-cream-200'
                }`}
              >
                {l.label}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => go('visit')}
              className="mt-2 w-full px-4 py-3 rounded-lg font-body text-xl font-medium text-cream-50 bg-mare-600 hover:bg-mare-700 transition-colors"
            >
              Reserve a table
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}

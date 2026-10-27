import { Wine } from 'lucide-react';

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/38475586/pexels-photo-38475586.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1900"
          alt="Elegant Italian dish with wine in a cozy trattoria"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-900/70 via-forest-900/45 to-forest-900/80" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <p
          className="font-body text-gold-400 tracking-[0.35em] uppercase text-sm sm:text-base mb-5 animate-fade-in"
          style={{ animationDelay: '0.1s' }}
        >
          Benvenuti a
        </p>
        <h1
          className="font-serif text-5xl sm:text-7xl md:text-8xl font-semibold text-cream-50 text-shadow-lg leading-[1.05] animate-fade-up"
          style={{ animationDelay: '0.2s' }}
        >
          Bella Cucina
        </h1>
        <div
          className="flex items-center justify-center gap-4 mt-6 animate-fade-in"
          style={{ animationDelay: '0.4s' }}
        >
          <span className="h-px w-12 bg-gold-400/70" />
          <Wine className="w-5 h-5 text-gold-400" />
          <span className="h-px w-12 bg-gold-400/70" />
        </div>
        <p
          className="font-body text-xl sm:text-2xl text-cream-100 mt-6 max-w-xl mx-auto leading-relaxed text-shadow-soft animate-fade-up"
          style={{ animationDelay: '0.5s' }}
        >
          Honest, soulful Italian cooking — handmade pasta, wood-fired pizza
          and a cellar chosen with care. A little corner of Italy since 1986.
        </p>
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center mt-10 animate-fade-up"
          style={{ animationDelay: '0.7s' }}
        >
          <a
            href="#menu"
            className="px-8 py-3.5 rounded-full font-body text-lg font-medium text-cream-50 bg-forest-600 hover:bg-forest-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            View the menu
          </a>
          <a
            href="#visit"
            className="px-8 py-3.5 rounded-full font-body text-lg font-medium text-forest-700 bg-cream-100/95 hover:bg-cream-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 backdrop-blur-sm"
          >
            Reserve a table
          </a>
        </div>
      </div>

      <a
        href="#story"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-cream-100/70 hover:text-cream-50 transition-colors animate-fade-in"
        style={{ animationDelay: '1s' }}
        aria-label="Scroll down"
      >
        <span className="font-body text-xs tracking-[0.3em] uppercase">Discover</span>
        <span className="w-px h-10 bg-cream-100/40 animate-pulse" />
      </a>
    </section>
  );
}

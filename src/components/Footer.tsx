import { Facebook, Instagram, Wine } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-forest-900 text-cream-200 py-14">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 items-start">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="grid place-items-center w-10 h-10 rounded-full border-2 border-gold-400 text-gold-400">
                <span className="font-serif text-lg font-bold leading-none">
                  BC
                </span>
              </span>
              <span className="font-serif text-2xl text-cream-50">
                Bella Cucina
              </span>
            </div>
            <p className="font-body text-cream-200/70 max-w-xs leading-relaxed">
              A family trattoria pouring heart and history onto every plate
              since 1986.
            </p>
          </div>

          <div className="sm:justify-self-center">
            <h4 className="font-serif text-lg text-cream-50 mb-3">Explore</h4>
            <ul className="space-y-2 font-body text-cream-200/80">
              <li>
                <a href="#menu" className="hover:text-gold-400 transition-colors">
                  Menu
                </a>
              </li>
              <li>
                <a href="#story" className="hover:text-gold-400 transition-colors">
                  Our story
                </a>
              </li>
              <li>
                <a href="#visit" className="hover:text-gold-400 transition-colors">
                  Reservations
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:justify-self-end">
            <h4 className="font-serif text-lg text-cream-50 mb-3">
              Stay in touch
            </h4>
            <p className="font-body text-cream-200/70 mb-3">
              Via del Mare 14, Borgo San Sepolcro
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="grid place-items-center w-10 h-10 rounded-full border border-cream-200/30 hover:border-gold-400 hover:text-gold-400 transition-colors"
              >
                <Instagram className="w-4.5 h-4.5" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="grid place-items-center w-10 h-10 rounded-full border border-cream-200/30 hover:border-gold-400 hover:text-gold-400 transition-colors"
              >
                <Facebook className="w-4.5 h-4.5" />
              </a>
              <a
                href="#visit"
                aria-label="Reservations"
                className="grid place-items-center w-10 h-10 rounded-full border border-cream-200/30 hover:border-gold-400 hover:text-gold-400 transition-colors"
              >
                <Wine className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-cream-200/15 flex flex-col sm:flex-row justify-between gap-2 text-sm font-body text-cream-200/50">
          <p>© {new Date().getFullYear()} Bella Cucina Trattoria. All rights reserved.</p>
          <p>Made with amore in Toscana.</p>
        </div>
      </div>
    </footer>
  );
}

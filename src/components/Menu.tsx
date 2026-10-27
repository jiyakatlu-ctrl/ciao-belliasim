import { useState } from 'react';
import { menu, type MenuItem } from '@/data/menu';

function Dish({ item }: { item: MenuItem }) {
  return (
    <article className="group flex gap-4 sm:gap-5 py-5 first:pt-0 last:pb-0 border-b border-cream-300/70 last:border-0">
      {item.image ? (
        <div className="shrink-0 w-20 h-20 sm:w-28 sm:h-28 rounded-xl overflow-hidden shadow-sm ring-1 ring-cream-300/60">
          <img
            src={item.image}
            alt={item.name}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      ) : (
        <div className="shrink-0 w-20 h-20 sm:w-28 sm:h-28 rounded-xl bg-cream-200 grid place-items-center ring-1 ring-cream-300/60">
          <span className="font-serif text-3xl text-gold-500/70">
            {item.name.charAt(0)}
          </span>
        </div>
      )}

      <div className="flex-1 min-w-0">
        <div className="flex items-baseline justify-between gap-3">
          <h4 className="font-serif text-lg sm:text-xl text-forest-700 leading-snug">
            {item.name}
          </h4>
          <span className="font-serif text-lg sm:text-xl font-semibold text-mare-600 whitespace-nowrap">
            €{item.price.toFixed(2)}
          </span>
        </div>
        {item.tag && (
          <span className="inline-block mt-1 text-[0.68rem] font-body uppercase tracking-[0.2em] text-gold-600 bg-gold-400/15 px-2 py-0.5 rounded-full">
            {item.tag}
          </span>
        )}
        <p className="font-body text-base sm:text-[1.05rem] text-forest-800/70 leading-snug mt-1.5">
          {item.description}
        </p>
      </div>
    </article>
  );
}

export function Menu() {
  const [active, setActive] = useState(menu[0].id);
  const current = menu.find((c) => c.id === active) ?? menu[0];

  return (
    <section id="menu" className="relative py-24 sm:py-32 bg-forest-900">
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0z' fill='none'/%3E%3Ccircle cx='20' cy='20' r='1.5' fill='%23f7f1e3'/%3E%3C/svg%3E\")",
        }}
      />
      <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-12">
          <p className="font-body text-gold-400 tracking-[0.3em] uppercase text-sm mb-3">
            Il menù
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl text-cream-50 leading-tight">
            Our menu
          </h2>
          <p className="font-body text-lg text-cream-200/80 mt-4 max-w-xl mx-auto">
            A short, seasonal list that changes with the markets. Prices in
            euros, all dishes prepared to order.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {menu.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`px-5 py-2.5 rounded-full font-body text-base sm:text-lg tracking-wide transition-all duration-300 ${
                active === cat.id
                  ? 'bg-gold-500 text-forest-900 font-semibold shadow-md'
                  : 'bg-forest-800/60 text-cream-200/80 hover:bg-forest-700 hover:text-cream-50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div key={current.id} className="animate-fade-in">
          <p className="font-body italic text-gold-400 text-center text-lg mb-2">
            {current.italian}
          </p>

          <div className="max-w-3xl mx-auto bg-cream-50/95 rounded-2xl shadow-2xl p-6 sm:p-10">
            {current.items.map((item) => (
              <Dish key={item.id} item={item} />
            ))}
          </div>
        </div>

        <p className="text-center font-body text-cream-200/60 text-sm mt-8">
          Please inform us of any allergies — a discretionary 10% service
          charge applies to tables of six or more.
        </p>
      </div>
    </section>
  );
}

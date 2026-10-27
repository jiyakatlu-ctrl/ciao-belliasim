import { UtensilsCrossed, Flame, Grape } from 'lucide-react';

const pillars = [
  {
    icon: UtensilsCrossed,
    title: 'Pasta fatta a mano',
    text: 'Every tagliatelle, ravioli and orecchiette is rolled by hand each morning, just like nonna taught us.',
  },
  {
    icon: Flame,
    title: 'Wood-fired at heart',
    text: 'Our Neapolitan oven burns oak at 450°C, giving every pizza that leopard-spotted, blistered crust.',
  },
  {
    icon: Grape,
    title: 'A cellar to explore',
    text: 'Over 80 Italian labels, from natural Frasca to age-worthy Barolo — ask, and we will pair it for you.',
  },
];

export function Story() {
  return (
    <section id="story" className="relative py-24 sm:py-32 bg-cream-50">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl border-2 border-gold-400/40 hidden sm:block" />
            <img
              src="https://images.pexels.com/photos/4253127/pexels-photo-4253127.jpeg?auto=compress&cs=tinysrgb&h=720&w=540"
              alt="Chef adding fresh herbs to a plate of pasta"
              className="relative rounded-2xl shadow-xl w-full object-cover aspect-[4/5]"
            />
            <div className="absolute -bottom-6 -right-4 sm:right-8 bg-forest-700 text-cream-50 rounded-xl px-6 py-4 shadow-lg max-w-[200px]">
              <p className="font-serif text-3xl font-semibold leading-none">38</p>
              <p className="font-body text-sm tracking-wide text-cream-200 mt-1">
                years serving the neighbourhood
              </p>
            </div>
          </div>

          <div>
            <p className="font-body text-gold-600 tracking-[0.3em] uppercase text-sm mb-3">
              La nostra storia
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl text-forest-700 leading-tight mb-6">
              From a Tuscan kitchen to your table
            </h2>
            <p className="font-body text-lg text-forest-800/85 leading-relaxed mb-5">
              Bella Cucina began in 1986 when the Marchetti family brought their
              recipes from a small village outside Florence to a corner
              shopfront on Via del Mare. Three generations later, we still make
              our dough by hand, still press our olive oil in the autumn, and
              still believe a meal is something to be shared slowly.
            </p>
            <p className="font-body text-lg text-forest-800/85 leading-relaxed mb-9">
              Our kitchen is open to the room — you can watch the pasta being
              rolled, smell the wood fire, and hear the room fill with the
              easy hum of people who came for good food and stayed for each
              other.
            </p>

            <div className="grid sm:grid-cols-3 gap-5">
              {pillars.map((p) => (
                <div
                  key={p.title}
                  className="group rounded-xl bg-white/70 border border-cream-300 p-5 hover:shadow-md hover:border-gold-400 transition-all duration-300"
                >
                  <p.icon className="w-7 h-7 text-forest-600 mb-3 group-hover:text-gold-600 transition-colors" />
                  <h3 className="font-serif text-lg text-forest-700 mb-1.5">
                    {p.title}
                  </h3>
                  <p className="font-body text-base text-forest-800/70 leading-snug">
                    {p.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Clock, MapPin, Phone, Utensils } from 'lucide-react';
import { useState } from 'react';

export function Visit() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    date: '',
    time: '19:00',
    guests: '2',
    notes: '',
  });

  const update = (key: keyof typeof form, value: string) =>
    setForm((f) => ({ ...f, [key]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="visit" className="relative py-24 sm:py-32 bg-cream-100">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-14">
          <p className="font-body text-gold-600 tracking-[0.3em] uppercase text-sm mb-3">
            Prenotazioni
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl text-forest-700 leading-tight">
            Join us at the table
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14">
          {/* Info column */}
          <div className="space-y-7">
            <div className="rounded-2xl overflow-hidden shadow-lg h-56 sm:h-64">
              <img
                src="https://images.pexels.com/photos/14885437/pexels-photo-14885437.jpeg?auto=compress&cs=tinysrgb&h=500&w=800"
                alt="Elegant table setting inside the restaurant"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <InfoCard icon={MapPin} title="Find us">
                <p>Via del Mare 14</p>
                <p>Borgo San Sepolcro, Toscana</p>
              </InfoCard>
              <InfoCard icon={Clock} title="Opening hours">
                <p>Tue–Sun · 12:00–15:00</p>
                <p>18:30–23:00 · Closed Monday</p>
              </InfoCard>
              <InfoCard icon={Phone} title="Call to book">
                <p>+39 0575 042 198</p>
                <p className="text-forest-800/60 text-sm mt-1">
                  Lines open during service
                </p>
              </InfoCard>
              <InfoCard icon={Utensils} title="Private dining">
                <p>The cellar room seats up to 18</p>
                <p className="text-forest-800/60 text-sm mt-1">
                  Ask about set menus
                </p>
              </InfoCard>
            </div>
          </div>

          {/* Reservation form */}
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-9 border border-cream-300">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-forest-100 grid place-items-center mb-5">
                  <Utensils className="w-8 h-8 text-forest-600" />
                </div>
                <h3 className="font-serif text-2xl text-forest-700 mb-2">
                  Grazie, {form.name || 'amico'}!
                </h3>
                <p className="font-body text-lg text-forest-800/70 max-w-sm">
                  We've noted your request for {form.guests} on{' '}
                  {form.date || 'your chosen date'} at {form.time}. We'll call
                  to confirm shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-7 font-body text-mare-600 hover:text-mare-700 underline underline-offset-4"
                >
                  Make another reservation
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="font-serif text-2xl text-forest-700">
                  Reserve a table
                </h3>
                <Field label="Name">
                  <input
                    required
                    type="text"
                    value={form.name}
                    onChange={(e) => update('name', e.target.value)}
                    placeholder="Your name"
                    className={inputClass}
                  />
                </Field>
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Date">
                    <input
                      required
                      type="date"
                      value={form.date}
                      onChange={(e) => update('date', e.target.value)}
                      className={inputClass}
                    />
                  </Field>
                  <Field label="Time">
                    <select
                      value={form.time}
                      onChange={(e) => update('time', e.target.value)}
                      className={inputClass}
                    >
                      {[
                        '12:00', '12:30', '13:00', '13:30', '14:00',
                        '18:30', '19:00', '19:30', '20:00', '20:30', '21:00',
                      ].map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </Field>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Guests">
                    <select
                      value={form.guests}
                      onChange={(e) => update('guests', e.target.value)}
                      className={inputClass}
                    >
                      {['1', '2', '3', '4', '5', '6', '7', '8'].map((g) => (
                        <option key={g} value={g}>
                          {g} {g === '1' ? 'guest' : 'guests'}
                        </option>
                      ))}
                    </select>
                  </Field>
                  <Field label="Notes (optional)">
                    <input
                      type="text"
                      value={form.notes}
                      onChange={(e) => update('notes', e.target.value)}
                      placeholder="Allergies, occasion…"
                      className={inputClass}
                    />
                  </Field>
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full font-body text-lg font-medium text-cream-50 bg-forest-600 hover:bg-forest-700 transition-colors duration-300 shadow-md"
                >
                  Request reservation
                </button>
                <p className="font-body text-sm text-forest-800/60 text-center">
                  For parties larger than 8, please call us directly.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

const inputClass =
  'w-full rounded-lg border border-cream-300 bg-cream-50 px-4 py-2.5 font-body text-lg text-forest-800 focus:outline-none focus:ring-2 focus:ring-forest-400 focus:border-transparent transition-all';

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="block font-body text-sm tracking-wide text-forest-700 mb-1.5">
        {label}
      </span>
      {children}
    </label>
  );
}

function InfoCard({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white rounded-xl p-5 border border-cream-300/70">
      <div className="flex items-center gap-2.5 mb-2">
        <Icon className="w-5 h-5 text-gold-600" />
        <h4 className="font-serif text-lg text-forest-700">{title}</h4>
      </div>
      <div className="font-body text-base text-forest-800/80 space-y-0.5">
        {children}
      </div>
    </div>
  );
}

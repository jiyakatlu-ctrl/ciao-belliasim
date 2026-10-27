export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  image?: string;
  tag?: string;
};

export type MenuCategory = {
  id: string;
  label: string;
  italian: string;
  items: MenuItem[];
};

export const menu: MenuCategory[] = [
  {
    id: 'antipasti',
    label: 'Antipasti',
    italian: 'To begin',
    items: [
      {
        id: 'a1',
        name: 'Bruschetta al Pomodoro',
        description:
          'Toasted ciabatta, vine tomatoes, garlic, fresh basil & extra-virgin olive oil.',
        price: 9.5,
        image:
          'https://images.pexels.com/photos/5639415/pexels-photo-5639415.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
        tag: 'Vegetarian',
      },
      {
        id: 'a2',
        name: 'Antipasto della Casa',
        description:
          'A board of prosciutto di Parma, salami, marinated olives, buffalo mozzarella & grissini.',
        price: 16.0,
        image:
          'https://images.pexels.com/photos/4087611/pexels-photo-4087611.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
        tag: 'For sharing',
      },
      {
        id: 'a3',
        name: 'Carciofini Fritti',
        description:
          'Crispy Roman artichokes with lemon, sea salt and a saffron aioli.',
        price: 12.0,
      },
    ],
  },
  {
    id: 'pasta',
    label: 'Pasta',
    italian: 'Freshly made',
    items: [
      {
        id: 'p1',
        name: 'Spaghetti alla Carbonara',
        description:
          'Guanciale, free-range egg yolk, Pecorino Romano and cracked black pepper.',
        price: 18.0,
        image:
          'https://images.pexels.com/photos/546945/pexels-photo-546945.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
        tag: 'Signature',
      },
      {
        id: 'p2',
        name: 'Tagliatelle al Tartufo',
        description:
          'Hand-cut tagliatelle, black truffle, butter and Parmigiano Reggiano.',
        price: 24.0,
        image:
          'https://images.pexels.com/photos/1438672/pexels-photo-1438672.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
      },
      {
        id: 'p3',
        name: 'Pesto di Pistacchio e Gamberi',
        description:
          'Linguine, Sicilian pistachio pesto, sautéed prawns and lemon zest.',
        price: 22.0,
        image:
          'https://images.pexels.com/photos/8917285/pexels-photo-8917285.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
      },
      {
        id: 'p4',
        name: 'Lasagna alla Bolognese',
        description:
          'Slow-cooked beef ragù, béchamel, spinach pasta and a golden Parmigiano crust.',
        price: 19.5,
        image:
          'https://images.pexels.com/photos/33312938/pexels-photo-33312938.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
      },
    ],
  },
  {
    id: 'risotti',
    label: 'Risotti',
    italian: 'From the pan',
    items: [
      {
        id: 'r1',
        name: 'Risotto ai Frutti di Mare',
        description:
          'Carnaroli rice, mussels, clams, prawns, cherry tomatoes and white wine.',
        price: 26.0,
        image:
          'https://images.pexels.com/photos/11776360/pexels-photo-11776360.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
        tag: 'Signature',
      },
      {
        id: 'r2',
        name: 'Risotto ai Gamberi',
        description:
          'Saffron risotto, king prawns, spring onion and a herb oil drizzle.',
        price: 23.0,
        image:
          'https://images.pexels.com/photos/9058939/pexels-photo-9058939.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
      },
    ],
  },
  {
    id: 'pizza',
    label: 'Pizza',
    italian: 'Wood-fired',
    items: [
      {
        id: 'z1',
        name: 'Margherita DOP',
        description:
          'San Marzano tomato, fior di latte, fresh basil and extra-virgin olive oil.',
        price: 15.0,
        image:
          'https://images.pexels.com/photos/31596394/pexels-photo-31596394.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
        tag: 'Classic',
      },
      {
        id: 'z2',
        name: 'Diavola',
        description:
          'Spicy salami, San Marzano tomato, mozzarella, chilli flakes and oregano.',
        price: 17.0,
        image:
          'https://images.pexels.com/photos/29609013/pexels-photo-29609013.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
      },
      {
        id: 'z3',
        name: 'Boscaiola',
        description:
          'Wild mushrooms, Italian sausage, mozzarella, truffle cream and parsley.',
        price: 18.5,
        image:
          'https://images.pexels.com/photos/10802332/pexels-photo-10802332.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
      },
    ],
  },
  {
    id: 'dolci',
    label: 'Dolci',
    italian: 'Sweet endings',
    items: [
      {
        id: 'd1',
        name: 'Tiramisù della Nonna',
        description:
          'Mascarpone, espresso-soaked savoiardi, cocoa and a hint of Marsala.',
        price: 9.0,
        tag: 'Classic',
      },
      {
        id: 'd2',
        name: 'Gelato Artigianale',
        description:
          'Three scoops of house-made gelato: pistachio, stracciatella and amarena cherry.',
        price: 8.5,
        image:
          'https://images.pexels.com/photos/33431370/pexels-photo-33431370.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
      },
      {
        id: 'd3',
        name: 'Panna Cotta ai Frutti di Bosco',
        description:
          'Vanilla bean cream set with gelatin, wild berry compote and mint.',
        price: 8.0,
      },
    ],
  },
];

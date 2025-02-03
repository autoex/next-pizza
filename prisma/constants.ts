export const categories = [
  { name: 'Pizzas' },
  { name: 'Combos' },
  { name: 'Snacks' },
  { name: 'Cocktails' },
  { name: 'Coffee' },
  { name: 'Drinks' },
  { name: 'Desserts' },
];

export const pizzas = [
  {
    name: 'Pepperoni Fresh',
    imageUrl:
      'https://res.cloudinary.com/ddnsdfd5l/image/upload/v1738589908/pizzzas/iuhoxvursigwen218apz.webp',
    active: true,
  },
  {
    name: 'Cheese',
    imageUrl:
      'https://res.cloudinary.com/ddnsdfd5l/image/upload/v1738589908/pizzzas/vdmn6wgusif29tfpfb4l.avif',
    active: true,
  },
  {
    name: 'Chorizo Fresh',
    imageUrl:
      'https://res.cloudinary.com/ddnsdfd5l/image/upload/v1738589908/pizzzas/hsjmzyffdjm3siwhnz1b.webp',
    active: true,
  },
];

export const ingredients = [
  {
    name: 'Cheese Crust',
    price: 179,
    imageUrl:
      'https://res.cloudinary.com/ddnsdfd5l/image/upload/v1738589835/ingredients/u1hfcrxga8bzekhu7kuu.png',
  },
  {
    name: 'Creamy Mozzarella',
    price: 79,
    imageUrl:
      'https://res.cloudinary.com/ddnsdfd5l/image/upload/v1738589835/ingredients/tjn4d09vsxge1a1mtgo7.png',
  },
  {
    name: 'Cheddar and Parmesan Cheese',
    price: 79,
    imageUrl:
      'https://res.cloudinary.com/ddnsdfd5l/image/upload/v1738589835/ingredients/o4wmpxoawbhckhdmlgp0.png',
  },
  {
    name: 'Spicy Jalapeño Pepper',
    price: 59,
    imageUrl:
      'https://res.cloudinary.com/ddnsdfd5l/image/upload/v1738589835/ingredients/gppqug8yjokxebcb2pwj.png',
  },
  {
    name: 'Tender Chicken',
    price: 79,
    imageUrl:
      'https://res.cloudinary.com/ddnsdfd5l/image/upload/v1738589835/ingredients/tmppomacenloj2srsy1x.png',
  },
  {
    name: 'Champignons',
    price: 59,
    imageUrl:
      'https://res.cloudinary.com/ddnsdfd5l/image/upload/v1738589835/ingredients/uhbd4y64mgpgkibg0kw6.png',
  },
  {
    name: 'Bacon',
    price: 79,
    imageUrl:
      'https://res.cloudinary.com/ddnsdfd5l/image/upload/v1738589835/ingredients/dciucl6ribhpfahw5hgv.png',
  },
  {
    name: 'Ham',
    price: 79,
    imageUrl:
      'https://res.cloudinary.com/ddnsdfd5l/image/upload/v1738589835/ingredients/lqsqoqgshadmhlggkzff.png',
  },
  {
    name: 'Spicy Pepperoni',
    price: 79,
    imageUrl:
      'https://res.cloudinary.com/ddnsdfd5l/image/upload/v1738589834/ingredients/zt714f4ywbc6nswurny5.png',
  },
  {
    name: 'Spicy Chorizo',
    price: 79,
    imageUrl:
      'https://res.cloudinary.com/ddnsdfd5l/image/upload/v1738589834/ingredients/zt714f4ywbc6nswurny5.png',
  },
  {
    name: 'Pickles',
    price: 59,
    imageUrl:
      'https://res.cloudinary.com/ddnsdfd5l/image/upload/v1738589834/ingredients/gmpvgcu2az4qvjqykxlr.png',
  },
  {
    name: 'Fresh Tomatoes',
    price: 59,
    imageUrl:
      'https://res.cloudinary.com/ddnsdfd5l/image/upload/v1738589834/ingredients/iq6zwf61u6yrdfpefkmm.png',
  },
  {
    name: 'Red Onion',
    price: 59,
    imageUrl:
      'https://res.cloudinary.com/ddnsdfd5l/image/upload/v1738589834/ingredients/dsiieoctnuuyjzvoypmp.png',
  },
  {
    name: 'Juicy Pineapples',
    price: 59,
    imageUrl:
      'https://res.cloudinary.com/ddnsdfd5l/image/upload/v1738589834/ingredients/r5vgcesmukhihrrxjglz.png',
  },
  {
    name: 'Italian Herbs',
    price: 39,
    imageUrl:
      'https://res.cloudinary.com/ddnsdfd5l/image/upload/v1738589834/ingredients/orbardrwbaqvpikdokj4.png',
  },
  {
    name: 'Sweet Pepper',
    price: 59,
    imageUrl:
      'https://res.cloudinary.com/ddnsdfd5l/image/upload/v1738589834/ingredients/xoe57aidgoxunnazbfze.png',
  },
  {
    name: 'Feta Cheese Cubes',
    price: 79,
    imageUrl:
      'https://res.cloudinary.com/ddnsdfd5l/image/upload/v1738589833/ingredients/nor1trldvhw7q6qn7tas.png',
  },
  {
    name: 'Meatballs',
    price: 79,
    imageUrl:
      'https://res.cloudinary.com/ddnsdfd5l/image/upload/v1738589833/ingredients/crhlnpz9jo1u1kbva5qk.png',
  },
].map((ingredient, index) => ({ ...ingredient, id: index + 1 }));

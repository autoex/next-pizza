export const categories = [
  { name: 'Pizzas' },
  { name: 'Combos' },
  { name: 'Snacks' },
  { name: 'Cocktails' },
  { name: 'Coffee' },
  { name: 'Drinks' },
  { name: 'Desserts' },
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


export const products = [
  {
    name: 'Omelet with ham and mushrooms',
    imageUrl: 'https://res.cloudinary.com/ddnsdfd5l/image/upload/v1738658024/11EE7970321044479C1D1085457A36EB_e6pz9t.webp',
    categoryId: 2,
  },
  {
    name: 'Omelet with pepperoni',
    imageUrl: 'https://res.cloudinary.com/ddnsdfd5l/image/upload/v1738658024/11EE94ECF33B0C46BA410DEC1B1DD6F8_avggdf.webp',
    categoryId: 2,
  },
  {
    name: 'Latte Coffee',
    imageUrl: 'https://res.cloudinary.com/ddnsdfd5l/image/upload/v1738658019/11EE7D61B0C26A3F85D97A78FEEE00AD_1_jgf07w.webp',
    categoryId: 2,
  },
  {
    name: 'Denwich with ham and cheese',
    imageUrl: 'https://res.cloudinary.com/ddnsdfd5l/image/upload/v1738658024/11EE796FF0059B799A17F57A9E64C725_vzvpyj.webp',
    categoryId: 3,
  },
  {
    name: 'Chicken Nuggets',
    imageUrl: 'https://res.cloudinary.com/ddnsdfd5l/image/upload/v1738658024/11EE7D618B5C7EC29350069AE9532C6E_iqptlj.webp',
    categoryId: 3,
  },
  {
    name: 'Baked Potatoes with Sauce 🌱',
    imageUrl: 'https://res.cloudinary.com/ddnsdfd5l/image/upload/v1738658024/11EED646A9CD324C962C6BEA78124F19_wrb2cc.webp',
    categoryId: 3,
  },
  {
    name: 'Dodster',
    imageUrl: 'https://res.cloudinary.com/ddnsdfd5l/image/upload/v1738658024/11EE796F96D11392A2F6DD73599921B9_wbonit.webp',
    categoryId: 3,
  },
  {
    name: 'Spicy Dodster 🌶️🌶️',
    imageUrl: 'https://res.cloudinary.com/ddnsdfd5l/image/upload/v1738658020/11EE796FD3B594068F7A752DF8161D04_yr8yob.webp',
    categoryId: 3,
  },
  {
    name: 'Banana Milkshake',
    imageUrl: 'https://res.cloudinary.com/ddnsdfd5l/image/upload/v1738658020/11EEE20B8772A72A9B60CFB20012C185_bbqgbu.webp',
    categoryId: 4,
  },
  {
    name: 'Caramel Apple Milkshake',
    imageUrl: 'https://res.cloudinary.com/ddnsdfd5l/image/upload/v1738658020/11EE79702E2A22E693D96133906FB1B8_kodc4p.webp',
    categoryId: 4,
  },
  {
    name: 'Milkshake with Oreo Cookies',
    imageUrl: 'https://res.cloudinary.com/ddnsdfd5l/image/upload/v1738658020/11EE796FA1F50F8F8111A399E4C1A1E3_rqdszs.webp',
    categoryId: 4,
  },
  {
    name: 'Classic Milkshake 👶',
    imageUrl: 'https://res.cloudinary.com/ddnsdfd5l/image/upload/v1738658020/11EE796F93FB126693F96CB1D3E403FB_y6ryxp.webp',
    categoryId: 4,
  },
  {
    name: 'Irish Cappuccino',
    imageUrl: 'https://res.cloudinary.com/ddnsdfd5l/image/upload/v1738658020/11EE7D61999EBDA59C10E216430A6093_hogmqk.webp',
    categoryId: 5,
  },
  {
    name: 'Caramel Cappuccino Coffee',
    imageUrl: 'https://res.cloudinary.com/ddnsdfd5l/image/upload/v1738658020/11EE7D61AED6B6D4BFDAD4E58D76CF56_dk0p3m.webp',
    categoryId: 5,
  },
  {
    name: 'Coconut Latte Coffee',
    imageUrl: 'https://res.cloudinary.com/ddnsdfd5l/image/upload/v1738658020/11EE7D61B19FA07090EE88B0ED347F42_uvazqv.webp',
    categoryId: 5,
  },
  {
    name: 'Americano Coffee',
    imageUrl: 'https://res.cloudinary.com/ddnsdfd5l/image/upload/v1738658020/11EE7D61B044583596548A59078BBD33_hdqz9e.webp',
    categoryId: 5,
  },
  {
    name: 'Latte Coffee',
    imageUrl: 'https://res.cloudinary.com/ddnsdfd5l/image/upload/v1738658019/11EE7D61B0C26A3F85D97A78FEEE00AD_1_jgf07w.webp',
    categoryId: 5,
  },
];

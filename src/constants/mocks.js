// export const categories = [
//   {
//     id: 'plants',
//     name: 'Plants',
//     tags: ['products', 'inspirations'],
//     count: 147,
//     image: require('../assets/icons/plants.png')
//   },
//   {
//     id: 'seeds',
//     name: 'Seeds',
//     tags: ['products', 'shop'],
//     count: 16,
//     image: require('../assets/icons/seeds.png')
//   },
//   {
//     id: 'flowers',
//     name: 'Flowers',
//     tags: ['products', 'inspirations'],
//     count: 68,
//     image: require('../assets/icons/flowers.png')
//   },
//   {
//     id: 'sprayers',
//     name: 'Sprayers',
//     tags: ['products', 'shop'],
//     count: 17,
//     image: require('../assets/icons/sprayers.png')
//   },
//   {
//     id: 'pots',
//     name: 'Pots',
//     tags: ['products', 'shop'],
//     count: 47,
//     image: require('../assets/icons/pots.png')
//   },
//   {
//     id: 'fertilizers',
//     name: 'fertilizers',
//     tags: ['products', 'shop'],
//     count: 47,
//     image: require('../assets/icons/fertilizers.png')
//   },
// ];

export const bars = [
  {
    id: 1,
    name: 'Kultowa',
    description: 'Dobry pub do odpoczynku ze znajmoymi po cięzkiej pracy',
    tags: ['Good price', 'A lot of people', 'Vodka'],
    mark: '4.6',
    barOpen: '10:00 - 4:00',
    nazwaDrinka: 'Wodka z cola',
    iconMockPop: require('../assets/icons/beer.png'),
    images: [
      {image: require('../assets/images/alko1.jpg'), id : '101'},
      {image: require('../assets/images/alko2.jpg'), id : '202'},
      {image: require('../assets/images/alko3.jpg'), id : '303'},
      {image: require('../assets/images/alko4.jpg'), id : '404'},
      {image: require('../assets/images/alko5.jpg'), id : '505'},
    ]
  }
];

export const comments = [
  {
    id: 1,
    defaultPhoto: require('../assets/icons/userDefaultPhoto.png'),
    name: 'Janek',
    comment: [
      "Fajna",
      "Dlaczego tak drogo ?",
      "Co tak drogo ?",
    ]
  }
];

// export const explore = [
//   // images
//   require('../assets/images/explore_1.png'),
//   require('../assets/images/explore_2.png'),
//   require('../assets/images/explore_3.png'),
//   require('../assets/images/explore_4.png'),
//   require('../assets/images/explore_5.png'),
//   require('../assets/images/explore_6.png'),
// ];

export const profile = {
  username: 'react-ui-kit',
  location: 'Europe',
  email: 'contact@react-ui-kit.com',
  // avatar: require('../assets/images/avatar.png'),
  budget: 1000,
  monthly_cap: 5000,
  notifications: true,
  newsletter: false,
};

// export {
//   categories,
//   explore,
//   products,
//   profile,
// }
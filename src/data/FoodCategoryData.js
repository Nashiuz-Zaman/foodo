//image sources
import pizzasImage from '../assets/pizzas.webp';
import burgersImage from '../assets/burgers.webp';
import soupsImage from '../assets/soups.webp';

export const foodCategories = [
  {
    id: 0,
    imageSource: pizzasImage,
    title: 'Pizzas',
    linkFor: 'hashed',
    toUrl: '#pizzas',
  },
  {
    id: 1,
    imageSource: burgersImage,
    title: 'Burgers',
    linkFor: 'hashed',
    toUrl: '#burgers',
  },
  {
    id: 2,
    imageSource: soupsImage,
    title: 'Soups',
    linkFor: 'hashed',
    toUrl: '#soups',
  },
];

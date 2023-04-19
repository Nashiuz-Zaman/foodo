//image sources
import pizzasImage from '../assets/pizzas.webp';
import burgersImage from '../assets/burgers.webp';
import soupsImage from '../assets/soups.webp';
import pizzaicon from '../assets/pizzaicon.webp';
import burgericon from '../assets/burgericon.webp';
import soupicon from '../assets/soupicon.webp';

export const foodCategories = [
  {
    id: 0,
    imageSource: pizzasImage,
    title: 'pizzas',
    linkFor: 'hashed',
    toUrl: 'menu#pizzas',
    icon: pizzaicon,
  },
  {
    id: 1,
    imageSource: burgersImage,
    title: 'burgers',
    linkFor: 'hashed',
    toUrl: 'menu#burgers',
    icon: burgericon,
  },
  {
    id: 2,
    imageSource: soupsImage,
    title: 'soups',
    linkFor: 'hashed',
    toUrl: 'menu#soups',
    icon: soupicon,
  },
];

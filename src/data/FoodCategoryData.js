//image sources
import pizzaMenuTitleImage from '../assets/menuTitleImages/pizzamenu.webp';
import burgerMenuTitleImage from '../assets/menuTitleImages/burgermenu.webp';
import steakMenuTitleImage from '../assets/menuTitleImages/steakmenu.webp';
import soupMenuTitleImage from '../assets/menuTitleImages/soupmenu.webp';

export const foodCategories = [
  {
    id: 0,
    title: 'pizzas',
    linkFor: 'hashed',
    toUrl: 'menu#pizzas',
    imageSource: pizzaMenuTitleImage,
  },
  {
    id: 1,
    title: 'burgers',
    linkFor: 'hashed',
    toUrl: 'menu#burgers',
    imageSource: burgerMenuTitleImage,
  },
  {
    id: 2,
    title: 'steaks',
    linkFor: 'hashed',
    toUrl: 'menu#steaks',
    imageSource: steakMenuTitleImage,
  },
  {
    id: 3,
    title: 'soups',
    linkFor: 'hashed',
    toUrl: 'menu#soups',
    imageSource: soupMenuTitleImage,
  },
];

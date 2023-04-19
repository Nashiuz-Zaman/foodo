import orderImage from '../assets/order.webp';
import payImage from '../assets/pay.webp';
import deliveryImage from '../assets/delivery.webp';

export const howItWorksData = [
  {
    id: 0,
    heading: 'Choose your order',
    imageSource: orderImage,
    description:
      'Sit amet consectetur adipisicing elit. Dicta, nesciunt. Dolores enim molestiae officiis quaerat maiores quae.',
    reverseStyle: false,
  },
  {
    id: 1,
    heading: 'Pay for your order',
    imageSource: payImage,
    description:
      'Adipisicing elit. Animi et, quidem and expedita eos minus repudiandae, et reiciendis vero reprehenderit.',
    reverseStyle: true,
  },
  {
    id: 2,
    heading: 'Receive your order',
    imageSource: deliveryImage,
    description:
      ' Ollitia molesias laborum amet ratione, quos enim et architecto, quia impedit pariatur blanditiis sint.',
    reverseStyle: false,
  },
];

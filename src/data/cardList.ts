import SedanIcon from '../assets/icons/icon-sedans.svg';
import SuvIcon from '../assets/icons/icon-suvs.svg';
import LuxuryIcon from '../assets/icons/icon-luxury.svg';

export const cards = [
    {
      title: 'Sedans',
      description: `Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.`,
      icon: SedanIcon,
      color: 'bg-(--sedan-card-color)',
      textColor: 'text-(--sedan-card-color)',
    },
    {
      title: 'SUVs',
      description: `Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.`,
      icon: SuvIcon,
      color: 'bg-(--suv-card-color)',
      textColor: 'text-(--suv-card-color)',
    },
    {
      title: 'Luxury',
      description: `Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.`,
      icon: LuxuryIcon,
      color: 'bg-(--luxury-card-color)',
      textColor: 'text-(--luxury-card-color)',
    },
  ]
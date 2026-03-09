import carouselData from '../data/carousel.json';

export interface CarouselItem {
  title: string;
  posterUrl?: string;
}

export const CAROUSEL_ITEMS: CarouselItem[] = carouselData;

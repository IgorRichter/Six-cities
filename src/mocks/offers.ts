
import { Offer, OffersNearby } from '../types/offer';

export const Offers: Offer[] = [
  {
    id: '1',
    title: 'Beautiful &amp; luxurious apartment at great location',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    previewPictureURL: 'img/apartment-01.jpg',
    pictures: [
      { id: 1, url: 'img/apartment-01.jpg' },
      { id: 2, url: 'img/room.jpg' },
      { id: 3, url: 'img/apartment-02.jpg' },
      { id: 4, url: 'img/apartment-03.jpg' },
      { id: 5, url: 'img/room.jpg' },
      { id: 6, url: 'img/room.jpg' },
    ],
    type: 'Apartment',
    city: {
      name: 'Amsterdam',
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 12,
    },
    location: {
      title: 'Beautiful &amp; luxurious apartment at great location',
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 12,
    },
    price: 120,
    rating: 4,
    bedroomCount: 2,
    maxGuestCount: 5,
    isPremium: true,
    isFavorite: false,
    host: {
      avatarURL: 'img/avatar-angelina.jpg',
      name: 'Angelina',
      isPro: true
    }
  },
  {
    id: '2',
    title: 'Wood and stone place',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    previewPictureURL: 'img/room.jpg',
    pictures: [
      { id: 1, url: 'img/apartment-01.jpg' },
      { id: 2, url: 'img/room.jpg' },
      { id: 3, url: 'img/apartment-02.jpg' },
      { id: 4, url: 'img/apartment-03.jpg' },
      { id: 5, url: 'img/room.jpg' },
      { id: 6, url: 'img/room.jpg' },
    ],
    type: 'Room',
    city: {
      name: 'Amsterdam',
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 12,
    },
    location: {
      title: 'Wood and stone place',
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 12,
    },
    price: 50,
    rating: 3.1,
    bedroomCount: 1,
    maxGuestCount: 3,
    isPremium: false,
    isFavorite: false,
    host: {
      avatarURL: 'img/avatar-angelina.jpg',
      name: 'Angelina',
      isPro: true
    }
  },
  {
    id: '3',
    title: 'Canal View Prinsengracht',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    previewPictureURL: 'img/apartment-02.jpg',
    pictures: [
      { id: 1, url: 'img/apartment-01.jpg' },
      { id: 2, url: 'img/room.jpg' },
      { id: 3, url: 'img/apartment-02.jpg' },
      { id: 4, url: 'img/apartment-03.jpg' },
      { id: 5, url: 'img/room.jpg' },
      { id: 6, url: 'img/room.jpg' },
    ],
    type: 'Apartment',
    city: {
      name: 'Amsterdam',
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 12,
    },
    location: {
      title: 'Canal View Prinsengracht',
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 12,
    },
    price: 80,
    rating: 3.6,
    bedroomCount: 1,
    maxGuestCount: 4,
    isPremium: false,
    isFavorite: false,
    host: {
      avatarURL: 'img/avatar-angelina.jpg',
      name: 'Angelina',
      isPro: true
    }
  },
  {
    id: '4',
    title: 'Nice, cozy, warm big bed apartment',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    previewPictureURL: 'img/apartment-03.jpg',
    pictures: [
      { id: 1, url: 'img/apartment-01.jpg' },
      { id: 2, url: 'img/room.jpg' },
      { id: 3, url: 'img/apartment-02.jpg' },
      { id: 4, url: 'img/apartment-03.jpg' },
      { id: 5, url: 'img/room.jpg' },
      { id: 6, url: 'img/room.jpg' },
    ],
    type: 'Apartment',
    city: {
      name: 'Amsterdam',
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 12,
    },
    location: {
      title: 'Nice, cozy, warm big bed apartment',
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 12,
    },
    price: 100,
    rating: 5,
    bedroomCount: 2,
    maxGuestCount: 6,
    isPremium: true,
    isFavorite: false,
    host: {
      avatarURL: 'img/avatar-angelina.jpg',
      name: 'Angelina',
      isPro: true
    }
  },
  {
    id: '5',
    title: 'Nice, cozy, warm big bed apartment',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    previewPictureURL: 'img/apartment-03.jpg',
    pictures: [
      { id: 1, url: 'img/apartment-01.jpg' },
      { id: 2, url: 'img/room.jpg' },
      { id: 3, url: 'img/apartment-02.jpg' },
      { id: 4, url: 'img/apartment-03.jpg' },
      { id: 5, url: 'img/room.jpg' },
      { id: 6, url: 'img/room.jpg' },
    ],
    type: 'Apartment',
    city: {
      name: 'Paris',
      latitude: 48.8566,
      longitude: 2.3522,
      zoom: 12,
    },
    location: {
      title: 'Nice, cozy, warm big bed apartment',
      latitude: 48.8566,
      longitude: 2.3522,
      zoom: 12,
    },
    price: 100,
    rating: 5,
    bedroomCount: 2,
    maxGuestCount: 6,
    isPremium: true,
    isFavorite: false,
    host: {
      avatarURL: 'img/avatar-angelina.jpg',
      name: 'Angelina',
      isPro: true
    }
  }
];

export const NearbyOffers: OffersNearby[] = [
  {
    id: '1',
    offers: [
      Offers[0],
      Offers[1],
      Offers[2],
      Offers[3]
    ],
  },
  {
    id: '2',
    offers: [
      Offers[0],
      Offers[1],
      Offers[2],
      Offers[3]
    ],
  },
  {
    id: '3',
    offers: [
      Offers[0],
      Offers[1],
      Offers[2],
      Offers[3]
    ],
  },
  {
    id: '4',
    offers: [
      Offers[0],
      Offers[1],
      Offers[2],
      Offers[3]
    ],
  },
  {
    id: '5',
    offers: [
      Offers[0],
      Offers[1],
      Offers[2],
      Offers[3]
    ],
  },
];

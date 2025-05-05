import { Image } from '@/types/common'

interface User {
	name: string
	email: string
	avatar: Image
}

interface Review {
	review: string
	image?: Image
	createdAt: string
	user: User
}

export const reviews: Review[] = [
  {
    review: 'Barnomala Architect & Interior transformed my living room into a masterpiece. Their attention to detail and creativity are unmatched. Highly recommended!',
    image: {
      public_id: 'living-room-id',
      secure_url: '/images/reviews/living-room.jpg',
    },
    createdAt: new Date().toISOString(),
    user: {
      name: 'Alice Johnson',
      avatar: {
        public_id: 'alice-avatar-id',
        secure_url: '/images/user/default.jpg',
      },
      email: 'alice.johnson@example.com',
    },
  },
  {
    review: 'I am thrilled with the kitchen renovation done by Barnomala. The team was professional and delivered exactly what I envisioned!',
    image: {
      public_id: 'kitchen-id',
      secure_url: '/images/reviews/kitchen.jpg',
    },
    createdAt: new Date().toISOString(),
    user: {
      name: 'Bob Smith',
      avatar: {
        public_id: 'bob-avatar-id',
        secure_url: '/images/user/bob.jpg',
      },
      email: 'bob.smith@example.com',
    },
  },
  {
    review: 'The office redesign exceeded my expectations. Barnomala’s team is talented and very easy to work with. I highly recommend them!',
    image: {
      public_id: 'office-id',
      secure_url: '/images/reviews/office.jpg',
    },
    createdAt: new Date().toISOString(),
    user: {
      name: 'Charlie Brown',
      avatar: {
        public_id: 'charlie-avatar-id',
        secure_url: '/images/user/charlie.jpg',
      },
      email: 'charlie.brown@example.com',
    },
  },
  {
    review: 'Great service and amazing designs! The team was very responsive and made sure everything was perfect. Thank you, Barnomala!',
    image: {
      public_id: 'bedroom-id',
      secure_url: '/images/reviews/bedroom.jpg',
    },
    createdAt: new Date().toISOString(),
    user: {
      name: 'Diana Prince',
      avatar: {
        public_id: 'diana-avatar-id',
        secure_url: '/images/user/diana.jpg',
      },
      email: 'diana.prince@example.com',
    },
  },
  {
    review: 'Barnomala Architect & Interior turned my dream home into a reality. I couldn’t be happier with the results!',
    image: {
      public_id: 'dream-home-id',
      secure_url: '/images/reviews/dream-home.jpg',
    },
    createdAt: new Date().toISOString(),
    user: {
      name: 'Ethan Hunt',
      avatar: {
        public_id: 'ethan-avatar-id',
        secure_url: '/images/user/ethan.jpg',
      },
      email: 'ethan.hunt@example.com',
    },
  },
]
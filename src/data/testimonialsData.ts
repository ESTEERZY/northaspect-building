export interface Testimonial {
  id: string;
  author: string;
  initials: string;
  location: string;
  postcode?: string;
  relationshipDuration: string;
  projectType: string;
  rating: number;
  quote: string;
  badge: string;
  verified: boolean;
}

export const VERIFIED_TESTIMONIALS: Testimonial[] = [
  {
    id: 'testimonial-01',
    author: 'David',
    initials: 'D',
    location: 'Sydney, NSW',
    relationshipDuration: '20+ Year Client',
    projectType: 'Water & Damp Remedial',
    rating: 5,
    quote: 'Chris and the team at Aspect North Building have been our builders for some 20 years. We have been more than happy with the services he has supplied. His ability to solve problems with water and damp started our relationship. Having various builders before unable to find solutions, Chris identified and solved the issues. We have used him ever since.',
    badge: '20+ Year Client & Remedial Specialist',
    verified: true,
  },
  {
    id: 'testimonial-02',
    author: 'Helen & Steve',
    initials: 'H&S',
    location: 'Sydney, NSW',
    relationshipDuration: 'Verified Client',
    projectType: 'Home Extension',
    rating: 5,
    quote: 'I would highly recommend Chris and his team. We had an extension on a difficult plot, which they negotiated efficiently. When problems arose, they were overcome in a good manner. Their craftsmanship exceeded our expectations, and they were clean and courteous throughout the build.',
    badge: 'Difficult Site Extension',
    verified: true,
  },
  {
    id: 'testimonial-03',
    author: 'Nicole & Gavin',
    initials: 'N&G',
    location: 'Collaroy Plateau, NSW',
    postcode: '2097',
    relationshipDuration: 'Verified Client',
    projectType: 'Internal Alterations & Open Plan Living',
    rating: 5,
    quote: 'We engaged Chris on recommendation of our friends, and we were more than happy with the outcome of our internal alterations. The kitchen, lounge and dining room changes have improved our lifestyle, with the added light from the new doors and windows. The Aspect North team were well mannered and considerate of our family. We are happy and confident to highly recommend him.',
    badge: 'Collaroy Plateau Renovation',
    verified: true,
  },
  {
    id: 'testimonial-04',
    author: 'Berni & Sam',
    initials: 'B&S',
    location: 'Narrabeen, NSW',
    postcode: '2101',
    relationshipDuration: 'Verified Client',
    projectType: 'Home Extension',
    rating: 5,
    quote: 'Aspect North transformed our home with a beautiful extension. Chris was professional, honest, and easy to deal with from start to finish. Fantastic quality and a great result.',
    badge: 'Narrabeen Home Extension',
    verified: true,
  },
  {
    id: 'testimonial-05',
    author: 'David & Jessie',
    initials: 'D&J',
    location: 'Frenchs Forest, NSW',
    postcode: '2086',
    relationshipDuration: 'Verified Client',
    projectType: 'Bathroom Renovation & Remedial',
    rating: 5,
    quote: 'Our bathroom needed a lot of work, and we were worried about hiring the wrong builder. We\'re so glad we found Aspect North. As work progressed, several hidden problems were uncovered, but Chris fixed every issue without hesitation. His workmanship was excellent, and the finished bathroom looks amazing. Our family is grateful.',
    badge: 'Frenchs Forest Bathroom Remodel',
    verified: true,
  },
];

import bokongImage from '../photos/Bokong Nature Reserve.jpg';
import katseDamImage from '../photos/Katse Dam.jpg';
import liphofungImage from '../photos/Liphofung Cave.jpg';
import maletsunyaneImage from '../photos/Maletsunyane Fall.jpg';
import morijaImage from '../photos/Morija  Meseums.jpg';
import saniPassImage from '../photos/Sani pass.jpg';
import sehlabathebeImage from '../photos/Sehlabathebe National Park.jpg';
import thabaBosiuImage from '../photos/Thaba Bosiu Village.jpg';

export const attractions = [
  {
    id: 'maletsunyane-falls', name: 'Maletsunyane Falls',
    image: maletsunyaneImage, imageAlt: 'Water plunging from a high cliff into a mountain gorge',
    location: 'Semonkong, Maseru District', category: 'Waterfall',
    description: 'Feel the mountain air at one of Southern Africa’s highest single-drop waterfalls, tumbling into a deep basalt gorge.',
    details: 'The falls are reached from Semonkong, a highland town whose name means “Place of Smoke”. Take time to meet local guides and explore the surrounding valleys at a slower pace.',
    activities: ['Waterfall viewpoints', 'Guided hiking', 'Pony trekking', 'Abseiling'], estimatedCost: 'From M50 per person',
  },
  {
    id: 'thaba-bosiu', name: 'Thaba Bosiu Cultural Village',
    image: thabaBosiuImage, imageAlt: 'A high mountain ridge under a clear evening sky',
    location: 'Maseru District', category: 'Heritage & culture',
    description: 'Walk the sandstone plateau that became a refuge and stronghold for King Moshoeshoe I and the Basotho nation.',
    details: 'A local guide brings the history of the mountain to life, from the founding of the Basotho nation to the stories, customs and craftsmanship of the people who call Lesotho home.',
    activities: ['Guided heritage walks', 'Cultural village visit', 'Basotho crafts', 'Traditional storytelling'], estimatedCost: 'From M80 per person',
  },
  {
    id: 'katse-dam', name: 'Katse Dam',
    image: katseDamImage, imageAlt: 'Mountain lake surrounded by steep highland peaks',
    location: 'Thaba-Tseka District', category: 'Dam & engineering',
    description: 'See a remarkable feat of engineering set among the deep valleys and clear waters of the Maluti Mountains.',
    details: 'Part of the Lesotho Highlands Water Project, Katse Dam offers a striking look at how the highlands connect people and water across Southern Africa. Check tour availability before travelling.',
    activities: ['Dam wall tour', 'Scenic drives', 'Boat excursions', 'Fishing'], estimatedCost: 'From M150 per person',
  },
  {
    id: 'sehlabathebe', name: 'Sehlabathebe National Park',
    image: sehlabathebeImage, imageAlt: 'Wild open landscape in a protected mountain wilderness',
    location: 'Qacha’s Nek District', category: 'National park',
    description: 'Find a quiet wilderness of alpine grasslands, sandstone formations, clear pools and ancient rock art.',
    details: 'Lesotho’s first national park forms part of the Maloti-Drakensberg Park World Heritage Site. Its remote setting rewards visitors who come prepared and allow time for the journey.',
    activities: ['Day hikes', 'Rock art viewing', 'Birdwatching', 'Camping'], estimatedCost: 'From M100 per person',
  },
  {
    id: 'sani-pass', name: 'Sani Pass',
    image: saniPassImage, imageAlt: 'A dramatic mountain pass surrounded by rugged peaks',
    location: 'Mokhotlong District', category: 'Mountain adventure',
    description: 'Climb a legendary mountain route through switchbacks, high-altitude views and the dramatic roof of southern Africa.',
    details: 'Sani Pass is a challenging high-mountain route connecting Lesotho and South Africa. Conditions change quickly and the pass is generally best explored with an experienced 4x4 guide.',
    activities: ['4x4 mountain tour', 'Scenic photography', 'Highland village visit', 'Birdwatching'], estimatedCost: 'From M500 per guided tour',
  },
  {
    id: 'bokong', name: 'Bokong Nature Reserve',
    image: bokongImage, imageAlt: 'A highland plateau opening onto a broad mountain valley',
    location: 'Thaba-Tseka District', category: 'Nature reserve',
    description: 'Pause above the clouds in one of Africa’s highest nature reserves, with wide-open views over the Maluti range.',
    details: 'Bokong protects a rare high-altitude wetland and is known for the Lepaqoa waterfall, which can freeze into a dramatic column in winter.',
    activities: ['Lepaqoa waterfall walk', 'Birdwatching', 'Fly fishing', 'Scenic viewpoints'], estimatedCost: 'From M80 per person',
  },
  {
    id: 'liphofung', name: 'Liphofung Cave Cultural Site',
    image: liphofungImage, imageAlt: 'A sheltered rock overhang above a green mountain valley',
    location: 'Butha-Buthe District', category: 'Heritage & culture',
    description: 'Step into a sandstone shelter where San rock art and living Basotho heritage share an extraordinary mountain setting.',
    details: 'Liphofung means “Place of the Eland”. This cultural and historical site offers a window into the long history of the highlands and the people who have travelled through them.',
    activities: ['Rock art visit', 'Guided interpretation', 'Cultural exhibits', 'Short nature walks'], estimatedCost: 'From M50 per person',
  },
  {
    id: 'morija', name: 'Morija Museum & Archives',
    image: morijaImage, imageAlt: 'A historic museum building set among trees',
    location: 'Morija, Maseru District', category: 'Museum & history',
    description: 'Discover Basotho history, art and natural heritage in one of the country’s best-loved cultural centres.',
    details: 'Founded in 1956, Morija Museum preserves collections that trace Lesotho’s past and present. The nearby village is also known for its craft shops and annual arts and culture festival.',
    activities: ['Museum galleries', 'Archive collections', 'Village walks', 'Arts and crafts'], estimatedCost: 'From M30 per person',
  },
];
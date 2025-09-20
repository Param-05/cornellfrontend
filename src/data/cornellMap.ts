// import { Building } from '../types';

// export const CORNELL_BUILDINGS: Building[] = [
//   {
//     id: 'mcgraw-tower',
//     name: 'McGraw Tower',
//     position: { x: 400, y: 250 },
//     width: 32,
//     height: 48,
//     color: '#8B4513',
//     description: 'Iconic Cornell bell tower with chimes',
//     type: 'tower'
//   },
//   {
//     id: 'uris-library',
//     name: 'Uris Library',
//     position: { x: 350, y: 280 },
//     width: 64,
//     height: 40,
//     color: '#CD853F',
//     description: 'Main undergraduate library',
//     type: 'library'
//   },
//   {
//     id: 'willard-straight',
//     name: 'Willard Straight Hall',
//     position: { x: 480, y: 220 },
//     width: 56,
//     height: 40,
//     color: '#D2691E',
//     description: 'Student union building',
//     type: 'building'
//   },
//   {
//     id: 'day-hall',
//     name: 'Day Hall',
//     position: { x: 300, y: 200 },
//     width: 48,
//     height: 32,
//     color: '#B31B1B',
//     description: 'University administration',
//     type: 'building'
//   },
//   {
//     id: 'olin-hall',
//     name: 'Olin Hall',
//     position: { x: 200, y: 320 },
//     width: 56,
//     height: 40,
//     color: '#4682B4',
//     description: 'Chemical Engineering',
//     type: 'building'
//   },
//   {
//     id: 'carpenter-hall',
//     name: 'Carpenter Hall',
//     position: { x: 280, y: 340 },
//     width: 56,
//     height: 40,
//     color: '#4682B4',
//     description: 'Engineering Library',
//     type: 'building'
//   },
//   {
//     id: 'bailey-hall',
//     name: 'Bailey Hall',
//     position: { x: 450, y: 300 },
//     width: 64,
//     height: 48,
//     color: '#8B4513',
//     description: 'Concert hall and auditorium',
//     type: 'building'
//   },
//   {
//     id: 'goldwin-smith',
//     name: 'Goldwin Smith Hall',
//     position: { x: 380, y: 180 },
//     width: 72,
//     height: 40,
//     color: '#CD853F',
//     description: 'Arts and Sciences',
//     type: 'building'
//   },
//   {
//     id: 'sage-hall',
//     name: 'Sage Hall',
//     position: { x: 520, y: 280 },
//     width: 48,
//     height: 40,
//     color: '#8B4513',
//     description: 'Philosophy Department',
//     type: 'building'
//   },
//   {
//     id: 'cornell-store',
//     name: 'Cornell Store',
//     position: { x: 450, y: 180 },
//     width: 40,
//     height: 32,
//     color: '#B31B1B',
//     description: 'Campus bookstore',
//     type: 'building'
//   }
// ];

// export const TREES = [
//   { x: 150, y: 180 },
//   { x: 250, y: 150 },
//   { x: 580, y: 160 },
//   { x: 650, y: 200 },
//   { x: 160, y: 360 },
//   { x: 580, y: 340 },
//   { x: 680, y: 300 },
//   { x: 120, y: 250 },
//   { x: 720, y: 220 },
//   { x: 320, y: 380 },
//   { x: 500, y: 120 },
//   { x: 180, y: 120 }
// ];

// export const PATHS = [
//   // Horizontal paths
//   { x: 50, y: 240, width: 700, height: 12 },
//   { x: 100, y: 320, width: 600, height: 12 },
//   { x: 200, y: 180, width: 400, height: 12 },
//   // Vertical paths
//   { x: 400, y: 50, width: 12, height: 400 },
//   { x: 280, y: 150, width: 12, height: 250 },
//   { x: 480, y: 120, width: 12, height: 200 }
// ];

// export const MAP_BOUNDS = {
//   width: 800,
//   height: 500,
//   minX: 20,
//   minY: 20,
//   maxX: 780,
//   maxY: 480
// };

import { Building } from '../types';

export const CORNELL_BUILDINGS: Building[] = [
  {
    id: 'goldwin-smith',
    name: 'Goldwin Smith Hall',
    position: { x: 420, y: 380 },
    width: 72,
    height: 44,
    color: '#CD853F',
    description: 'College of Arts & Sciences (Humanities, English, Philosophy)',
    type: 'building',
  },
  {
    id: 'uris-hall',
    name: 'Uris Hall',
    position: { x: 440, y: 280 },
    width: 64,
    height: 40,
    color: '#B31B1B',
    description: 'Social Sciences (Sociology, Economics, Government)',
    type: 'building',
  },
  {
    id: 'white-hall',
    name: 'White Hall',
    position: { x: 160, y: 190 },
    width: 56,
    height: 36,
    color: '#B31B1B',
    description: 'Philosophy & Classics',
    type: 'building',
  },
  {
    id: 'lincoln-hall',
    name: 'Lincoln Hall',
    position: { x: 600, y: 160 },   
    width: 56,
    height: 36,
    color: '#B31B1B',
    description: 'Music & Performing Arts',
    type: 'building',
  },
  {
    id: 'mcgraw-hall',
    name: 'McGraw Hall',
    position: { x: 300, y: 300 },
    width: 64,
    height: 40,
    color: '#B31B1B',
    description: 'History & Anthropology',
    type: 'building',
  },
  {
    id: 'olin-library',
    name: 'Olin Library',
    position: { x: 370, y: 530 },
    width: 72,
    height: 48,
    color: '#8B8B8B',
    description: 'Knowledge hub (agents guarding “universal clues”)',
    type: 'library',
  },
  {
    id: 'uris-library-clock',
    name: 'Uris Library & Clocktower',
    position: { x: 220, y: 650 },
    width: 72,
    height: 48,
    color: '#8B8B8B',
    description: 'Iconic time-based puzzle location',
    type: 'library',
  },
  {
    id: 'baker-lab',
    name: 'Baker Laboratory',
    position: { x: 900, y: 170 },
    width: 72,
    height: 48,
    color: '#2C7A7B',
    description: 'Chemistry (Science sector)',
    type: 'building',
  },
  {
    id: 'space-sciences',
    name: 'Space Sciences Building',
    position: { x: 850, y: 400 },
    width: 72,
    height: 48,
    color: '#2C5282',
    description: 'Astronomy & Physics sector',
    type: 'building',
  },
  {
    id: 'statler-hall',
    name: 'Statler Hall',
    position: { x: 900, y: 600 },
    width: 80,
    height: 52,
    color: '#B7791F',
    description: 'Business & Hospitality (applied problem-solving)',
    type: 'building',
  },
];

export const TREES = [
  { x: 150, y: 180 }, { x: 250, y: 150 }, { x: 580, y: 160 }, { x: 650, y: 200 },
  { x: 160, y: 360 }, { x: 580, y: 340 }, { x: 680, y: 300 }, { x: 120, y: 250 },
  { x: 720, y: 220 }, { x: 320, y: 380 }, { x: 500, y: 120 }, { x: 180, y: 120 },
];

export const PATHS = [
  // Outer loop (roughly University Ave → Garden Ave → Campus Rd → Libe Slope side)
  { x: 100, y: 140, width: 620, height: 12 },  // top
  { x: 720, y: 140, width: 12,  height: 292 }, // right
  { x: 100, y: 420, width: 632, height: 12 },  // bottom
  { x: 100, y: 140, width: 12,  height: 292 }, // left

  // Center north–south spine
  { x: 400, y: 160, width: 12, height: 260 },

  // Library strip near Olin/Uris (horizontal)
  { x: 180, y: 320, width: 420, height: 12 },

  // Small U-spur near Uris Hall
  { x: 440, y: 280, width: 172, height: 12 }, // top of U
  { x: 440, y: 280, width: 12,  height: 52 }, // left leg
  { x: 600, y: 280, width: 12,  height: 52 }, // right leg

  // Astronomy courtyard rectangle (near Space Sciences/Baker)
  { x: 520, y: 200, width: 160, height: 10 }, // top
  { x: 680, y: 200, width: 10,  height: 80 }, // right
  { x: 520, y: 270, width: 160, height: 10 }, // bottom
  { x: 520, y: 200, width: 10,  height: 80 }, // left
];

export const MAP_BOUNDS = {
  // width: 800,
  // height: 500,
  width: 1200,
  height: 800,
  minX: 20,
  minY: 20,
  // maxX: 780,
  // maxY: 480,
  maxX: 1180,
  maxY: 780,
};

import type { Category } from '../types/equipment';

export const CATEGORIES: Category[] = [
  {
    id: 'alat-ukur',
    name: 'Alat Ukur Listrik',
    shortName: 'Alat Ukur',
    description:
      'Instrumen untuk membaca besaran listrik seperti tegangan, arus, dan hambatan secara kuantitatif.',
  },
  {
    id: 'alat-uji',
    name: 'Alat Uji & Keselamatan',
    shortName: 'Alat Uji',
    description:
      'Peralatan pemeriksaan cepat untuk mendeteksi keberadaan tegangan fasa dan memastikan keamanan kerja.',
  },
  {
    id: 'perkakas-kerja',
    name: 'Perkakas Kerja & Solder',
    shortName: 'Perkakas Kerja',
    description:
      'Peralatan mekanis berisolasi dan pemanas listrik untuk pembongkaran, penyambungan, serta perbaikan rangkaian.',
  },
];

export const CATEGORY_MAP = Object.fromEntries(
  CATEGORIES.map((category) => [category.id, category])
) as Record<Category['id'], Category>;

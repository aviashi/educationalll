import test from 'node:test';
import assert from 'node:assert/strict';
import {
  countByCategory,
  filterEquipment,
  getEquipmentById,
  getRelatedEquipment,
  isValidCategoryFilter,
} from './equipmentUtils';
import type { Equipment } from '../types/equipment';

const sampleEquipment: Equipment[] = [
  {
    id: 'multimeter-digital',
    name: 'Multimeter Digital',
    subtitle: 'Alat Ukur Besaran Listrik Terpadu',
    categoryId: 'alat-ukur',
    image: '/sample/multimeter.jpg',
    imageAlt: 'Multimeter digital',
    shortDescription: 'Mengukur tegangan AC/DC, arus, dan hambatan listrik.',
    definition: 'Alat ukur elektronik portabel untuk besaran listrik.',
    functions: ['Mengukur tegangan DC', 'Mengukur tegangan AC', 'Mengukur hambatan'],
    components: [{ name: 'Layar LCD', description: 'Menampilkan hasil angka digital.' }],
    workingPrinciple: 'Mengonversi sinyal analog ke sinyal digital via ADC.',
    characteristics: [{ label: 'Tampilan', value: 'LCD Digital' }],
  },
  {
    id: 'test-pen',
    name: 'Test Pen',
    subtitle: 'Detektor Tegangan Fasa',
    categoryId: 'alat-uji',
    image: '/sample/test-pen.jpg',
    imageAlt: 'Test pen listrik',
    shortDescription: 'Mendeteksi ada tidaknya tegangan fasa pada penghantar.',
    definition: 'Alat uji sederhana berbentuk obeng dengan lampu indikator.',
    functions: ['Memeriksa penghantar bertegangan fasa'],
    components: [{ name: 'Lampu Neon', description: 'Menyala saat ada arus fasa.' }],
    workingPrinciple: 'Arus kecil mengalir melalui resistor pembatas dan lampu indikator.',
    characteristics: [{ label: 'Rentang Uji', value: '100V – 250V AC' }],
  },
  {
    id: 'solder-listrik',
    name: 'Solder Listrik',
    subtitle: 'Alat Penyambung Komponen',
    categoryId: 'perkakas-kerja',
    image: '/sample/solder.jpg',
    imageAlt: 'Solder listrik',
    shortDescription: 'Melelehkan timah solder untuk menyambung komponen.',
    definition: 'Peralatan pemanas listrik untuk penyambungan rangkaian.',
    functions: ['Menyambung kaki komponen ke PCB'],
    components: [{ name: 'Elemen Pemanas', description: 'Mengubah energi listrik menjadi panas.' }],
    workingPrinciple: 'Arus listrik memanaskan elemen resistif hingga ujung tembaga panas.',
    characteristics: [{ label: 'Daya Umum', value: '40W – 60W' }],
  },
];

test('filterEquipment mengembalikan semua item saat tanpa filter', () => {
  const result = filterEquipment(sampleEquipment);
  assert.equal(result.length, 3);
});

test('filterEquipment memfilter berdasarkan kategori yang dipilih', () => {
  const result = filterEquipment(sampleEquipment, { categoryId: 'alat-uji' });
  assert.equal(result.length, 1);
  assert.equal(result[0].id, 'test-pen');
});

test('filterEquipment melakukan pencarian case-insensitive pada nama dan komponen', () => {
  const byName = filterEquipment(sampleEquipment, { query: '  SOLDER ' });
  assert.equal(byName.length, 1);
  assert.equal(byName[0].id, 'solder-listrik');

  const byComponent = filterEquipment(sampleEquipment, { query: 'neon' });
  assert.equal(byComponent.length, 1);
  assert.equal(byComponent[0].id, 'test-pen');
});

test('filterEquipment menggabungkan filter kategori dan kata kunci pencarian', () => {
  const result = filterEquipment(sampleEquipment, {
    categoryId: 'alat-ukur',
    query: 'solder',
  });
  assert.equal(result.length, 0);
});

test('countByCategory menghitung jumlah peralatan tiap kategori secara akurat', () => {
  const counts = countByCategory(sampleEquipment);
  assert.deepEqual(counts, {
    semua: 3,
    'alat-ukur': 1,
    'alat-uji': 1,
    'perkakas-kerja': 1,
  });
});

test('getEquipmentById menemukan peralatan atau mengembalikan undefined jika tidak valid', () => {
  assert.equal(getEquipmentById(sampleEquipment, 'multimeter-digital')?.name, 'Multimeter Digital');
  assert.equal(getEquipmentById(sampleEquipment, 'tidak-ada'), undefined);
  assert.equal(getEquipmentById(sampleEquipment, undefined), undefined);
});

test('getRelatedEquipment tidak menyertakan ID yang sedang dibuka', () => {
  const related = getRelatedEquipment(sampleEquipment, 'multimeter-digital', 'alat-ukur', 2);
  assert.equal(related.length, 2);
  assert.ok(related.every((item) => item.id !== 'multimeter-digital'));
});

test('isValidCategoryFilter memvalidasi parameter kategori URL', () => {
  assert.equal(isValidCategoryFilter('semua'), true);
  assert.equal(isValidCategoryFilter('alat-ukur'), true);
  assert.equal(isValidCategoryFilter('kategori-asal'), false);
  assert.equal(isValidCategoryFilter(null), false);
});

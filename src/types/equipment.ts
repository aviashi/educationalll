export type CategoryId = 'alat-ukur' | 'alat-uji' | 'perkakas-kerja';

export interface Category {
  id: CategoryId;
  name: string;
  shortName: string;
  description: string;
}

export interface EquipmentComponentPart {
  name: string;
  description: string;
}

export interface EquipmentCharacteristic {
  label: string;
  value: string;
}

export interface Equipment {
  id: string;
  name: string;
  subtitle: string;
  categoryId: CategoryId;
  image: string;
  imageAlt: string;
  shortDescription: string;
  definition: string;
  functions: string[];
  components: EquipmentComponentPart[];
  workingPrinciple: string;
  characteristics: EquipmentCharacteristic[];
  safetyNote?: string;
  additionalInformation?: string;
}

export interface EquipmentFilterOptions {
  query?: string;
  categoryId?: CategoryId | 'semua';
}

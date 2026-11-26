import type { CategoryId, Equipment, EquipmentFilterOptions } from '../types/equipment';

export function normalizeSearchText(value: string): string {
  return value.trim().toLowerCase();
}

export function filterEquipment(
  items: readonly Equipment[],
  options: EquipmentFilterOptions = {}
): Equipment[] {
  const normalizedQuery = normalizeSearchText(options.query ?? '');
  const activeCategory = options.categoryId ?? 'semua';

  return items.filter((item) => {
    const matchesCategory =
      activeCategory === 'semua' || item.categoryId === activeCategory;

    if (!matchesCategory) {
      return false;
    }

    if (!normalizedQuery) {
      return true;
    }

    const searchableFields = [
      item.name,
      item.subtitle,
      item.shortDescription,
      item.definition,
      ...item.functions,
      ...item.components.map((part) => `${part.name} ${part.description}`),
    ];

    return searchableFields.some((field) =>
      field.toLowerCase().includes(normalizedQuery)
    );
  });
}

export function countByCategory(
  items: readonly Equipment[]
): Record<CategoryId | 'semua', number> {
  const counts: Record<CategoryId | 'semua', number> = {
    semua: items.length,
    'alat-ukur': 0,
    'alat-uji': 0,
    'perkakas-kerja': 0,
  };

  for (const item of items) {
    counts[item.categoryId] += 1;
  }

  return counts;
}

export function getEquipmentById(
  items: readonly Equipment[],
  id: string | undefined
): Equipment | undefined {
  if (!id) {
    return undefined;
  }
  return items.find((item) => item.id === id);
}

export function getRelatedEquipment(
  items: readonly Equipment[],
  currentId: string,
  categoryId: CategoryId,
  limit = 3
): Equipment[] {
  const sameCategory = items.filter(
    (item) => item.id !== currentId && item.categoryId === categoryId
  );

  if (sameCategory.length >= limit) {
    return sameCategory.slice(0, limit);
  }

  const others = items.filter(
    (item) => item.id !== currentId && item.categoryId !== categoryId
  );

  return [...sameCategory, ...others].slice(0, limit);
}

export function isValidCategoryFilter(
  value: string | null | undefined
): value is CategoryId | 'semua' {
  return (
    value === 'semua' ||
    value === 'alat-ukur' ||
    value === 'alat-uji' ||
    value === 'perkakas-kerja'
  );
}

import { useMemo } from 'react';
import { useSearchParams } from 'react-router';
import { EQUIPMENT_DATA } from '@/src/data/equipment';
import {
  countByCategory,
  filterEquipment,
  isValidCategoryFilter,
} from '@/src/lib/equipmentUtils';
import type { CategoryId } from '@/src/types/equipment';

export function useEquipmentFilter() {
  const [searchParams, setSearchParams] = useSearchParams();

  const rawCategory = searchParams.get('kategori');
  const activeCategory: CategoryId | 'semua' = isValidCategoryFilter(rawCategory)
    ? rawCategory
    : 'semua';

  const query = searchParams.get('cari') ?? '';

  const setCategory = (category: CategoryId | 'semua') => {
    const next = new URLSearchParams(searchParams);
    if (category === 'semua') {
      next.delete('kategori');
    } else {
      next.set('kategori', category);
    }
    setSearchParams(next, { replace: true });
  };

  const setQuery = (nextQuery: string) => {
    const next = new URLSearchParams(searchParams);
    if (!nextQuery.trim()) {
      next.delete('cari');
    } else {
      next.set('cari', nextQuery);
    }
    setSearchParams(next, { replace: true });
  };

  const resetFilters = () => {
    setSearchParams({}, { replace: true });
  };

  const filteredEquipment = useMemo(
    () =>
      filterEquipment(EQUIPMENT_DATA, {
        query,
        categoryId: activeCategory,
      }),
    [query, activeCategory]
  );

  const categoryCounts = useMemo(() => countByCategory(EQUIPMENT_DATA), []);

  return {
    query,
    activeCategory,
    filteredEquipment,
    categoryCounts,
    totalCount: EQUIPMENT_DATA.length,
    setCategory,
    setQuery,
    resetFilters,
  };
}

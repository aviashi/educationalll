import { Search, SlidersHorizontal, X } from 'lucide-react';
import { motion } from 'motion/react';
import { pageVariants, staggerGridVariants } from '@/src/animations/variants';
import { EquipmentCard } from '@/src/components/equipment/EquipmentCard';
import { Breadcrumb } from '@/src/components/ui/breadcrumb';
import { Button } from '@/src/components/ui/button';
import { Input } from '@/src/components/ui/input';
import { CATEGORIES } from '@/src/data/categories';
import { useEquipmentFilter } from '@/src/hooks/useEquipmentFilter';
import { cn } from '@/src/lib/utils';
import type { CategoryId } from '@/src/types/equipment';

export function CatalogPage() {
  const {
    query,
    activeCategory,
    filteredEquipment,
    categoryCounts,
    totalCount,
    setCategory,
    setQuery,
    resetFilters,
  } = useEquipmentFilter();

  const filterTabs: Array<{ id: CategoryId | 'semua'; label: string; count: number }> = [
    { id: 'semua', label: 'Semua', count: categoryCounts.semua },
    ...CATEGORIES.map((category) => ({
      id: category.id,
      label: category.shortName,
      count: categoryCounts[category.id],
    })),
  ];

  const hasActiveFilter = query.trim().length > 0 || activeCategory !== 'semua';

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="flex flex-col gap-6"
    >
      <div>
        <Breadcrumb
          items={[
            { label: 'Beranda', to: '/' },
            { label: 'Katalog Peralatan' },
          ]}
        />

        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-[#181C24] sm:text-3xl">
              Katalog Peralatan Listrik
            </h1>
            <p className="mt-1 text-sm text-[#5A6475]">
              Pilih peralatan untuk mempelajari fungsi, komponen penyusun, dan prinsip kerjanya.
            </p>
          </div>
          <p className="text-xs font-medium tabular-nums text-[#5A6475]">
            Menampilkan {filteredEquipment.length} dari {totalCount} peralatan
          </p>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <section
        aria-label="Pencarian dan filter kategori"
        className="flex flex-col gap-3 rounded-xl border border-[#E2E6EC] bg-white p-4 shadow-[0_1px_2px_rgba(15,23,42,0.03)]"
      >
        <div className="relative">
          <label htmlFor="equipment-search" className="sr-only">
            Cari nama peralatan atau komponen
          </label>
          <Search
            className="pointer-events-none absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-[#5A6475]"
            aria-hidden="true"
          />
          <Input
            id="equipment-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Cari alat, fungsi, atau komponen..."
            className="pr-10 pl-10"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              aria-label="Bersihkan pencarian"
              className="absolute top-1/2 right-2 flex min-h-[34px] min-w-[34px] -translate-y-1/2 items-center justify-center rounded-md text-[#5A6475] transition-colors hover:bg-[#EEF1F5] hover:text-[#181C24] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D6FE8] cursor-pointer"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          )}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3">
          <div
            role="group"
            aria-label="Filter berdasarkan kategori"
            className="flex flex-wrap items-center gap-1.5"
          >
            {filterTabs.map((tab) => {
              const isActive = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setCategory(tab.id)}
                  aria-pressed={isActive}
                  className={cn(
                    'inline-flex min-h-[40px] items-center gap-2 rounded-lg px-3.5 py-2 text-xs font-medium whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D6FE8] cursor-pointer',
                    isActive
                      ? 'bg-[#1D6FE8] text-white shadow-[0_1px_2px_rgba(29,111,232,0.25)]'
                      : 'bg-[#F6F7F9] text-[#5A6475] hover:bg-[#EEF1F5] hover:text-[#181C24]'
                  )}
                >
                  <span>{tab.label}</span>
                  <span
                    className={cn(
                      'tabular-nums',
                      isActive ? 'text-white/90' : 'text-[#788296]'
                    )}
                  >
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>

          {hasActiveFilter && (
            <Button
              variant="ghost"
              size="sm"
              onClick={resetFilters}
              className="text-xs text-[#1D6FE8]"
            >
              Atur Ulang Filter
            </Button>
          )}
        </div>
      </section>

      {/* Catalog Grid or Empty State */}
      {filteredEquipment.length > 0 ? (
        <motion.section
          aria-label="Daftar peralatan listrik"
          variants={staggerGridVariants}
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3"
        >
          {filteredEquipment.map((item) => (
            <EquipmentCard key={item.id} equipment={item} />
          ))}
        </motion.section>
      ) : (
        <section
          aria-live="polite"
          className="flex flex-col items-center justify-center rounded-2xl border border-[#E2E6EC] bg-white px-6 py-14 text-center"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EEF1F5] text-[#5A6475]">
            <SlidersHorizontal className="h-5 w-5" aria-hidden="true" />
          </div>
          <h2 className="mt-4 text-base font-semibold text-[#181C24]">
            Peralatan tidak ditemukan
          </h2>
          <p className="mt-1.5 max-w-md text-sm text-[#5A6475]">
            Tidak ada peralatan yang cocok dengan kata kunci atau kategori yang dipilih.
            Coba gunakan kata kunci lain atau tampilkan semua kategori.
          </p>
          <Button onClick={resetFilters} className="mt-5">
            Atur Ulang Filter
          </Button>
        </section>
      )}
    </motion.div>
  );
}

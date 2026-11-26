import { BookOpen, Home, Layers, LayoutGrid, Wrench, Zap, Activity } from 'lucide-react';
import { Link, useLocation, useSearchParams } from 'react-router';
import { CATEGORIES } from '@/src/data/categories';
import { EQUIPMENT_DATA } from '@/src/data/equipment';
import { countByCategory } from '@/src/lib/equipmentUtils';
import { cn } from '@/src/lib/utils';
import type { CategoryId } from '@/src/types/equipment';

interface DesktopSidebarProps {
  onNavigate?: () => void;
  className?: string;
}

const categoryIcons: Record<CategoryId, typeof Activity> = {
  'alat-ukur': Activity,
  'alat-uji': Zap,
  'perkakas-kerja': Wrench,
};

export function DesktopSidebar({ onNavigate, className }: DesktopSidebarProps) {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const counts = countByCategory(EQUIPMENT_DATA);

  const isHome = location.pathname === '/';
  const isCatalog = location.pathname === '/catalog';
  const activeCategory = searchParams.get('kategori');

  return (
    <aside
      aria-label="Navigasi utama"
      className={cn(
        'flex h-full w-64 flex-col border-r border-[#E2E6EC] bg-white',
        className
      )}
    >
      <div className="flex h-14 items-center gap-2.5 border-b border-[#E2E6EC] px-4">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#1D6FE8] text-white">
          <Zap className="h-4 w-4" aria-hidden="true" />
        </div>
        <span className="truncate text-sm font-semibold tracking-tight text-[#181C24]">
          Peralatan Listrik
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-6 overflow-y-auto px-3 py-4">
        <div>
          <p className="mb-2 px-2.5 text-[11px] font-semibold tracking-wide text-[#5A6475]">
            Menu Utama
          </p>
          <nav className="flex flex-col gap-1">
            <Link
              to="/"
              onClick={onNavigate}
              className={cn(
                'flex min-h-[42px] items-center gap-3 rounded-lg px-2.5 py-2 text-sm font-medium transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D6FE8]',
                isHome
                  ? 'bg-[#EBF3FE] text-[#1D6FE8]'
                  : 'text-[#181C24] hover:bg-[#F6F7F9]'
              )}
            >
              <Home className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span className="whitespace-nowrap">Beranda</span>
            </Link>

            <Link
              to="/catalog"
              onClick={onNavigate}
              className={cn(
                'flex min-h-[42px] items-center justify-between gap-3 rounded-lg px-2.5 py-2 text-sm font-medium transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D6FE8]',
                isCatalog && !activeCategory
                  ? 'bg-[#EBF3FE] text-[#1D6FE8]'
                  : 'text-[#181C24] hover:bg-[#F6F7F9]'
              )}
            >
              <span className="flex items-center gap-3">
                <LayoutGrid className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span className="whitespace-nowrap">Katalog Peralatan</span>
              </span>
              <span className="text-xs font-medium tabular-nums text-[#5A6475]">
                {counts.semua}
              </span>
            </Link>
          </nav>
        </div>

        <div>
          <p className="mb-2 px-2.5 text-[11px] font-semibold tracking-wide text-[#5A6475]">
            Kategori Materi
          </p>
          <nav aria-label="Filter kategori materi" className="flex flex-col gap-1">
            {CATEGORIES.map((category) => {
              const Icon = categoryIcons[category.id] ?? Layers;
              const isSelected = isCatalog && activeCategory === category.id;
              return (
                <Link
                  key={category.id}
                  to={`/catalog?kategori=${category.id}`}
                  onClick={onNavigate}
                  className={cn(
                    'flex min-h-[42px] items-center justify-between gap-2 rounded-lg px-2.5 py-2 text-sm font-medium transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D6FE8]',
                    isSelected
                      ? 'bg-[#EBF3FE] text-[#1D6FE8]'
                      : 'text-[#5A6475] hover:bg-[#F6F7F9] hover:text-[#181C24]'
                  )}
                >
                  <span className="flex min-w-0 items-center gap-2.5">
                    <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
                    <span className="truncate">{category.shortName}</span>
                  </span>
                  <span className="shrink-0 text-xs tabular-nums">
                    {counts[category.id]}
                  </span>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      <div className="border-t border-[#E2E6EC] p-4">
        <div className="flex items-start gap-2.5 rounded-lg bg-[#F6F7F9] p-3">
          <BookOpen className="mt-0.5 h-4 w-4 shrink-0 text-[#1D6FE8]" aria-hidden="true" />
          <div className="min-w-0">
            <p className="text-xs font-semibold text-[#181C24]">
              Mata Pelajaran
            </p>
            <p className="mt-0.5 text-xs leading-snug text-[#5A6475]">
              Perbaikan Peralatan Listrik
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}

import { Home, LayoutGrid, Menu } from 'lucide-react';
import { Link, useLocation } from 'react-router';
import { cn } from '@/src/lib/utils';

interface MobileBottomNavProps {
  onOpenDrawer: () => void;
}

export function MobileBottomNav({ onOpenDrawer }: MobileBottomNavProps) {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isCatalogArea =
    location.pathname === '/catalog' || location.pathname.startsWith('/equipment/');

  return (
    <nav
      aria-label="Navigasi cepat mobile"
      className="fixed right-0 bottom-0 left-0 z-30 flex h-[60px] items-center justify-around border-t border-[#E2E6EC] bg-white/95 px-2 backdrop-blur-sm md:hidden"
    >
      <Link
        to="/"
        className={cn(
          'flex min-h-[46px] min-w-[80px] flex-col items-center justify-center gap-0.5 rounded-lg px-3 py-1 text-[11px] font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D6FE8]',
          isHome ? 'text-[#1D6FE8]' : 'text-[#5A6475] hover:text-[#181C24]'
        )}
      >
        <Home className="h-4 w-4" aria-hidden="true" />
        <span className="whitespace-nowrap">Beranda</span>
      </Link>

      <Link
        to="/catalog"
        className={cn(
          'flex min-h-[46px] min-w-[80px] flex-col items-center justify-center gap-0.5 rounded-lg px-3 py-1 text-[11px] font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D6FE8]',
          isCatalogArea ? 'text-[#1D6FE8]' : 'text-[#5A6475] hover:text-[#181C24]'
        )}
      >
        <LayoutGrid className="h-4 w-4" aria-hidden="true" />
        <span className="whitespace-nowrap">Katalog</span>
      </Link>

      <button
        type="button"
        onClick={onOpenDrawer}
        className="flex min-h-[46px] min-w-[80px] flex-col items-center justify-center gap-0.5 rounded-lg px-3 py-1 text-[11px] font-medium text-[#5A6475] transition-colors hover:text-[#181C24] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D6FE8] cursor-pointer"
      >
        <Menu className="h-4 w-4" aria-hidden="true" />
        <span className="whitespace-nowrap">Kategori</span>
      </button>
    </nav>
  );
}

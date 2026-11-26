import { Menu, Search, Zap } from 'lucide-react';
import { Link, useLocation } from 'react-router';

interface TopHeaderProps {
  onOpenDrawer: () => void;
}

function getPageHeading(pathname: string): string {
  if (pathname === '/') {
    return 'Beranda Pembelajaran';
  }
  if (pathname === '/catalog') {
    return 'Katalog Peralatan Listrik';
  }
  if (pathname.startsWith('/equipment/')) {
    return 'Detail Peralatan';
  }
  return 'Peralatan Listrik';
}

export function TopHeader({ onOpenDrawer }: TopHeaderProps) {
  const location = useLocation();
  const heading = getPageHeading(location.pathname);
  const isCatalog = location.pathname === '/catalog';

  return (
    <header className="sticky top-0 z-30 flex h-14 items-center justify-between gap-4 border-b border-[#E2E6EC] bg-white/95 px-4 backdrop-blur-sm sm:px-6 lg:px-10">
      <div className="flex min-w-0 items-center gap-3">
        <button
          type="button"
          onClick={onOpenDrawer}
          aria-label="Buka menu navigasi"
          className="flex min-h-[40px] min-w-[40px] items-center justify-center rounded-lg border border-[#E2E6EC] bg-white text-[#181C24] transition-colors hover:bg-[#F6F7F9] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D6FE8] lg:hidden cursor-pointer"
        >
          <Menu className="h-4 w-4" aria-hidden="true" />
        </button>

        <Link
          to="/"
          className="flex items-center gap-2 text-sm font-semibold text-[#181C24] lg:hidden"
        >
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-[#1D6FE8] text-white">
            <Zap className="h-3.5 w-3.5" aria-hidden="true" />
          </span>
          <span className="truncate">Peralatan Listrik</span>
        </Link>

        <p className="hidden truncate text-sm font-semibold text-[#181C24] lg:block">
          {heading}
        </p>
      </div>

      <div className="flex items-center gap-3 shrink-0">
        {!isCatalog ? (
          <Link
            to="/catalog"
            className="inline-flex min-h-[38px] items-center gap-2 rounded-lg border border-[#E2E6EC] bg-[#F6F7F9] px-3 py-1.5 text-xs font-medium text-[#181C24] whitespace-nowrap transition-colors hover:border-[#CFD6E0] hover:bg-[#EEF1F5] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D6FE8]"
          >
            <Search className="h-3.5 w-3.5 text-[#5A6475]" aria-hidden="true" />
            <span>Cari di Katalog</span>
          </Link>
        ) : (
          <Link
            to="/"
            className="inline-flex min-h-[38px] items-center rounded-lg px-3 py-1.5 text-xs font-medium text-[#5A6475] whitespace-nowrap transition-colors hover:bg-[#F6F7F9] hover:text-[#181C24] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D6FE8]"
          >
            Kembali ke Beranda
          </Link>
        )}
      </div>
    </header>
  );
}

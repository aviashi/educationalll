import { ArrowLeft, Compass } from 'lucide-react';
import { Link } from 'react-router';
import { Button } from '@/src/components/ui/button';

export function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-[#E2E6EC] bg-white px-6 py-16 text-center">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EEF1F5] text-[#5A6475]">
        <Compass className="h-5 w-5" aria-hidden="true" />
      </div>
      <h1 className="mt-4 text-xl font-bold text-[#181C24]">
        Halaman Tidak Ditemukan
      </h1>
      <p className="mt-2 max-w-md text-sm text-[#5A6475]">
        Tautan yang Anda buka tidak tersedia. Silakan kembali ke Beranda atau telusuri
        Katalog Peralatan Listrik.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <Link to="/">
          <Button variant="outline">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            <span>Kembali ke Beranda</span>
          </Button>
        </Link>
        <Link to="/catalog">
          <Button>Buka Katalog Peralatan</Button>
        </Link>
      </div>
    </div>
  );
}

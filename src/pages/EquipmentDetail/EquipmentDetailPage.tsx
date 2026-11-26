import { useEffect, useState } from 'react';
import {
  ArrowLeft,
  BookOpen,
  Cpu,
  Layers,
  Maximize2,
  ShieldAlert,
  Wrench,
  X,
} from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { Link, useParams } from 'react-router';
import { fastTransition, pageVariants } from '@/src/animations/variants';
import { EquipmentCard } from '@/src/components/equipment/EquipmentCard';
import { EquipmentImage } from '@/src/components/equipment/EquipmentImage';
import { Breadcrumb } from '@/src/components/ui/breadcrumb';
import { Button } from '@/src/components/ui/button';
import { CATEGORY_MAP } from '@/src/data/categories';
import { EQUIPMENT_DATA } from '@/src/data/equipment';
import { getEquipmentById, getRelatedEquipment } from '@/src/lib/equipmentUtils';

export function EquipmentDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  const equipment = getEquipmentById(EQUIPMENT_DATA, id);

  useEffect(() => {
    setIsImageModalOpen(false);
  }, [id]);

  useEffect(() => {
    if (!isImageModalOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsImageModalOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isImageModalOpen]);

  if (!equipment) {
    return (
      <motion.div
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="flex flex-col items-center justify-center rounded-2xl border border-[#E2E6EC] bg-white px-6 py-16 text-center"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EEF1F5] text-[#5A6475]">
          <Wrench className="h-5 w-5" aria-hidden="true" />
        </div>
        <h1 className="mt-4 text-xl font-bold text-[#181C24]">
          Peralatan Tidak Ditemukan
        </h1>
        <p className="mt-2 max-w-md text-sm text-[#5A6475]">
          Data peralatan listrik yang Anda cari tidak tersedia atau alamat tautan sudah berubah.
        </p>
        <Link to="/catalog" className="mt-6">
          <Button>
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            <span>Kembali ke Katalog</span>
          </Button>
        </Link>
      </motion.div>
    );
  }

  const category = CATEGORY_MAP[equipment.categoryId];
  const relatedItems = getRelatedEquipment(EQUIPMENT_DATA, equipment.id, equipment.categoryId, 3);

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="flex flex-col gap-8"
    >
      <div>
        <Breadcrumb
          items={[
            { label: 'Beranda', to: '/' },
            { label: 'Katalog Peralatan', to: '/catalog' },
            { label: equipment.name },
          ]}
        />

        <Link
          to="/catalog"
          className="inline-flex min-h-[40px] items-center gap-2 rounded-lg border border-[#E2E6EC] bg-white px-3.5 py-2 text-xs font-medium text-[#181C24] whitespace-nowrap transition-colors hover:bg-[#F6F7F9] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D6FE8]"
        >
          <ArrowLeft className="h-3.5 w-3.5 text-[#5A6475]" aria-hidden="true" />
          <span>Kembali ke Katalog</span>
        </Link>
      </div>

      {/* Overview Header Card */}
      <section className="overflow-hidden rounded-2xl border border-[#E2E6EC] bg-white shadow-[0_1px_3px_rgba(15,23,42,0.04)]">
        <div className="grid grid-cols-1 items-stretch lg:grid-cols-12">
          <div className="relative flex flex-col border-b border-[#E2E6EC] bg-[#EEF1F5] lg:col-span-5 lg:border-r lg:border-b-0">
            <div className="aspect-[4/3] w-full flex-1 overflow-hidden lg:aspect-auto">
              <EquipmentImage
                src={equipment.image}
                alt={equipment.imageAlt}
                title={equipment.name}
                priority
                className="lg:h-full"
              />
            </div>

            <button
              type="button"
              onClick={() => setIsImageModalOpen(true)}
              aria-label={`Perbesar gambar ${equipment.name}`}
              className="absolute right-3 bottom-3 inline-flex min-h-[38px] items-center gap-1.5 rounded-lg border border-[#E2E6EC] bg-white/95 px-3 py-1.5 text-xs font-medium text-[#181C24] shadow-sm backdrop-blur-sm transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D6FE8] cursor-pointer"
            >
              <Maximize2 className="h-3.5 w-3.5 text-[#5A6475]" aria-hidden="true" />
              <span>Perbesar Gambar</span>
            </button>
          </div>

          <div className="flex flex-col justify-between p-6 sm:p-8 lg:col-span-7">
            <div>
              <Link
                to={`/catalog?kategori=${category.id}`}
                className="inline-block text-xs font-semibold text-[#1D6FE8] hover:underline"
              >
                {category.name}
              </Link>

              <h1 className="mt-2 text-2xl font-bold tracking-tight text-[#181C24] text-balance sm:text-3xl">
                {equipment.name}
              </h1>

              <p className="mt-1 text-sm font-medium text-[#5A6475]">
                {equipment.subtitle}
              </p>

              <div className="mt-6 border-t border-[#EEF1F5] pt-5">
                <h2 className="flex items-center gap-2 text-xs font-semibold tracking-wide text-[#5A6475]">
                  <BookOpen className="h-3.5 w-3.5 text-[#1D6FE8]" aria-hidden="true" />
                  <span>Pengertian</span>
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-[#181C24] sm:text-base">
                  {equipment.definition}
                </p>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-3 border-t border-[#EEF1F5] pt-5 sm:grid-cols-2">
              {equipment.characteristics.slice(0, 2).map((item) => (
                <div key={item.label} className="flex flex-col gap-0.5">
                  <span className="text-xs text-[#5A6475]">{item.label}</span>
                  <span className="text-sm font-medium tabular-nums text-[#181C24]">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Educational Content */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        <div className="flex flex-col gap-6 lg:col-span-8">
          {/* Fungsi Utama */}
          <section className="rounded-2xl border border-[#E2E6EC] bg-white p-6 sm:p-8">
            <h2 className="flex items-center gap-2.5 text-lg font-semibold text-[#181C24]">
              <Wrench className="h-4 w-4 text-[#1D6FE8]" aria-hidden="true" />
              <span>Fungsi Utama</span>
            </h2>
            <ol className="mt-4 flex flex-col gap-3">
              {equipment.functions.map((func, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-sm leading-relaxed text-[#181C24]"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-[#EBF3FE] font-mono text-xs font-medium tabular-nums text-[#1D6FE8]">
                    {index + 1}
                  </span>
                  <span>{func}</span>
                </li>
              ))}
            </ol>
          </section>

          {/* Bagian & Komponen */}
          <section className="rounded-2xl border border-[#E2E6EC] bg-white p-6 sm:p-8">
            <h2 className="flex items-center gap-2.5 text-lg font-semibold text-[#181C24]">
              <Layers className="h-4 w-4 text-[#1D6FE8]" aria-hidden="true" />
              <span>Bagian dan Komponen</span>
            </h2>
            <div className="mt-4 grid grid-cols-1 gap-5 border-t border-[#EEF1F5] pt-5 sm:grid-cols-2">
              {equipment.components.map((part) => (
                <div key={part.name} className="flex flex-col gap-1.5">
                  <h3 className="text-sm font-semibold text-[#181C24]">{part.name}</h3>
                  <p className="text-sm leading-relaxed text-[#5A6475]">
                    {part.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Prinsip Kerja */}
          <section className="rounded-2xl border border-[#E2E6EC] bg-white p-6 sm:p-8">
            <h2 className="flex items-center gap-2.5 text-lg font-semibold text-[#181C24]">
              <Cpu className="h-4 w-4 text-[#1D6FE8]" aria-hidden="true" />
              <span>Prinsip Kerja</span>
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[#181C24] sm:text-base">
              {equipment.workingPrinciple}
            </p>
          </section>
        </div>

        {/* Right Side Specs & Safety */}
        <aside className="flex flex-col gap-6 lg:col-span-4">
          <section className="rounded-2xl border border-[#E2E6EC] bg-white p-6">
            <h2 className="text-base font-semibold text-[#181C24]">
              Karakteristik Teknis
            </h2>
            <dl className="mt-4 divide-y divide-[#EEF1F5]">
              {equipment.characteristics.map((item) => (
                <div key={item.label} className="py-3 first:pt-0 last:pb-0">
                  <dt className="text-xs font-medium text-[#5A6475]">{item.label}</dt>
                  <dd className="mt-1 text-sm font-medium tabular-nums text-[#181C24]">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </section>

          {equipment.safetyNote && (
            <section className="rounded-2xl border border-[#FDE68A] bg-[#FFFBEB] p-6">
              <div className="flex items-center gap-2 text-[#B45309]">
                <ShieldAlert className="h-4 w-4 shrink-0" aria-hidden="true" />
                <h2 className="text-sm font-semibold">Catatan Keselamatan Kerja</h2>
              </div>
              <p className="mt-2.5 text-sm leading-relaxed text-[#78350F]">
                {equipment.safetyNote}
              </p>
            </section>
          )}
        </aside>
      </div>

      {/* Related Equipment */}
      {relatedItems.length > 0 && (
        <section className="border-t border-[#E2E6EC] pt-8">
          <div className="mb-4 flex items-center justify-between gap-4">
            <h2 className="text-lg font-semibold text-[#181C24]">
              Pelajari Peralatan Lainnya
            </h2>
            <Link
              to="/catalog"
              className="text-xs font-medium text-[#1D6FE8] whitespace-nowrap hover:underline"
            >
              Semua peralatan
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {relatedItems.map((item) => (
              <EquipmentCard key={item.id} equipment={item} />
            ))}
          </div>
        </section>
      )}

      {/* Image Lightbox Modal */}
      <AnimatePresence>
        {isImageModalOpen && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`Pratinjau penuh ${equipment.name}`}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={fastTransition}
              onClick={() => setIsImageModalOpen(false)}
              className="fixed inset-0 bg-[#181C24]/70 backdrop-blur-xs"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={fastTransition}
              className="relative z-10 w-full max-w-3xl overflow-hidden rounded-2xl border border-[#E2E6EC] bg-white shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-[#E2E6EC] px-5 py-3.5">
                <p className="truncate text-sm font-semibold text-[#181C24]">
                  {equipment.name}
                </p>
                <button
                  type="button"
                  onClick={() => setIsImageModalOpen(false)}
                  aria-label="Tutup pratinjau gambar"
                  className="flex min-h-[36px] min-w-[36px] items-center justify-center rounded-lg text-[#5A6475] transition-colors hover:bg-[#EEF1F5] hover:text-[#181C24] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D6FE8] cursor-pointer"
                >
                  <X className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
              <div className="aspect-[4/3] w-full bg-[#EEF1F5]">
                <EquipmentImage
                  src={equipment.image}
                  alt={equipment.imageAlt}
                  title={equipment.name}
                  priority
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

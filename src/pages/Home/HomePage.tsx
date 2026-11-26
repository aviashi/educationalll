import { ArrowRight, BookOpen, Compass, Cpu, ShieldCheck, Wrench, Activity, Zap } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import { pageVariants } from '@/src/animations/variants';
import { EquipmentImage } from '@/src/components/equipment/EquipmentImage';
import { Button } from '@/src/components/ui/button';
import { CATEGORIES } from '@/src/data/categories';
import { EQUIPMENT_DATA } from '@/src/data/equipment';
import { countByCategory } from '@/src/lib/equipmentUtils';
import type { CategoryId } from '@/src/types/equipment';

const categoryMetaIcons: Record<CategoryId, typeof Activity> = {
  'alat-ukur': Activity,
  'alat-uji': Zap,
  'perkakas-kerja': Wrench,
};

const learningPillars = [
  {
    step: '01',
    title: 'Pengertian & Fungsi',
    description: 'Mengenali identitas alat beserta peran utamanya dalam pekerjaan perbaikan listrik.',
    icon: BookOpen,
  },
  {
    step: '02',
    title: 'Bagian & Komponen',
    description: 'Memahami struktur fisik serta fungsi masing-masing bagian penyusun peralatan.',
    icon: Cpu,
  },
  {
    step: '03',
    title: 'Prinsip Kerja',
    description: 'Menjelaskan cara kerja dasar alat secara teknis namun tetap ringkas dan mudah dipahami.',
    icon: Compass,
  },
  {
    step: '04',
    title: 'Karakteristik & K3',
    description: 'Mengetahui batas spesifikasi umum dan prosedur keselamatan saat menggunakan alat.',
    icon: ShieldCheck,
  },
];

export function HomePage() {
  const counts = countByCategory(EQUIPMENT_DATA);
  const featuredTool = EQUIPMENT_DATA[0];

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="flex flex-col gap-8 lg:gap-10"
    >
      {/* Hero Section */}
      <section className="overflow-hidden rounded-2xl border border-[#E2E6EC] bg-white shadow-[0_1px_3px_rgba(15,23,42,0.04)]">
        <div className="grid grid-cols-1 items-stretch lg:grid-cols-12">
          <div className="flex flex-col justify-center p-6 sm:p-8 lg:col-span-7 lg:p-10">
            <p className="text-xs font-semibold tracking-wide text-[#1D6FE8]">
              Mata Pelajaran Perbaikan Peralatan Listrik
            </p>

            <h1 className="mt-3 max-w-xl text-2xl font-bold tracking-tight text-[#181C24] text-balance sm:text-3xl lg:text-4xl">
              Kenali Peralatan Listrik Secara Visual dan Terstruktur
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#5A6475] sm:text-base">
              Media pembelajaran digital ini membantu peserta didik memahami bentuk fisik,
              fungsi utama, bagian penyusun, prinsip kerja, serta keselamatan penggunaan
              peralatan listrik sebelum praktik di bengkel kerja.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link to="/catalog">
                <Button size="lg">
                  <span>Jelajahi Katalog</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                onClick={() =>
                  document
                    .getElementById('kategori-peralatan')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                Lihat Kategori
              </Button>
            </div>
          </div>

          {featuredTool && (
            <div className="flex flex-col border-t border-[#E2E6EC] bg-[#F6F7F9] lg:col-span-5 lg:border-t-0 lg:border-l">
              <div className="relative flex-1 overflow-hidden">
                <EquipmentImage
                  src={featuredTool.image}
                  alt={featuredTool.imageAlt}
                  title={featuredTool.name}
                  priority
                  className="aspect-[4/3] lg:aspect-auto lg:h-full"
                />
              </div>
              <div className="flex items-center justify-between gap-4 border-t border-[#E2E6EC] bg-white px-5 py-3.5">
                <div className="min-w-0">
                  <p className="text-[11px] font-medium text-[#5A6475]">
                    Contoh Materi Katalog
                  </p>
                  <p className="truncate text-sm font-semibold text-[#181C24]">
                    {featuredTool.name}
                  </p>
                </div>
                <Link
                  to={`/equipment/${featuredTool.id}`}
                  className="inline-flex min-h-[38px] shrink-0 items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium text-[#1D6FE8] whitespace-nowrap transition-colors hover:bg-[#EBF3FE] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D6FE8]"
                >
                  <span>Buka Detail</span>
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Kategori Peralatan */}
      <section id="kategori-peralatan" className="scroll-mt-20">
        <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-lg font-semibold tracking-tight text-[#181C24] sm:text-xl">
              Kategori Peralatan Listrik
            </h2>
            <p className="mt-1 text-sm text-[#5A6475]">
              Pilih kelompok peralatan yang ingin dipelajari sesuai fungsi kerjanya.
            </p>
          </div>
          <Link
            to="/catalog"
            className="inline-flex min-h-[38px] items-center gap-1.5 self-start text-xs font-medium text-[#1D6FE8] whitespace-nowrap hover:underline sm:self-auto"
          >
            <span>Lihat semua ({counts.semua} alat)</span>
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {CATEGORIES.map((category) => {
            const Icon = categoryMetaIcons[category.id];
            return (
              <Link
                key={category.id}
                to={`/catalog?kategori=${category.id}`}
                className="group flex flex-col rounded-xl border border-[#E2E6EC] bg-white p-5 shadow-[0_1px_2px_rgba(15,23,42,0.03)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#CFD6E0] hover:shadow-[0_6px_16px_rgba(15,23,42,0.06)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D6FE8]"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#EBF3FE] text-[#1D6FE8]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <span className="text-xs font-medium tabular-nums text-[#5A6475]">
                    {counts[category.id]} peralatan
                  </span>
                </div>

                <h3 className="mt-4 text-base font-semibold text-[#181C24] transition-colors group-hover:text-[#1D6FE8]">
                  {category.name}
                </h3>

                <p className="mt-2 flex-1 text-sm leading-relaxed text-[#5A6475]">
                  {category.description}
                </p>

                <div className="mt-4 flex items-center gap-1.5 text-xs font-medium text-[#1D6FE8]">
                  <span>Buka kategori</span>
                  <ArrowRight
                    className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Struktur Pembelajaran */}
      <section className="rounded-2xl border border-[#E2E6EC] bg-white p-6 sm:p-8">
        <div className="max-w-2xl">
          <h2 className="text-lg font-semibold tracking-tight text-[#181C24] sm:text-xl">
            Struktur Informasi Pada Setiap Materi
          </h2>
          <p className="mt-1 text-sm text-[#5A6475]">
            Setiap halaman detail peralatan disusun mengikuti alur pemahaman praktis agar mudah
            dipelajari secara mandiri maupun di kelas.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 border-t border-[#EEF1F5] pt-6 sm:grid-cols-2 lg:grid-cols-4">
          {learningPillars.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.step} className="flex flex-col gap-2">
                <div className="flex items-center gap-2.5">
                  <Icon className="h-4 w-4 text-[#1D6FE8]" aria-hidden="true" />
                  <span className="font-mono text-xs font-medium tabular-nums text-[#5A6475]">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-sm font-semibold text-[#181C24]">{item.title}</h3>
                <p className="text-sm leading-relaxed text-[#5A6475]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </motion.div>
  );
}

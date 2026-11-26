import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import { cardItemVariants } from '@/src/animations/variants';
import { CATEGORY_MAP } from '@/src/data/categories';
import { EquipmentImage } from '@/src/components/equipment/EquipmentImage';
import type { Equipment } from '@/src/types/equipment';

interface EquipmentCardProps {
  equipment: Equipment;
}

export function EquipmentCard({ equipment }: EquipmentCardProps) {
  const category = CATEGORY_MAP[equipment.categoryId];

  return (
    <motion.article
      variants={cardItemVariants}
      className="group flex flex-col overflow-hidden rounded-xl border border-[#E2E6EC] bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#CFD6E0] hover:shadow-[0_6px_18px_rgba(15,23,42,0.06)]"
    >
      <Link
        to={`/equipment/${equipment.id}`}
        className="flex h-full flex-col focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D6FE8]"
      >
        <div className="aspect-[4/3] w-full overflow-hidden border-b border-[#EEF1F5] bg-[#EEF1F5]">
          <EquipmentImage
            src={equipment.image}
            alt={equipment.imageAlt}
            title={equipment.name}
            className="transition-transform duration-300 group-hover:scale-[1.03]"
          />
        </div>

        <div className="flex flex-1 flex-col p-5">
          <div className="mb-1.5 text-xs font-medium text-[#1D6FE8]">
            {category.name}
          </div>

          <h2 className="text-base font-semibold leading-snug text-[#181C24] transition-colors group-hover:text-[#1D6FE8]">
            {equipment.name}
          </h2>

          <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-[#5A6475]">
            {equipment.shortDescription}
          </p>

          <div className="mt-4 flex items-center justify-between border-t border-[#EEF1F5] pt-3.5 text-xs font-medium text-[#181C24]">
            <span>Pelajari selengkapnya</span>
            <ArrowRight
              className="h-4 w-4 text-[#5A6475] transition-transform duration-150 group-hover:translate-x-0.5 group-hover:text-[#1D6FE8]"
              aria-hidden="true"
            />
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

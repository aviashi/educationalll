import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router';

export interface BreadcrumbItem {
  label: string;
  to?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Navigasi lokasi halaman" className="mb-4">
      <ol className="flex flex-wrap items-center gap-1.5 text-xs font-medium text-[#5A6475]">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-1.5">
              {index > 0 && (
                <ChevronRight className="h-3.5 w-3.5 shrink-0 text-[#98A2B3]" aria-hidden="true" />
              )}
              {item.to && !isLast ? (
                <Link
                  to={item.to}
                  className="rounded px-1 py-0.5 text-[#5A6475] transition-colors hover:text-[#1D6FE8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D6FE8]"
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  aria-current={isLast ? 'page' : undefined}
                  className={isLast ? 'px-1 py-0.5 text-[#181C24] font-semibold' : 'px-1 py-0.5'}
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

import { useState } from 'react';
import { Wrench } from 'lucide-react';
import { cn } from '@/src/lib/utils';

interface EquipmentImageProps {
  src: string;
  alt: string;
  title: string;
  className?: string;
  priority?: boolean;
}

export function EquipmentImage({
  src,
  alt,
  title,
  className,
  priority = false,
}: EquipmentImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={cn(
          'flex h-full w-full flex-col items-center justify-center gap-2 bg-[#EEF1F5] p-6 text-center text-[#5A6475]',
          className
        )}
      >
        <Wrench className="h-8 w-8 text-[#1D6FE8]/70" aria-hidden="true" />
        <span className="text-xs font-medium text-[#181C24]">{title}</span>
        <span className="text-[11px] text-[#5A6475]">Pratinjau gambar tidak tersedia</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={cn('h-full w-full object-cover', className)}
    />
  );
}

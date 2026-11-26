import { useEffect } from 'react';
import { X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { fastTransition, DESKTOP_EASE } from '@/src/animations/variants';
import { DesktopSidebar } from '@/src/components/navigation/DesktopSidebar';

interface MobileDrawerProps {
  open: boolean;
  onClose: () => void;
}

export function MobileDrawer({ open, onClose }: MobileDrawerProps) {
  useEffect(() => {
    if (!open) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true" aria-label="Menu navigasi">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={fastTransition}
            onClick={onClose}
            className="fixed inset-0 bg-[#181C24]/35 backdrop-blur-[1px]"
          />

          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.24, ease: DESKTOP_EASE }}
            className="relative z-10 flex h-full w-64 max-w-[82vw] shadow-xl"
          >
            <DesktopSidebar onNavigate={onClose} className="w-full border-r-0" />
            <button
              type="button"
              onClick={onClose}
              aria-label="Tutup menu navigasi"
              className="absolute top-2.5 right-2.5 flex min-h-[36px] min-w-[36px] items-center justify-center rounded-lg text-[#5A6475] transition-colors hover:bg-[#EEF1F5] hover:text-[#181C24] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D6FE8] cursor-pointer"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

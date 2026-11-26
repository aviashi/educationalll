import { useEffect, useState, type ReactNode } from 'react';
import { MotionConfig } from 'motion/react';
import { useLocation } from 'react-router';
import { DesktopSidebar } from '@/src/components/navigation/DesktopSidebar';
import { MobileBottomNav } from '@/src/components/navigation/MobileBottomNav';
import { MobileDrawer } from '@/src/components/navigation/MobileDrawer';
import { TopHeader } from '@/src/components/navigation/TopHeader';

interface AppShellProps {
  children: ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    setDrawerOpen(false);
  }, [location.pathname, location.search]);

  return (
    <MotionConfig reducedMotion="user">
      <div className="flex min-h-screen bg-[#F6F7F9] text-[#181C24]">
        <div className="hidden lg:sticky lg:top-0 lg:block lg:h-screen lg:shrink-0">
          <DesktopSidebar />
        </div>

        <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />

        <div className="flex min-w-0 flex-1 flex-col">
          <TopHeader onOpenDrawer={() => setDrawerOpen(true)} />

          <main className="mx-auto w-full max-w-[1160px] flex-1 px-4 py-6 sm:px-6 lg:px-10 lg:py-8">
            {children}
          </main>

          <footer className="mt-auto border-t border-[#E2E6EC] bg-white/70 px-4 py-5 pb-20 text-xs text-[#5A6475] sm:px-6 md:pb-5 lg:px-10">
            <div className="mx-auto flex max-w-[1160px] flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <p>
                Media Pembelajaran Digital — Mata Pelajaran Perbaikan Peralatan Listrik
              </p>
              <p>Disusun untuk pengenalan fungsi, komponen, dan prinsip kerja alat.</p>
            </div>
          </footer>
        </div>

        <MobileBottomNav onOpenDrawer={() => setDrawerOpen(true)} />
      </div>
    </MotionConfig>
  );
}

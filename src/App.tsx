import { AnimatePresence } from 'motion/react';
import { HashRouter, Route, Routes, useLocation } from 'react-router';
import { AppShell } from '@/src/components/layout/AppShell';
import { CatalogPage } from '@/src/pages/Catalog/CatalogPage';
import { EquipmentDetailPage } from '@/src/pages/EquipmentDetail/EquipmentDetailPage';
import { HomePage } from '@/src/pages/Home/HomePage';
import { NotFoundPage } from '@/src/pages/NotFoundPage';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/equipment/:id" element={<EquipmentDetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <HashRouter>
      <AppShell>
        <AnimatedRoutes />
      </AppShell>
    </HashRouter>
  );
}

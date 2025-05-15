/* =======================================
 * TOPページ
 * URL: /app/page.tsx
 * Created: 2025-05-08
 * Last updated: 2025-05-08
 * ======================================= */

import ContainerSchedule from '@/components/common/ContainerSchedule';
import ContainerConcept from '@/components/top/ContainerConcept';
import ContainerSlide from '@/components/top/ContainerSlide';

export default function Home() {
  return (
    <>
      <ContainerSlide />
      <ContainerConcept />
      <ContainerSchedule />
    </>
  );
}

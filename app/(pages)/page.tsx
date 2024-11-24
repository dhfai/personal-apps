'use client';

import SvgSection from '@/components/SvgSection';
import styles from '@/styles/module/Home.module.scss';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

export default function HomePage() {
  const containerRef = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className={styles.container}>
      <SvgSection />
    </div>
  );
}

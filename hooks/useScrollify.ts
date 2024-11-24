import { useState, useEffect, useRef, useCallback } from 'react';

interface UseScrollifyOptions {
  section: string;
  scrollSpeed: number;
  afterRender?: () => void;
  before?: (index: number, panels: HTMLElement[]) => void;
}

export const useScrollify = ({ section, scrollSpeed, afterRender, before }: UseScrollifyOptions) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const panelsRef = useRef<HTMLElement[]>([]);

  const scrollHandler = useCallback(
    (direction: 'up' | 'down') => {
      const nextIndex = direction === 'down' ? currentIndex + 1 : currentIndex - 1;

      if (nextIndex >= 0 && nextIndex < panelsRef.current.length) {
        setCurrentIndex(nextIndex);
        before?.(nextIndex, panelsRef.current);
      }
    },
    [currentIndex, before]
  );

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (e.deltaY > 0) {
        scrollHandler('down');
      } else {
        scrollHandler('up');
      }
    };

    const sections = Array.from(document.querySelectorAll(section)) as HTMLElement[];
    panelsRef.current = sections;

    if (afterRender) afterRender();

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [section, scrollHandler, afterRender]);

  useEffect(() => {
    const target = panelsRef.current[currentIndex];
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }, [currentIndex]);

  return { currentIndex };
};

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from '@/styles/module/Home.module.scss';

interface SvgSectionProps {
  page: number;
  titleHero: string;
  titleSub: string;
}

export default function SvgSection(){
  const pathRef = useRef<SVGPathElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;

    gsap.registerPlugin(ScrollTrigger);

    const pathLength = path.getTotalLength();

    gsap.set(path, {
      strokeDasharray: pathLength,
      strokeDashoffset: pathLength,
    });

    gsap.to(path, {
      strokeDashoffset: 0,
      duration: 2,
      ease: 'power1.inOut',
    });

    gsap.to(path, {
      strokeDashoffset: -pathLength,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top center',
        end: 'bottom top',
        scrub: 1,
        markers: true
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.pageContainer} ref={sectionRef}>
      <div className={styles.left}>
          <div className={styles.svgPath}>
            <svg id={styles.lineSvg} width="80%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1443 8913.34">
                <path id={styles.lineBase}  d="M710.5 1.5c15.08 126.6 44.35 213.7 180.84 238.83 59.92 13.6 75.06 96.63 68.86 157.79-1.71 117.15-126.51 167-223.64 110.52-15.8-8.89-30.69-20-41.59-34.46-28.53-37.26-25-104.27 18.53-128.48 43.22-16.27 73.9 34.46 70 73.16C779.37 594.6 549.94 646.11 464.75 765c94.18-116.82 4.1-162.92-88.45-66.36-50.08 55-92.86 130.22-87.07 206.63 9.74 54.21 61 59 104 36.35a550.1 550.1 0 0 0 187.25-138.7c-27.75 24.45-69.51 49-66.6 91 8.51 45 51.45 45.2 72.6 8.46 22.31-27.45 37.84-78.44.31-99.34-17-8.35-41.79 2.14-43.36 21-1.61 19.27 20.77 33.55 39.94 31 13.24-1.75 24.78-8.8 35.3-17.46A175.53 175.53 0 0 1 651 816.13c46.12-23.3 67.85-52.82 110.75-86.84 5.75-4.56 13.07 3.23 8.16 8.69-78.08 98.55-237.26 261.44-235.12 388.94 27 83 214.62-145.69 164.07-213-11.28-20.88-41.76-30.64-60.53-19.6a10.62 10.62 0 0 0 2.54 19.34c11 3.06 25.59-.64 37-5.4 77.74-32.53 159.13-72.79 211-136.46 5.48-6.73-4.36-15.11-10.2-8.7a1526.75 1526.75 0 0 0-186 251.83c-20.33 34.92-44.66 85.4-25.71 121.35a27.82 27.82 0 0 0 26.73 14.72c90.25-6.66 159.21-120.07 149.94-209.59-2.9-29.55-22.53-65-51.74-59.69-20.55 5.18-22.72 30.18.81 29.29 35.76 2 66.17-21.73 98.89-33.18 19.64-5.13 85.41-49.13 75.07-70.61-3.3-3.58-8.4-2-12.33.08-41.05 17.37-62 97.07-10.53 112.12 48.47-1 148.9-66.62 145.72-119.62-11.92-15.64-43.27 25.54-50.25 35.38-27.9 39.29-11.24 84.17 39.75 75.68 27.21-3.1 49.5-16.7 77.77-34.46 69.36-65.48 162.22-19 81.74 117.7-46.78 79.21-131.81 158.78-208.6 210.35-222.12 133.11-482.5 227.89-741.21 249.65-36.9 1.14-85.24-10.66-87.61-47.5-1-15.33 7.29-29.64 31.16-38.25 120-49.14 684.39-208 790.76 128.17.1.31-.19-.25-.11.07 33 132.88-99.77 125.49-91.78 11.34.09-1.24.48-2.44.69-3.67 13.43-79 114.93-112.81 186.34-115.07 123.06 6.35 181.55 137.41 208.61 242.28 37.18 117.9 98.61 317 36.25 413.45-36 55.73-121.44 4.2-88.37-53.33 11.72-20.38 31.92-34 61.06-32.18 49.65 6.58 64.6 71.34 61.23 121.32-12.31 182.85-142.64 384.42-293.72 488.16l5.21-5.32-5.21 5.32c-28.52-32.88-77.67-37.25-121.07-33.93-157.38 12.06-307.58 97.6-398.24 226.8-9.81 14-19.13 28.84-22.57 45.56s0 35.79 12.63 47.29c8.69 7.92 20.49 11.37 32 13.78 96.46 20.18 196-16.43 281.54-65.41 72-41.23 139.72-92.71 187.72-160.37 16.12-22.72 30.23-48.16 32.32-75.94s-10.57-58.19-35.87-69.86c-11.17-5.15-23.71-6.32-36-7.42-64-5.76-129.64-11.37-191.52 5.89-39.37 11-75.61 30.84-111.06 51.19-51.73 29.71-103.29 61.35-144.5 104.47-39.24 41-69 100.78-48.53 153.75 14 36.25 49.52 61.14 87.25 70.49s77.54 5.11 115.56-3c138.3-29.52 264.78-111.36 348.36-225.43 21.69-29.6 41.35-65 34.94-101.12-6.38-35.9-38.08-63.23-72.79-74.42s-72.18-9.06-108.46-5.42c-75.51 7.58-152 21.72-218.3 58.63-49 27.3-90.64 66-130.22 105.82-35.11 35.29-70.9 75.65-75.53 125.2-4 43.37 16.75 84.84 38.09 122.81 54.32 96.68 118.77 191.85 211.72 252.34s220.39 79.11 314.33 20.16c31.16-19.56 57.1-46.38 80.81-74.51 24.06-28.54 46.58-59.49 57.53-95.18 15.76-51.42 6-106.77-3.91-159.63-17.27-92.27-34.85-185.54-69.21-268.44 45.55-26.05 102.13-33.39 151.88-16.7s91.26 58.09 105.09 108.71-.47 106.57-31.7 148.72-77.88 71.25-127.69 87.7c6.61-76.16-56.65-143.54-57.13-220a861.78 861.78 0 0 1 84.94-25c9.94-2.38 20.57-4.55 30.2-1.11 15.28 5.47 22.38 22.62 27.72 38 4.93 14.15 9.9 28.76 9.08 43.72-1.5 27-22 49.9-46.19 62s-51.61 15.36-78.44 18.44a810.17 810.17 0 0 0 20.61 116.2l-58.26-259.3 58.81 259.37c2.5 54.9-17.22 109.6-48.87 161.07-66 107.34-173.78 182.25-296.93 208.92-249.43 54-686.63 130.8-719.28-133.89 54.91-229.31 334-12.33 91.47 183.67-84.56 82.68-207.2 143.64-250.4 258.56-16.4 89.68 67.81 106.51 134.64 68.67 20.31-9.47 42.75-22.46 46.77-44.5 5.72-31.37-34.15-55.65-64.82-46.92-93.81 42.72-125 211-129.17 305.46-5.42 57.91 38.24 98.6 87.72 55 16.65-16.41 25-39.22 32.92-61.23l-25.59 52.13c10.92-39.28 35.9-88.67 84.6-80.3 27.66 4.75 54.27 23 65.34 49.21 9.5 22.54 6.19 50.19-10.11 68.76-5.88 6.71-13.54 12.3-22.73 12.9a19.43 19.43 0 0 1-14.87-5.12c-9.65-9.37-4.72-25.23 2.78-36a102.32 102.32 0 0 1 64.68-41.77c48.9-9 147 37.33 115.32 100.4-4 8.05-12.08 14.62-21.1 14.63-27.32 0-36.69-36.69-29.72-58 10.37-31.65 42-42.57 72.78-37.73 29.48 4.63 72.09 24.56 68.46 60.53-.6 5.92-2.66 11.9-6.89 16.09-20.73 20.53-33.34-27-36.61-39.6-11.44-44.18-22.08-109.75 19.24-143.22 30.88-25 78.9-16.22 106.71 9.27 22.09 20.25 32.35 52.74 31.82 82.24.33-18.46 13.31-42.2 23.26-56.82 27.8-40.9 84.68-41.37 122.41-14.32 90.13 64.64 2 190.8-56.4 243.86-14.54 13.21-31.1 25.7-49 33.9s-43.47 14.72-56.92-3.36c-14.66-19.7-28.52-40.67-38-63.38-7.24-17.3-13.14-37-12.62-55.93.66-23.79 20-40.19 42.31-24.29 16.21 11.55 25.25 32.26 23.25 52a.67.67 0 0 1-1.33-.1c.89-19.86 18.36-38.37 38.5-39 22.78-.73 43 20.06 44.88 42.77s-12 45-31.7 56.56c-3.18 1.87-7.24 3.54-10.24 0a7.6 7.6 0 0 1-1.59-3.58c-4.39-24.22 27.85-37.22 46.69-38.11 22.23-1.06 43.67 9.35 60.1 23.71 18.77 16.39 40.44 25.33 64.82 17.24 13-4.31 25.2-10.79 38.69-13.51 28.46-5.75 47.74 10.09 64.78 30.44 18.86 22.52 38.35 35.22 68.46 26.88 16.7-4.62 114-37.68 128.33-26.52 31.24 11.05 53.68 38.16 81.55 56.09l-1.44-.77c21.49 19.25 64 47.07 96.65 109.11 11.78 22.41 21.68 57.1 16.43 86.39-3.2 17.83-11.78 34.2-17.1 51.53-4.92 16-7.06 32.84-13.13 48.44s-17.22 30.51-21.35 44.8a475.51 475.51 0 0 0-70.15 231.88c-1.31 37.78 2.59 77.67 24 108.85s64.63 49.86 98.55 33.18 40.76-74.25 7-91.24c-39.73-20-80.07 26.18-97.86 66.94a765 765 0 0 0-63 272.91c-2.24 53 1.47 107.89 24.69 155.61 33.8 69.48 103 113.35 157.16 168.43 63.17 64.2 101.25 115.81 117 204.81l6.6 8.8c-.8 14.22-17.71 23.09-31.72 20.49s-25.14-13-34.73-23.58c-42.92-47.2-71.78-105.19-100.1-162.35-23.1-35.94-50.88-59.76-55.71-69.49-43.3-87.19-155.32-127.54-247.12-110.24-33 6.21-51.39-2.89-93-16.21-38.85-12.46-96.71-23.66-104.42 40-1.11 9.18-1.11 21.83-5.86 23.43-8.62 2.91-18.82-55.62-41.86-75.65-10.46-9.09-30.57-15.9-42.73-.72-16.41 20.48 43 134.94 53.7 154.55 4.33 7.92-3.18 11.53-9.24 12.61-2.9.51-13.9-13-27.43-29.18-14.69-17.63-31.52-36.82-34.64-41.43-10.59-15.65-37.82-52.6-56.87-60.89-46.65-20.28-47.2 20.37-21.66 59.09 16.45 24.93 37 47.64 33.49 48.27-4 .72-9.42-4.19-19.77-10.09-33-18.8-39.34-18.19-71.74-29.54-16.46-5.76-61.49-113.84-62.36-123.57s49.37-19.09 62.93-40 42.59-16.72 45.33-27 12.7-46.47 30-41.43-3.75 28.82-22.8 23.78-17-56.92-7.22-55.12 3.46 55.84-21.08 59.44-13.56-77.45-4.9-42.87-11.55 46.12-40.42 28.1 13.57-89.7 18.48-66.29-46.19 68.45-48.5 25.22 45.9-57.64 53.12-83.58 5.19-80.34-6.93-61.24c-26.36 41.5 57.26 65 49.65-22.34-1.44-16.57-10.68-13.69-29.16-10.45s-34.93-38.55-15.87-49.35 18.18 50.07-3.76 63c-30.28 17.9-31.72-126.31-116.92-156.35-39.84-14.05 3.18 93.67 29.45 85.74s-36.09-49.72-82-66.29-35.8 50.44.87 52.24c164.82 8.1 145.9 229.48 102.48 213.64-18.76-6.85 12.13-46.84 13.57-62.69s-1.73-25.22-20.79 8.29-10.68 78.53-4.33 101.59-2.59 23.06-3.75 59.08 26.85 52.6 25.69 36 8.67-30.62 19.92-35.67 33.74 35 25.41 16.58-43.88.72-27.14 2.52 17 18.73 27.43 18.73 239.76-118.34 244-120c12.21-4.72 35.11 131.95 29.2 157.77-2.62 11.43 12.08 5.07 14.1 1.11 3.76-7.37-13.3-12.38 9.53-23.78 36.22-18.08 75.87-112.76 15.3-144.46-26.85-14.05-39.84 22-42.15 18-1.76-3-16.32-20-15.85-7.93.58 14.77 7.19 24.86 10.94 20.18s.58-14.41-3.75-19.45c-14.22-16.56 63.12-84.39 94.69 13.69 27.54 85.54-62.35 157-65.68 134.19-2.15-14.8-16.08-13-15.59-8.3 1.16 10.81-14.58 87-12.84 94.23s31.75 30.26 62.35 29.9 65.44 12.4 70.73 15.49 5.78 10.09 23.39-6.85 32.62-11.88 23.67-9-51.39 40-55.14 49.71c-8.26 21.4 54.49-.48 47.63 6.13-6.35 6.12-26.84 14.77-43.3 8.64s-52.54-8.82-59.47-5.22c-6.15 3.2 17.8 20.48 25.4 20.72 5.81.18 16.94-1.59 29.74-1.45a196.71 196.71 0 0 1 39.55 5.05c25.41 5.76 27.72 19.81-9.53 6.84-25-8.69-44-5.44-57.45-4.68-6.61.38-12 4.36-15.87-2.16-11.84-19.82-58.32-34.59-62.94-49.72s-22.23-40.35-32-48.27-16.46-38.91-31.47-62.69c-18.23-28.86-61.5-36.83-36.86 26.4 5 12.72 9.51 22.54 12.9 15.75 8.08-16.21-15.45-64.9-20.07-50.85-1.63 4.95.29 15.82 5.08 29.45 14.14 40.27 48.68 106 54 125.16 4.41 16 21 33.9 35.51 48.27 7.33 7.29 13.82 14.65 18.48 18.38 12.89 10.33 87.76 75.65 77.65 76-8.13.29-33.52-12.19-45.61-15.85s-87.76-22.34-103.93-25.94-30.6-13-37.24-23.06-48.16-74.16-53.12-78.89c-5.94-5.67-21.51-16.14-41.86-27.38-30.79-17-65.74-33.37-81.13-16.58-20.78 22.7 24.64 39.86 32.05 33.51 4.63-4-25-31.37-35.51-24.14-11 7.57 24.83 32.43 30 35.31s90.37 67.37 103.07 74.57 31.18 21.26 19.05 19.46S596.53 5484 559.57 5475c-29.05-7.08-41.92-16.87-44.26-23.42-.5-1.4-1.11-2.95-.63-4 4.42-9.25 36.41 6.84 38.11 16.39 2.92 16.37-25.94-1.36-30.68-4.32a16.78 16.78 0 0 1-7.36-9.78c-2.61-10.7 5.07-24.53 17.4-26.07 17.32-2.16 155.32 103 166.86 111.68 17.59 13.17 148.16 26.44 148.1 25.94-2.47-21.58-121.2-29.71-140.3-48.63-9.82-9.73-73-108.44-96.71-135.82s-42.73-65.21-26.85-67.73c5.3-.84 21.35 36.69 16.16 45.75-4.33 7.57-17.32-17.29-21.94-32.78s1.21-26 25.7-19.82c7.84 2 17.32 8.47 25.69 18 17.74 20.24 34 51 43.59 59.08 6.84 5.75 19.86 19.42 31.76 35.31 12.73 17 24.45 36.24 34.64 42.51 17.37 10.68 44.63 17.22 69.87 36.38 58.37 44.32 66.57 67.61 81.12 74.94 18 9.06 41.35-4.11 129-6.13 61.9-1.41 120-5.69 140.17 43.23 7.32 110.83-123.44 146.06-213.13 151.2a3573.35 3573.35 0 0 0-498.49 95.13c-513.84 84.85-448 662.89 13.78 420.67 9.71-7.81 19.14-17.14 22.22-29.21-4.44-158.8-409.88 65.65-451.13 135-70.59 87.21-11.2 184.57 90.38 205.73 55.1 21.26 274.63 15.42 266.26-68.22-82.12-97.72-377 127.78-353.79 243.14 11.19 175.25 266.91 199.84 364.45 82 65.33-228.92-516.82 180.95-357.34 332.33 80.44 72.29 189.91-26.16 280.32-11.06 182.1 46.13 391.85 146.61 555.78 3.47 54.6-40.13 115.7-155.3 19-182.92a68.53 68.53 0 0 0-62.7 20.71c-4.89 5.14-9.37 18.22-18.09 16.58-6.24-1.71-10.27-10.26-14.92-14.39-14.47-12.86-35.77-17.46-54.52-13.45-55.75 11.77-62.11 79.38-27.8 117.2 16.87 21 40.15 35.76 62.93 49.59 14 6.17 32.9 28.18 48 15 20.68-22.69 76.38-82.55 39.77-109.73-14.1-6.73-32.91 4.1-41.37 15.35-4.29 7.74-8.18 1.09-11.29-3.36-21.34-26.16-60.52-9.84-48.58 24.2 9.68 24.35 33 42.7 56.36 53.14a3 3 0 0 0 3.85-.59c58.66-43.28 39-96 2.71-54.31-6.4 5.93-13.88-5-20.71-6-12-4.24-26.62 2-23.49 16.61 2.26 10.53 10.41 19.87 17.58 27.5 71.59 61.53 229.07 116.27 347.61 124.83l2 .26c50.92-4.31 100.83-21.27 152.49-11.72 89.53 13.9 95.23 115.51 45.68 174.23-61.21 50.71-130.08 45.6-161.53 139.48-26 170.15-130.1 100.47-231.65 184.5-25.54 22.79-43.24 56.17-41 90.32 1.42 21.39 10.39 42.75 5.66 63.66-21.5 83.77-179.91 36.55-176.86 136.39 5.73 37.6 66.89 64.08 47.35 106.25-13.92 25.68-55.64 19.32-75.14 41.07-16.54 15.24-18.45 46.92 7.89 51.7 20.72 1.46 36.17 9.09 49.79 25.25l-.51-.06c29.54 58.49-19.54 59.56-61.26 71.12-23.94 11.18-39.89 42-33.21 68 13.1 35.66 101.21 84.7 37 116.8-28.51 6.38-87.63 15.2-108.35-8.89-2.27-2.65-4.23-5.91-.75-10.38 38.78-21.5 91.64-18.49 135.3-23.57 33.59-.73 135.14-9.09 143 32.83.38 17.14-18 25.7-32.46 29-55.88 14.31-125.57 24.11-182.94 22.55-47.42-7.63-156.93 7.41-184.2-31.16-28.68-72 253.75-59.87 299.57-69 61.88-1.28 149.74-8.26 196.58 36.22 14.88 39.65-36.14 61.62-68.84 66-101.81 8.75-367.22 49.18-432.24-34.74a5.43 5.43 0 0 0-9.79 3.42c3 93 28 190.8 75.3 269.6 30.84 54.31 90.67 75.28 150.52 79.24 28.65 3.26 155.62 14.25 164.64-15-17.45-5.13-36.07-1.06-54.17.72-64.69 10.31-147.79-28.34-204.86 9.63-57.42 60.56 305.83 33.36 279 3.65-3.08-9.22-20.2-17.07-7.6-26.19 87.56-60.65 210.24-92.4 238.21-206.1 10-40.67-14.38-66.7-55.34-61.52-17.55 1.78-39.52 5.73-48.33 22.52-4.06 11.66 10.17 22.34 22.51 22 16.67.14 34.44-14.83 50.54-5.66 55 54.77-168.05 210.3-142 125.2 30.26-32.39 36.6-37.46 45.66-84.15 3.68-16.9 31.55-150.83 3.72-142.88-11 5-12.89 18.54-16.34 29.72-22.92 69.29-115.61 72.9-158.62 123.92-18.58 25.83-33.93 41.65-66.71 27.7-31.66-13.22-71.24-19.2-95.54-44.58-24.8-36.42 14.72-61.22 45.42-34.85 30.83 32.14 44.48-12.12 74.21-13.48 18 1.22 25.28 24.42 23.49 42.41-4.22 42.51-34.48 81.36-74.66 95.86-13.34 9.34-52.1-53.51-60.53-64.42" fill="none" stroke="#17161C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="7"/>
                <path id={styles.lineRunning} pathLength="1" d="M710.5 1.5c15.08 126.6 44.35 213.7 180.84 238.83 59.92 13.6 75.06 96.63 68.86 157.79-1.71 117.15-126.51 167-223.64 110.52-15.8-8.89-30.69-20-41.59-34.46-28.53-37.26-25-104.27 18.53-128.48 43.22-16.27 73.9 34.46 70 73.16C779.37 594.6 549.94 646.11 464.75 765c94.18-116.82 4.1-162.92-88.45-66.36-50.08 55-92.86 130.22-87.07 206.63 9.74 54.21 61 59 104 36.35a550.1 550.1 0 0 0 187.25-138.7c-27.75 24.45-69.51 49-66.6 91 8.51 45 51.45 45.2 72.6 8.46 22.31-27.45 37.84-78.44.31-99.34-17-8.35-41.79 2.14-43.36 21-1.61 19.27 20.77 33.55 39.94 31 13.24-1.75 24.78-8.8 35.3-17.46A175.53 175.53 0 0 1 651 816.13c46.12-23.3 67.85-52.82 110.75-86.84 5.75-4.56 13.07 3.23 8.16 8.69-78.08 98.55-237.26 261.44-235.12 388.94 27 83 214.62-145.69 164.07-213-11.28-20.88-41.76-30.64-60.53-19.6a10.62 10.62 0 0 0 2.54 19.34c11 3.06 25.59-.64 37-5.4 77.74-32.53 159.13-72.79 211-136.46 5.48-6.73-4.36-15.11-10.2-8.7a1526.75 1526.75 0 0 0-186 251.83c-20.33 34.92-44.66 85.4-25.71 121.35a27.82 27.82 0 0 0 26.73 14.72c90.25-6.66 159.21-120.07 149.94-209.59-2.9-29.55-22.53-65-51.74-59.69-20.55 5.18-22.72 30.18.81 29.29 35.76 2 66.17-21.73 98.89-33.18 19.64-5.13 85.41-49.13 75.07-70.61-3.3-3.58-8.4-2-12.33.08-41.05 17.37-62 97.07-10.53 112.12 48.47-1 148.9-66.62 145.72-119.62-11.92-15.64-43.27 25.54-50.25 35.38-27.9 39.29-11.24 84.17 39.75 75.68 27.21-3.1 49.5-16.7 77.77-34.46 69.36-65.48 162.22-19 81.74 117.7-46.78 79.21-131.81 158.78-208.6 210.35-222.12 133.11-482.5 227.89-741.21 249.65-36.9 1.14-85.24-10.66-87.61-47.5-1-15.33 7.29-29.64 31.16-38.25 120-49.14 684.39-208 790.76 128.17.1.31-.19-.25-.11.07 33 132.88-99.77 125.49-91.78 11.34.09-1.24.48-2.44.69-3.67 13.43-79 114.93-112.81 186.34-115.07 123.06 6.35 181.55 137.41 208.61 242.28 37.18 117.9 98.61 317 36.25 413.45-36 55.73-121.44 4.2-88.37-53.33 11.72-20.38 31.92-34 61.06-32.18 49.65 6.58 64.6 71.34 61.23 121.32-12.31 182.85-142.64 384.42-293.72 488.16l5.21-5.32-5.21 5.32c-28.52-32.88-77.67-37.25-121.07-33.93-157.38 12.06-307.58 97.6-398.24 226.8-9.81 14-19.13 28.84-22.57 45.56s0 35.79 12.63 47.29c8.69 7.92 20.49 11.37 32 13.78 96.46 20.18 196-16.43 281.54-65.41 72-41.23 139.72-92.71 187.72-160.37 16.12-22.72 30.23-48.16 32.32-75.94s-10.57-58.19-35.87-69.86c-11.17-5.15-23.71-6.32-36-7.42-64-5.76-129.64-11.37-191.52 5.89-39.37 11-75.61 30.84-111.06 51.19-51.73 29.71-103.29 61.35-144.5 104.47-39.24 41-69 100.78-48.53 153.75 14 36.25 49.52 61.14 87.25 70.49s77.54 5.11 115.56-3c138.3-29.52 264.78-111.36 348.36-225.43 21.69-29.6 41.35-65 34.94-101.12-6.38-35.9-38.08-63.23-72.79-74.42s-72.18-9.06-108.46-5.42c-75.51 7.58-152 21.72-218.3 58.63-49 27.3-90.64 66-130.22 105.82-35.11 35.29-70.9 75.65-75.53 125.2-4 43.37 16.75 84.84 38.09 122.81 54.32 96.68 118.77 191.85 211.72 252.34s220.39 79.11 314.33 20.16c31.16-19.56 57.1-46.38 80.81-74.51 24.06-28.54 46.58-59.49 57.53-95.18 15.76-51.42 6-106.77-3.91-159.63-17.27-92.27-34.85-185.54-69.21-268.44 45.55-26.05 102.13-33.39 151.88-16.7s91.26 58.09 105.09 108.71-.47 106.57-31.7 148.72-77.88 71.25-127.69 87.7c6.61-76.16-56.65-143.54-57.13-220a861.78 861.78 0 0 1 84.94-25c9.94-2.38 20.57-4.55 30.2-1.11 15.28 5.47 22.38 22.62 27.72 38 4.93 14.15 9.9 28.76 9.08 43.72-1.5 27-22 49.9-46.19 62s-51.61 15.36-78.44 18.44a810.17 810.17 0 0 0 20.61 116.2l-58.26-259.3 58.81 259.37c2.5 54.9-17.22 109.6-48.87 161.07-66 107.34-173.78 182.25-296.93 208.92-249.43 54-686.63 130.8-719.28-133.89 54.91-229.31 334-12.33 91.47 183.67-84.56 82.68-207.2 143.64-250.4 258.56-16.4 89.68 67.81 106.51 134.64 68.67 20.31-9.47 42.75-22.46 46.77-44.5 5.72-31.37-34.15-55.65-64.82-46.92-93.81 42.72-125 211-129.17 305.46-5.42 57.91 38.24 98.6 87.72 55 16.65-16.41 25-39.22 32.92-61.23l-25.59 52.13c10.92-39.28 35.9-88.67 84.6-80.3 27.66 4.75 54.27 23 65.34 49.21 9.5 22.54 6.19 50.19-10.11 68.76-5.88 6.71-13.54 12.3-22.73 12.9a19.43 19.43 0 0 1-14.87-5.12c-9.65-9.37-4.72-25.23 2.78-36a102.32 102.32 0 0 1 64.68-41.77c48.9-9 147 37.33 115.32 100.4-4 8.05-12.08 14.62-21.1 14.63-27.32 0-36.69-36.69-29.72-58 10.37-31.65 42-42.57 72.78-37.73 29.48 4.63 72.09 24.56 68.46 60.53-.6 5.92-2.66 11.9-6.89 16.09-20.73 20.53-33.34-27-36.61-39.6-11.44-44.18-22.08-109.75 19.24-143.22 30.88-25 78.9-16.22 106.71 9.27 22.09 20.25 32.35 52.74 31.82 82.24.33-18.46 13.31-42.2 23.26-56.82 27.8-40.9 84.68-41.37 122.41-14.32 90.13 64.64 2 190.8-56.4 243.86-14.54 13.21-31.1 25.7-49 33.9s-43.47 14.72-56.92-3.36c-14.66-19.7-28.52-40.67-38-63.38-7.24-17.3-13.14-37-12.62-55.93.66-23.79 20-40.19 42.31-24.29 16.21 11.55 25.25 32.26 23.25 52a.67.67 0 0 1-1.33-.1c.89-19.86 18.36-38.37 38.5-39 22.78-.73 43 20.06 44.88 42.77s-12 45-31.7 56.56c-3.18 1.87-7.24 3.54-10.24 0a7.6 7.6 0 0 1-1.59-3.58c-4.39-24.22 27.85-37.22 46.69-38.11 22.23-1.06 43.67 9.35 60.1 23.71 18.77 16.39 40.44 25.33 64.82 17.24 13-4.31 25.2-10.79 38.69-13.51 28.46-5.75 47.74 10.09 64.78 30.44 18.86 22.52 38.35 35.22 68.46 26.88 16.7-4.62 114-37.68 128.33-26.52 31.24 11.05 53.68 38.16 81.55 56.09l-1.44-.77c21.49 19.25 64 47.07 96.65 109.11 11.78 22.41 21.68 57.1 16.43 86.39-3.2 17.83-11.78 34.2-17.1 51.53-4.92 16-7.06 32.84-13.13 48.44s-17.22 30.51-21.35 44.8a475.51 475.51 0 0 0-70.15 231.88c-1.31 37.78 2.59 77.67 24 108.85s64.63 49.86 98.55 33.18 40.76-74.25 7-91.24c-39.73-20-80.07 26.18-97.86 66.94a765 765 0 0 0-63 272.91c-2.24 53 1.47 107.89 24.69 155.61 33.8 69.48 103 113.35 157.16 168.43 63.17 64.2 101.25 115.81 117 204.81l6.6 8.8c-.8 14.22-17.71 23.09-31.72 20.49s-25.14-13-34.73-23.58c-42.92-47.2-71.78-105.19-100.1-162.35-23.1-35.94-50.88-59.76-55.71-69.49-43.3-87.19-155.32-127.54-247.12-110.24-33 6.21-51.39-2.89-93-16.21-38.85-12.46-96.71-23.66-104.42 40-1.11 9.18-1.11 21.83-5.86 23.43-8.62 2.91-18.82-55.62-41.86-75.65-10.46-9.09-30.57-15.9-42.73-.72-16.41 20.48 43 134.94 53.7 154.55 4.33 7.92-3.18 11.53-9.24 12.61-2.9.51-13.9-13-27.43-29.18-14.69-17.63-31.52-36.82-34.64-41.43-10.59-15.65-37.82-52.6-56.87-60.89-46.65-20.28-47.2 20.37-21.66 59.09 16.45 24.93 37 47.64 33.49 48.27-4 .72-9.42-4.19-19.77-10.09-33-18.8-39.34-18.19-71.74-29.54-16.46-5.76-61.49-113.84-62.36-123.57s49.37-19.09 62.93-40 42.59-16.72 45.33-27 12.7-46.47 30-41.43-3.75 28.82-22.8 23.78-17-56.92-7.22-55.12 3.46 55.84-21.08 59.44-13.56-77.45-4.9-42.87-11.55 46.12-40.42 28.1 13.57-89.7 18.48-66.29-46.19 68.45-48.5 25.22 45.9-57.64 53.12-83.58 5.19-80.34-6.93-61.24c-26.36 41.5 57.26 65 49.65-22.34-1.44-16.57-10.68-13.69-29.16-10.45s-34.93-38.55-15.87-49.35 18.18 50.07-3.76 63c-30.28 17.9-31.72-126.31-116.92-156.35-39.84-14.05 3.18 93.67 29.45 85.74s-36.09-49.72-82-66.29-35.8 50.44.87 52.24c164.82 8.1 145.9 229.48 102.48 213.64-18.76-6.85 12.13-46.84 13.57-62.69s-1.73-25.22-20.79 8.29-10.68 78.53-4.33 101.59-2.59 23.06-3.75 59.08 26.85 52.6 25.69 36 8.67-30.62 19.92-35.67 33.74 35 25.41 16.58-43.88.72-27.14 2.52 17 18.73 27.43 18.73 239.76-118.34 244-120c12.21-4.72 35.11 131.95 29.2 157.77-2.62 11.43 12.08 5.07 14.1 1.11 3.76-7.37-13.3-12.38 9.53-23.78 36.22-18.08 75.87-112.76 15.3-144.46-26.85-14.05-39.84 22-42.15 18-1.76-3-16.32-20-15.85-7.93.58 14.77 7.19 24.86 10.94 20.18s.58-14.41-3.75-19.45c-14.22-16.56 63.12-84.39 94.69 13.69 27.54 85.54-62.35 157-65.68 134.19-2.15-14.8-16.08-13-15.59-8.3 1.16 10.81-14.58 87-12.84 94.23s31.75 30.26 62.35 29.9 65.44 12.4 70.73 15.49 5.78 10.09 23.39-6.85 32.62-11.88 23.67-9-51.39 40-55.14 49.71c-8.26 21.4 54.49-.48 47.63 6.13-6.35 6.12-26.84 14.77-43.3 8.64s-52.54-8.82-59.47-5.22c-6.15 3.2 17.8 20.48 25.4 20.72 5.81.18 16.94-1.59 29.74-1.45a196.71 196.71 0 0 1 39.55 5.05c25.41 5.76 27.72 19.81-9.53 6.84-25-8.69-44-5.44-57.45-4.68-6.61.38-12 4.36-15.87-2.16-11.84-19.82-58.32-34.59-62.94-49.72s-22.23-40.35-32-48.27-16.46-38.91-31.47-62.69c-18.23-28.86-61.5-36.83-36.86 26.4 5 12.72 9.51 22.54 12.9 15.75 8.08-16.21-15.45-64.9-20.07-50.85-1.63 4.95.29 15.82 5.08 29.45 14.14 40.27 48.68 106 54 125.16 4.41 16 21 33.9 35.51 48.27 7.33 7.29 13.82 14.65 18.48 18.38 12.89 10.33 87.76 75.65 77.65 76-8.13.29-33.52-12.19-45.61-15.85s-87.76-22.34-103.93-25.94-30.6-13-37.24-23.06-48.16-74.16-53.12-78.89c-5.94-5.67-21.51-16.14-41.86-27.38-30.79-17-65.74-33.37-81.13-16.58-20.78 22.7 24.64 39.86 32.05 33.51 4.63-4-25-31.37-35.51-24.14-11 7.57 24.83 32.43 30 35.31s90.37 67.37 103.07 74.57 31.18 21.26 19.05 19.46S596.53 5484 559.57 5475c-29.05-7.08-41.92-16.87-44.26-23.42-.5-1.4-1.11-2.95-.63-4 4.42-9.25 36.41 6.84 38.11 16.39 2.92 16.37-25.94-1.36-30.68-4.32a16.78 16.78 0 0 1-7.36-9.78c-2.61-10.7 5.07-24.53 17.4-26.07 17.32-2.16 155.32 103 166.86 111.68 17.59 13.17 148.16 26.44 148.1 25.94-2.47-21.58-121.2-29.71-140.3-48.63-9.82-9.73-73-108.44-96.71-135.82s-42.73-65.21-26.85-67.73c5.3-.84 21.35 36.69 16.16 45.75-4.33 7.57-17.32-17.29-21.94-32.78s1.21-26 25.7-19.82c7.84 2 17.32 8.47 25.69 18 17.74 20.24 34 51 43.59 59.08 6.84 5.75 19.86 19.42 31.76 35.31 12.73 17 24.45 36.24 34.64 42.51 17.37 10.68 44.63 17.22 69.87 36.38 58.37 44.32 66.57 67.61 81.12 74.94 18 9.06 41.35-4.11 129-6.13 61.9-1.41 120-5.69 140.17 43.23 7.32 110.83-123.44 146.06-213.13 151.2a3573.35 3573.35 0 0 0-498.49 95.13c-513.84 84.85-448 662.89 13.78 420.67 9.71-7.81 19.14-17.14 22.22-29.21-4.44-158.8-409.88 65.65-451.13 135-70.59 87.21-11.2 184.57 90.38 205.73 55.1 21.26 274.63 15.42 266.26-68.22-82.12-97.72-377 127.78-353.79 243.14 11.19 175.25 266.91 199.84 364.45 82 65.33-228.92-516.82 180.95-357.34 332.33 80.44 72.29 189.91-26.16 280.32-11.06 182.1 46.13 391.85 146.61 555.78 3.47 54.6-40.13 115.7-155.3 19-182.92a68.53 68.53 0 0 0-62.7 20.71c-4.89 5.14-9.37 18.22-18.09 16.58-6.24-1.71-10.27-10.26-14.92-14.39-14.47-12.86-35.77-17.46-54.52-13.45-55.75 11.77-62.11 79.38-27.8 117.2 16.87 21 40.15 35.76 62.93 49.59 14 6.17 32.9 28.18 48 15 20.68-22.69 76.38-82.55 39.77-109.73-14.1-6.73-32.91 4.1-41.37 15.35-4.29 7.74-8.18 1.09-11.29-3.36-21.34-26.16-60.52-9.84-48.58 24.2 9.68 24.35 33 42.7 56.36 53.14a3 3 0 0 0 3.85-.59c58.66-43.28 39-96 2.71-54.31-6.4 5.93-13.88-5-20.71-6-12-4.24-26.62 2-23.49 16.61 2.26 10.53 10.41 19.87 17.58 27.5 71.59 61.53 229.07 116.27 347.61 124.83l2 .26c50.92-4.31 100.83-21.27 152.49-11.72 89.53 13.9 95.23 115.51 45.68 174.23-61.21 50.71-130.08 45.6-161.53 139.48-26 170.15-130.1 100.47-231.65 184.5-25.54 22.79-43.24 56.17-41 90.32 1.42 21.39 10.39 42.75 5.66 63.66-21.5 83.77-179.91 36.55-176.86 136.39 5.73 37.6 66.89 64.08 47.35 106.25-13.92 25.68-55.64 19.32-75.14 41.07-16.54 15.24-18.45 46.92 7.89 51.7 20.72 1.46 36.17 9.09 49.79 25.25l-.51-.06c29.54 58.49-19.54 59.56-61.26 71.12-23.94 11.18-39.89 42-33.21 68 13.1 35.66 101.21 84.7 37 116.8-28.51 6.38-87.63 15.2-108.35-8.89-2.27-2.65-4.23-5.91-.75-10.38 38.78-21.5 91.64-18.49 135.3-23.57 33.59-.73 135.14-9.09 143 32.83.38 17.14-18 25.7-32.46 29-55.88 14.31-125.57 24.11-182.94 22.55-47.42-7.63-156.93 7.41-184.2-31.16-28.68-72 253.75-59.87 299.57-69 61.88-1.28 149.74-8.26 196.58 36.22 14.88 39.65-36.14 61.62-68.84 66-101.81 8.75-367.22 49.18-432.24-34.74a5.43 5.43 0 0 0-9.79 3.42c3 93 28 190.8 75.3 269.6 30.84 54.31 90.67 75.28 150.52 79.24 28.65 3.26 155.62 14.25 164.64-15-17.45-5.13-36.07-1.06-54.17.72-64.69 10.31-147.79-28.34-204.86 9.63-57.42 60.56 305.83 33.36 279 3.65-3.08-9.22-20.2-17.07-7.6-26.19 87.56-60.65 210.24-92.4 238.21-206.1 10-40.67-14.38-66.7-55.34-61.52-17.55 1.78-39.52 5.73-48.33 22.52-4.06 11.66 10.17 22.34 22.51 22 16.67.14 34.44-14.83 50.54-5.66 55 54.77-168.05 210.3-142 125.2 30.26-32.39 36.6-37.46 45.66-84.15 3.68-16.9 31.55-150.83 3.72-142.88-11 5-12.89 18.54-16.34 29.72-22.92 69.29-115.61 72.9-158.62 123.92-18.58 25.83-33.93 41.65-66.71 27.7-31.66-13.22-71.24-19.2-95.54-44.58-24.8-36.42 14.72-61.22 45.42-34.85 30.83 32.14 44.48-12.12 74.21-13.48 18 1.22 25.28 24.42 23.49 42.41-4.22 42.51-34.48 81.36-74.66 95.86-13.34 9.34-52.1-53.51-60.53-64.42" fill="none" stroke="#BE4346" strokeLinecap="round" strokeLinejoin="round" strokeWidth="7"/>
                {/* <circle className={styles.lineCircle} cx="178" cy="20" r="20" fill="red"/> */}
            </svg>
            </div>
        </div>
        <div className={styles.right}>
            <section className={styles.snapSection}>
                    <h2 className={styles.title}>
                        Hello I'm, <br />
                        <span>Dhia Dhaifullah</span>
                    </h2>
                <div className={styles.rightText}>
                    <h1>Fullstack Developer</h1>
                    <p>
                        I'm a Fullstack Developer based in Indonesia and I'm  studying at the Universitas Muhammadiyah Makassar. I have a passion for web development and love to create new things. I'm always looking for new opportunities to learn and grow. I'm full skilled in many programming languages and frameworks. I'm also a fast learner and a team player. I'm always looking for new opportunities to learn and grow. I'm full skilled in many programming languages and frameworks. I'm also a fast learner and a team player.
                    </p>
                </div>
            </section>
            </div>
        </div>
    </div>
  );
}

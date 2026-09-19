import { useEffect, useRef, useState } from "react";
import { motion, useAnimationFrame, useMotionValue } from "motion/react";
import { ASSETS } from "./data";

export interface WallCell {
  image?: string;
  video?: string;
  title?: string;
  isVideo?: boolean;
}

/** Distance (px) one full set of cells occupies, including the gap after it. */
function useSetWidth<T>(items: T[], gap: number) {
  const ref = useRef<HTMLDivElement>(null);
  const [w, setW] = useState(1);
  useEffect(() => {
    const measure = () => {
      const el = ref.current;
      if (!el || items.length === 0) return;
      const kids = el.children;
      if (!kids.length) return;
      const count = kids.length / 3; // three copies rendered
      let width = 0;
      for (let i = 0; i < count; i++) width += kids[i].getBoundingClientRect().width + gap;
      if (width > 0) setW(width);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [items, gap]);
  return { ref, w };
}

function WallRow({
  cells,
  speed,
  renderCell,
  reverse = false,
  gap = 20,
}: {
  cells: WallCell[];
  speed: number;
  renderCell: (c: WallCell, i: number) => React.ReactNode;
  reverse?: boolean;
  gap?: number;
}) {
  const { ref, w } = useSetWidth(cells, gap);
  const x = useMotionValue(0);
  const [hover, setHover] = useState(false);
  const [dragging, setDragging] = useState(false);
  const dir = reverse ? 1 : -1;

  useAnimationFrame((_, delta) => {
    if (hover || dragging) return;
    let next = x.get() + dir * (speed * (delta / 1000));
    if (w > 1) {
      if (dir < 0) {
        // moving left on [0..-w]
        next = -w + ((((next + w) % w) + w) % w);
      } else {
        // moving right on [w..0]
        next = -((((w - next) % w) + w) % w);
      }
      x.set(next);
    } else {
      x.set(next);
    }
  });

  return (
    <motion.div
      ref={ref}
      className="wall-row"
      style={{ x, gap }}
      drag="x"
      dragConstraints={{ left: -w, right: 0 }}
      dragElastic={0.06}
      onDragStart={() => setDragging(true)}
      onDragEnd={() => {
        setDragging(false);
        // snap back into the looping band so auto-scroll stays seamless
        const cur = x.get();
        const snapped = -w + ((((cur + w) % w) + w) % w);
        x.set(snapped);
      }}
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
    >
      {[0, 1, 2].map((copy) =>
        cells.map((c, i) => <div key={`${copy}-${i}`}>{renderCell(c, i)}</div>),
      )}
    </motion.div>
  );
}

export function LovedWall() {
  const vids = [1, 2, 3, 4, 5, 6].map((i) => `/videos/clip-${String(i).padStart(2, "0")}.mp4`);
  const titles = ["Kitchen refit", "Patio build", "Bathroom refresh", "Loft conversion", "Garden wall", "Full repaint"];
  const rowA: WallCell[] = vids.slice(0, 3).map((v, i) => ({ video: v, title: titles[i], isVideo: true }));
  const rowB: WallCell[] = vids.slice(3).map((v, i) => ({ video: v, title: titles[i + 3], isVideo: true }));

  const renderVideo = (c: WallCell) => (
    <figure className="wall-item">
      <video src={c.video} poster={ASSETS.wallImages[0]} muted loop playsInline autoPlay preload="metadata" />
      <div className="tag">{c.title}</div>
    </figure>
  );

  return (
    <div className="wall">
      <div className="wall-fade l" />
      <div className="wall-fade r" />
      <WallRow cells={rowA} speed={70} renderCell={renderVideo} />
      <WallRow cells={rowB} speed={55} renderCell={renderVideo} reverse />
    </div>
  );
}

export function InstaWall() {
  const imgs = ASSETS.wallImages;
  const rowA: WallCell[] = imgs.slice(0, 9).map((image, i) => ({ image, title: `@handgrid · ${i + 1}` }));
  const rowB: WallCell[] = imgs.slice(9).map((image, i) => ({ image, title: `@handgrid · ${i + 10}` }));

  const renderImg = (c: WallCell) => (
    <figure className="wall-item">
      <img src={c.image} alt={c.title} loading="lazy" />
      <div className="tag">{c.title}</div>
    </figure>
  );

  return (
    <div className="wall">
      <div className="wall-fade l" />
      <div className="wall-fade r" />
      <WallRow cells={rowA} speed={80} renderCell={renderImg} />
      <WallRow cells={rowB} speed={64} renderCell={renderImg} reverse />
    </div>
  );
}

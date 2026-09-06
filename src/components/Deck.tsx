import { useCallback, useEffect, useRef, useState } from 'react';
import { slides, deckMeta } from '@/data/slides';
import Slide from './Slide';

const last = slides.length - 1;

function indexFromHash(): number {
  if (typeof window === 'undefined') return 0;
  const id = window.location.hash.replace('#', '');
  const found = slides.findIndex((s) => s.id === id);
  return found > -1 ? found : 0;
}

export default function Deck() {
  const [i, setI] = useState(0);
  const touch = useRef<number | null>(null);

  const go = useCallback((next: number) => {
    const clamped = Math.max(0, Math.min(last, next));
    setI(clamped);
    const id = slides[clamped]!.id;
    if (typeof window !== 'undefined') {
      window.history.replaceState(null, '', `#${id}`);
    }
  }, []);

  useEffect(() => {
    setI(indexFromHash());
    const onHash = () => setI(indexFromHash());
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      switch (e.key) {
        case 'ArrowRight':
        case 'PageDown':
        case ' ':
        case 'j':
          e.preventDefault();
          setI((cur) => {
            const n = Math.min(last, cur + 1);
            window.history.replaceState(null, '', `#${slides[n]!.id}`);
            return n;
          });
          break;
        case 'ArrowLeft':
        case 'PageUp':
        case 'k':
          e.preventDefault();
          setI((cur) => {
            const n = Math.max(0, cur - 1);
            window.history.replaceState(null, '', `#${slides[n]!.id}`);
            return n;
          });
          break;
        case 'Home':
          e.preventDefault();
          go(0);
          break;
        case 'End':
          e.preventDefault();
          go(last);
          break;
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [go]);

  const onTouchStart = (e: React.TouchEvent) => {
    touch.current = e.changedTouches[0]!.clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touch.current === null) return;
    const dx = e.changedTouches[0]!.clientX - touch.current;
    if (Math.abs(dx) > 55) go(dx < 0 ? i + 1 : i - 1);
    touch.current = null;
  };

  const current = slides[i]!;

  return (
    <main
      className="relative min-h-[100svh] w-full overflow-x-hidden"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* running head */}
      <header className="deck-chrome pointer-events-none fixed left-0 right-0 top-0 z-20 flex items-center justify-between gap-4 px-5 pt-4 sm:px-10 sm:pt-5 lg:px-16">
        <span className="glasspane pill flex items-center gap-2 px-3 py-1.5">
          <img src="/jelly-icon.svg" alt="" aria-hidden="true" className="h-4 w-4" />
          <span className="eyebrow">{deckMeta.company}</span>
        </span>
        <span className="glasspane pill hidden px-3 py-1.5 sm:block">
          <span className="eyebrow">{deckMeta.audience}</span>
        </span>
      </header>

      {slides.map((s, n) => (
        <section
          key={s.id}
          id={s.id}
          data-active={n === i ? 'true' : 'false'}
          aria-hidden={n === i ? undefined : true}
          className="deck-slide min-h-[100svh] w-full items-center"
        >
          <Slide slide={s} />
        </section>
      ))}

      {/* foot: progress, counter, controls */}
      <footer className="deck-chrome fixed bottom-0 left-0 right-0 z-20 border-t border-[rgba(255,255,255,0.6)] bg-white/40 backdrop-blur-md">
        <div
          className="h-[3px] rounded-r-full bg-jelly transition-[width] duration-500 ease-out"
          style={{ width: `${((i + 1) / slides.length) * 100}%` }}
        />
        <div className="flex items-center justify-between gap-3 px-4 py-2 sm:px-10 lg:px-16">
          <div className="min-w-0">
            <p className="eyebrow m-0 truncate text-[0.62rem]">{current.nav}</p>
            <p className="font-display m-0 text-[1rem] font-normal tracking-[-0.01em] text-ink">
              {String(i + 1).padStart(2, '0')}
              <span className="text-ink-faint"> / {String(slides.length).padStart(2, '0')}</span>
            </p>
          </div>

          <nav className="hidden items-center gap-2 md:flex">
            {slides.map((s, n) => (
              <button
                key={s.id}
                onClick={() => go(n)}
                aria-label={s.nav}
                aria-current={n === i ? 'true' : undefined}
                className={`rounded-full transition-all duration-200 ${
                  n === i
                    ? 'h-[10px] w-[10px] bg-ink'
                    : 'h-[7px] w-[7px] bg-ink/25 hover:bg-jelly'
                }`}
              />
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => go(i - 1)}
              disabled={i === 0}
              className="pill min-h-[44px] min-w-[44px] border border-[rgba(26,31,43,0.18)] bg-white/50 px-5 text-[0.85rem] text-ink transition-colors duration-150 hover:bg-white/80 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white/50"
            >
              Prev
            </button>
            <button
              onClick={() => go(i + 1)}
              disabled={i === last}
              className="pill min-h-[44px] min-w-[44px] border border-transparent bg-ink px-5 text-[0.85rem] text-white transition-colors duration-150 hover:bg-jelly-ink disabled:cursor-not-allowed disabled:opacity-30"
            >
              Next
            </button>
          </div>
        </div>
      </footer>
    </main>
  );
}

import Frame from './Frame';
import { ink } from '@/lib/blanks';
import type { Hire } from '@/data/slides';

type Props = {
  eyebrow: string;
  title: string;
  standfirst: string;
  hires: Hire[];
  footnote?: string;
};

export default function HiringSlide({ eyebrow, title, standfirst, hires, footnote }: Props) {
  return (
    <Frame eyebrow={eyebrow} title={title} standfirst={standfirst} footnote={footnote}>
      <div className="border-t border-ink">
        <div className="hidden grid-cols-[1.1fr_2fr_0.7fr] gap-6 border-b border-rule py-3 sm:grid">
          <span className="eyebrow">Seat</span>
          <span className="eyebrow">Why it exists</span>
          <span className="eyebrow text-right">When</span>
        </div>
        {hires.map((h, i) => (
          <div
            key={i}
            className="grid grid-cols-1 gap-1 border-b border-rule py-4 transition-colors duration-200 hover:bg-paper-deep sm:grid-cols-[1.1fr_2fr_0.7fr] sm:items-baseline sm:gap-6"
          >
            <h3 className="font-display m-0 text-[1.3rem] font-light leading-tight text-ink">
              {ink(h.role)}
            </h3>
            <p className="m-0 max-w-[52ch] text-[0.95rem] leading-[1.5] text-ink-soft">
              {ink(h.why)}
            </p>
            <p className="m-0 text-[0.8rem] font-semibold uppercase tracking-[0.12em] text-jelly sm:text-right">
              {ink(h.when)}
            </p>
          </div>
        ))}
      </div>
    </Frame>
  );
}

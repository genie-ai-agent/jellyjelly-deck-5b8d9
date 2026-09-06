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
      <div className="glasspane grid gap-x-10 gap-y-0 p-4 sm:grid-cols-2 sm:p-5">
        {hires.map((h, i) => (
          <div
            key={h.name}
            className="group flex items-baseline gap-4 border-b border-rule py-3 last:border-b-0 sm:[&:nth-last-child(2)]:border-b-0"
          >
            <span className="font-display text-[0.8rem] font-light text-ink-faint">
              {String(i + 1).padStart(2, '0')}
            </span>
            <div className="min-w-0">
              <h3 className="font-display m-0 text-[1.2rem] font-light leading-tight text-ink">
                {h.name}
              </h3>
              <p className="m-0 mt-1 text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-jelly-ink">
                {ink(h.role)}
              </p>
              <p className="m-0 mt-1 max-w-[34ch] text-[0.9rem] leading-[1.45] text-ink-soft">
                {ink(h.why)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Frame>
  );
}

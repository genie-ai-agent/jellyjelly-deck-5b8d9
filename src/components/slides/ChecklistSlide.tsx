import Frame from './Frame';
import { ink } from '@/lib/blanks';
import type { CheckItem } from '@/data/slides';

type Props = {
  eyebrow: string;
  title: string;
  standfirst: string;
  items: CheckItem[];
  footnote?: string;
};

const mark: Record<CheckItem['status'], { glyph: string; label: string; cls: string }> = {
  in: { glyph: '\u25c6', label: 'in the deck', cls: 'text-jelly' },
  part: { glyph: '\u25c7', label: 'half there', cls: 'text-ink-soft' },
  gap: { glyph: '\u2715', label: 'missing', cls: 'text-jelly-deep' },
};

export default function ChecklistSlide({
  eyebrow,
  title,
  standfirst,
  items,
  footnote,
}: Props) {
  const gaps = items.filter((i) => i.status !== 'in').length;

  return (
    <Frame eyebrow={eyebrow} title={title} standfirst={standfirst} footnote={footnote}>
      <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:gap-12">
        <ol className="m-0 list-none border-t border-rule p-0">
          {items.map((item) => {
            const m = mark[item.status];
            return (
              <li
                key={item.slide}
                className="grid grid-cols-[1.4rem_1fr] items-baseline gap-x-3 gap-y-1 border-b border-rule py-3 sm:grid-cols-[1.4rem_15rem_1fr] sm:gap-x-5"
              >
                <span className={`text-[0.85rem] leading-none ${m.cls}`} aria-hidden="true">
                  {m.glyph}
                </span>
                <span className="font-display text-[1.02rem] font-normal leading-tight text-ink">
                  {item.slide}
                  <span className="sr-only"> ({m.label})</span>
                </span>
                <span className="col-start-2 text-[0.85rem] leading-[1.5] text-ink-soft sm:col-start-3">
                  {ink(item.note)}
                </span>
              </li>
            );
          })}
        </ol>

        <aside className="self-start border-t-2 border-ink pt-4 lg:min-w-[13rem]">
          <p className="eyebrow m-0">Still open</p>
          <p className="font-display m-0 mt-1 text-[3.2rem] font-light leading-none text-ink">
            {gaps}
            <span className="text-ink-faint">/{items.length}</span>
          </p>
          <p className="mt-3 max-w-[22ch] text-[0.82rem] leading-[1.5] text-ink-soft">
            YC&rsquo;s order, checked against this deck. Diamonds are written, outlines are half
            there, crosses are not on the page yet.
          </p>
        </aside>
      </div>
    </Frame>
  );
}

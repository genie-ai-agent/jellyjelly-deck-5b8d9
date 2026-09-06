import Frame from './Frame';
import { ink } from '@/lib/blanks';
import type { SpendItem } from '@/data/slides';

type Props = {
  eyebrow: string;
  title: string;
  standfirst: string;
  items: SpendItem[];
  footnote?: string;
};

export default function SpendSlide({ eyebrow, title, standfirst, items, footnote }: Props) {
  const set = items.filter((i) => !i.value.includes('[')).length;

  return (
    <Frame eyebrow={eyebrow} title={title} standfirst={standfirst} footnote={footnote}>
      <ol className="glasspane m-0 grid list-none gap-x-12 gap-y-0 p-4 sm:grid-cols-2 sm:p-5">
        {items.map((item, n) => (
          <li
            key={item.label}
            className="group border-b border-rule py-[0.8rem] last:border-b-0 sm:[&:nth-last-child(2)]:border-b-0"
          >
            <div className="flex items-baseline justify-between gap-4">
              <p className="font-display m-0 text-[1.05rem] font-light leading-tight text-ink">
                <span className="mr-2 text-[0.7rem] text-ink-faint">
                  {String(n + 1).padStart(2, '0')}
                </span>
                {ink(item.label)}
              </p>
              <p
                className={`font-display m-0 shrink-0 font-light leading-none ${
                  item.value.includes('[')
                    ? 'text-[0.9rem] text-ink'
                    : 'text-[1.35rem] text-jelly-ink'
                }`}
              >
                {ink(item.value)}
              </p>
            </div>
            <p className="m-0 mt-1 max-w-[46ch] text-[0.8rem] leading-snug text-ink-faint">
              {ink(item.detail)}
            </p>
          </li>
        ))}
      </ol>

      <p className="mt-5 text-[0.78rem] leading-snug text-ink-faint">
        {set} of {items.length} lines have a number on them. The rest are open on purpose.
      </p>
    </Frame>
  );
}

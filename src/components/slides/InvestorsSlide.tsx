import Frame from './Frame';
import { ink } from '@/lib/blanks';
import type { InvestorGroup } from '@/data/slides';

type Props = {
  eyebrow: string;
  title: string;
  standfirst: string;
  groups: InvestorGroup[];
  footnote?: string;
};

export default function InvestorsSlide({
  eyebrow,
  title,
  standfirst,
  groups,
  footnote,
}: Props) {
  return (
    <Frame eyebrow={eyebrow} title={title} standfirst={standfirst} footnote={footnote}>
      <ul className="m-0 grid list-none gap-0 p-0 sm:grid-cols-3">
        {groups.map((g, i) => (
          <li
            key={g.heading}
            className="border-t-2 border-ink py-5 sm:mr-5 sm:last:mr-0"
          >
            <span className="eyebrow block text-[0.6rem]">Kind {String(i + 1).padStart(2, '0')}</span>
            <h3 className="font-display mt-2 text-[1.55rem] font-light italic leading-none text-ink">
              {g.heading}
            </h3>
            <p className="mt-3 max-w-[34ch] text-[0.92rem] leading-[1.5] text-ink-soft">
              {ink(g.brief)}
            </p>
            <ul className="m-0 mt-4 list-none space-y-1.5 border-t border-rule p-0 pt-3">
              {g.names.map((n, j) => (
                <li key={j} className="text-[0.9rem] text-ink">
                  {ink(n)}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Frame>
  );
}

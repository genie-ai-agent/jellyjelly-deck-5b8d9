import Frame from './Frame';
import { ink } from '@/lib/blanks';
import type { MoneyRow } from '@/data/slides';

type Props = {
  eyebrow: string;
  title: string;
  standfirst: string;
  terms: MoneyRow[];
  use: MoneyRow[];
  footnote?: string;
};

export default function RoundSlide({
  eyebrow,
  title,
  standfirst,
  terms,
  use,
  footnote,
}: Props) {
  return (
    <Frame eyebrow={eyebrow} title={title} standfirst={standfirst} footnote={footnote}>
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-14">
        <dl className="m-0 border-t border-ink">
          {terms.map((t) => (
            <div
              key={t.label}
              className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-rule py-4"
            >
              <dt className="eyebrow m-0">{t.label}</dt>
              <dd className="font-display m-0 text-[clamp(1.4rem,4vw,2rem)] font-light leading-none text-ink">
                {ink(t.value)}
              </dd>
              {t.note ? (
                <p className="m-0 w-full text-[0.82rem] italic text-ink-faint">{ink(t.note)}</p>
              ) : null}
            </div>
          ))}
        </dl>

        <div>
          <p className="eyebrow m-0">Where it goes</p>
          <ul className="m-0 mt-4 list-none space-y-4 p-0">
            {use.map((u) => (
              <li key={u.label}>
                <div className="flex items-baseline justify-between gap-4">
                  <span className="text-[0.95rem] text-ink">{ink(u.label)}</span>
                  <span className="font-display text-[1.1rem] font-light text-jelly">
                    {ink(u.value)}
                  </span>
                </div>
                <div className="mt-2 h-[3px] w-full bg-paper-deep">
                  <div className="h-full w-1/3 bg-ink/25" />
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-[0.78rem] italic text-ink-faint">
            Bars fill in once the split is real.
          </p>
        </div>
      </div>
    </Frame>
  );
}

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

function fill(value: string) {
  const n = Number.parseFloat(value.replace('%', ''));
  return value.includes('[') || !Number.isFinite(n) ? null : Math.max(2, Math.min(100, n));
}

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
          {terms.map((t) => {
            const set = !t.value.includes('[');
            return (
              <div
                key={t.label}
                className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-rule py-[0.85rem]"
              >
                <dt className="eyebrow m-0">{t.label}</dt>
                <dd
                  className={`font-display m-0 font-light leading-none ${
                    set
                      ? 'text-[clamp(1.6rem,4.4vw,2.3rem)] text-jelly'
                      : 'text-[clamp(1.2rem,3.2vw,1.6rem)] text-ink'
                  }`}
                >
                  {ink(t.value)}
                </dd>
                {t.note ? (
                  <p className="m-0 w-full text-[0.8rem] italic text-ink-faint">{ink(t.note)}</p>
                ) : null}
              </div>
            );
          })}
        </dl>

        <div>
          <p className="eyebrow m-0">Where it goes</p>
          <ul className="m-0 mt-4 list-none space-y-4 p-0">
            {use.map((u) => {
              const w = fill(u.value);
              return (
                <li key={u.label}>
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="text-[0.95rem] text-ink">{ink(u.label)}</span>
                    <span className="font-display text-[1.1rem] font-light text-jelly">
                      {ink(u.value)}
                    </span>
                  </div>
                  <div className="mt-2 h-[3px] w-full bg-paper-deep">
                    <div
                      className={w ? 'h-full bg-jelly' : 'h-full w-1/4 bg-ink/20'}
                      style={w ? { width: `${w}%` } : undefined}
                    />
                  </div>
                </li>
              );
            })}
          </ul>
          <p className="mt-4 text-[0.78rem] italic leading-snug text-ink-faint">
            Twelve people on payroll is the plan. The split fills in the moment you name the
            salary floor.
          </p>
        </div>
      </div>
    </Frame>
  );
}

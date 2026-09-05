import Frame from './Frame';
import { ink } from '@/lib/blanks';
import type { EquityRow, MoneyRow } from '@/data/slides';

type Props = {
  eyebrow: string;
  title: string;
  standfirst: string;
  rows: EquityRow[];
  terms: MoneyRow[];
  footnote?: string;
};

function isSet(grant: string) {
  return !grant.includes('[');
}

export default function EquitySlide({
  eyebrow,
  title,
  standfirst,
  rows,
  terms,
  footnote,
}: Props) {
  return (
    <Frame eyebrow={eyebrow} title={title} standfirst={standfirst} footnote={footnote}>
      <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:gap-14">
        <dl className="m-0 border-t border-ink">
          {rows.map((r) => (
            <div
              key={r.name}
              className={`flex items-baseline justify-between gap-4 border-b border-rule py-[0.4rem] transition-colors duration-200 hover:bg-paper-deep ${
                isSet(r.grant) ? 'bg-paper-deep/70' : ''
              }`}
            >
              <dt className="m-0 min-w-0">
                <span className="font-display block text-[1.02rem] font-light leading-tight text-ink">
                  {r.name}
                </span>
                <span className="block text-[0.72rem] italic leading-tight text-ink-faint">
                  {ink(r.note)}
                </span>
              </dt>
              <dd
                className={`font-display m-0 shrink-0 leading-none ${
                  isSet(r.grant)
                    ? 'text-[1.75rem] font-light text-jelly'
                    : 'text-[1.02rem] font-light text-ink'
                }`}
              >
                {ink(r.grant)}
              </dd>
            </div>
          ))}
        </dl>

        <div>
          <p className="eyebrow m-0">Terms behind the table</p>
          <ul className="m-0 mt-3 list-none space-y-2 p-0">
            {terms.map((t) => (
              <li key={t.label} className="border-b border-rule pb-2">
                <p className="eyebrow m-0 text-[0.6rem]">{t.label}</p>
                <p className="font-display m-0 mt-1 text-[1rem] font-light text-ink">
                  {ink(t.value)}
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-[0.76rem] italic text-ink-faint">
            Eight grants, one of them settled. The table totals itself once the rest land.
          </p>
        </div>
      </div>
    </Frame>
  );
}

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

function pct(grant: string) {
  const n = Number.parseFloat(grant.replace('%', ''));
  return Number.isFinite(n) ? n : 0;
}

function groupRows(rows: EquityRow[]) {
  const out: { heading: string; items: EquityRow[] }[] = [];
  for (const r of rows) {
    const heading = r.group ?? 'Grants';
    const last = out[out.length - 1];
    if (last && last.heading === heading) last.items.push(r);
    else out.push({ heading, items: [r] });
  }
  return out;
}

function Row({ r }: { r: EquityRow }) {
  const set = isSet(r.grant);
  return (
    <div className="flex items-baseline justify-between gap-3 border-b border-rule py-[0.4rem] last:border-b-0">
      <dt className="m-0 min-w-0">
        <span className="font-display block text-[0.98rem] font-light leading-tight text-ink">
          {r.name}
        </span>
        <span className="block text-[0.68rem] leading-tight text-ink-faint">
          {ink(r.note)}
        </span>
      </dt>
      <dd
        className={`font-display m-0 shrink-0 leading-none ${
          set
            ? pct(r.grant) >= 5
              ? 'text-[1.6rem] font-light text-jelly-ink'
              : 'text-[1.15rem] font-light text-ink'
            : 'text-[0.95rem] font-light text-ink'
        }`}
      >
        {ink(r.grant)}
      </dd>
    </div>
  );
}

export default function EquitySlide({
  eyebrow,
  title,
  standfirst,
  rows,
  terms,
  footnote,
}: Props) {
  const groups = groupRows(rows);
  const allocated = rows.reduce((sum, r) => sum + (isSet(r.grant) ? pct(r.grant) : 0), 0);
  const openCount = rows.filter((r) => !isSet(r.grant)).length;
  const half = Math.ceil(groups.length / 2);
  const columns = [groups.slice(0, half), groups.slice(half)];

  return (
    <Frame eyebrow={eyebrow} title={title} standfirst={standfirst} footnote={footnote}>
      <div className="grid gap-8 lg:grid-cols-[1fr_1fr_0.82fr] lg:gap-12">
        {columns.map((col, ci) => (
          <div key={ci} className="glasspane space-y-5 self-start p-4 sm:p-5">
            {col.map((g) => (
              <div key={g.heading}>
                <p className="eyebrow m-0 text-[0.6rem]">{g.heading}</p>
                <dl className="m-0 mt-2 border-t border-rule">
                  {g.items.map((r) => (
                    <Row key={r.name} r={r} />
                  ))}
                </dl>
              </div>
            ))}
          </div>
        ))}

        <div className="glasspane self-start p-4 sm:p-5">
          <p className="eyebrow m-0 text-[0.6rem]">Allocated on this page</p>
          <p className="font-display m-0 mt-1 text-[clamp(2.2rem,7vw,3.2rem)] font-light leading-none text-jelly-ink">
            {allocated}%
          </p>
          <p className="m-0 mt-2 text-[0.74rem] leading-snug text-ink-faint">
            10% to Andrew, 1% each to the other eleven. {openCount} row
            {openCount === 1 ? '' : 's'} still open.
          </p>

          <ul className="m-0 mt-5 list-none space-y-2 p-0">
            {terms.map((t) => (
              <li key={t.label} className="border-b border-rule pb-2">
                <p className="eyebrow m-0 text-[0.58rem]">{t.label}</p>
                <p className="font-display m-0 mt-1 text-[0.98rem] font-light text-ink">
                  {ink(t.value)}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Frame>
  );
}

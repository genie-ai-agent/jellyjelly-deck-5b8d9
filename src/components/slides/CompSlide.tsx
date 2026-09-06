import Frame from './Frame';
import { ink } from '@/lib/blanks';
import type { CompBand, MoneyRow } from '@/data/slides';

type Props = {
  eyebrow: string;
  title: string;
  standfirst: string;
  bands: CompBand[];
  terms: MoneyRow[];
  footnote?: string;
};

/** "$300k" -> 300000. Anything bracketed or unparseable -> null. */
function dollars(band: string): number | null {
  if (band.includes('[')) return null;
  const m = band.match(/([\d.]+)\s*([km])?/i);
  if (!m) return null;
  const n = Number.parseFloat(m[1]!);
  if (!Number.isFinite(n)) return null;
  const unit = (m[2] ?? '').toLowerCase();
  return unit === 'm' ? n * 1_000_000 : unit === 'k' ? n * 1_000 : n;
}

function money(n: number): string {
  return n >= 1_000_000
    ? `$${(n / 1_000_000).toFixed(n % 1_000_000 === 0 ? 0 : 1)}M`
    : `$${Math.round(n / 1_000)}k`;
}

export default function CompSlide({
  eyebrow,
  title,
  standfirst,
  bands,
  terms,
  footnote,
}: Props) {
  const lines = bands.map((b) => {
    const per = dollars(b.band);
    return { ...b, per, subtotal: per === null ? null : per * b.people.length };
  });
  const headcount = lines.reduce((n, l) => n + (l.per === null ? 0 : l.people.length), 0);
  const open = lines.reduce((n, l) => n + (l.per === null ? l.people.length : 0), 0);
  const total = lines.reduce((n, l) => n + (l.subtotal ?? 0), 0);

  return (
    <Frame eyebrow={eyebrow} title={title} standfirst={standfirst} footnote={footnote}>
      <div className="grid gap-8 lg:grid-cols-[1fr_0.62fr] lg:gap-14">
        <div className="space-y-7">
          {lines.map((l) => (
            <div key={l.band} className="glasspane p-4 sm:p-5">
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                <p className="font-display m-0 text-[clamp(2rem,6vw,2.9rem)] font-light leading-none text-jelly-ink">
                  {ink(l.band)}
                  <span className="text-[0.9rem] tracking-normal text-ink-faint"> / yr each</span>
                </p>
                <p className="eyebrow m-0 text-[0.6rem]">
                  {l.people.length} {l.people.length === 1 ? 'person' : 'people'}
                  {l.subtotal !== null ? ` \u00b7 ${money(l.subtotal)} / yr` : ''}
                </p>
              </div>

              <p className="m-0 mt-2 max-w-[52ch] text-[0.86rem] leading-snug text-ink-soft">
                {ink(l.basis)}
              </p>

              <ul className="m-0 mt-3 flex list-none flex-wrap gap-2 p-0">
                {l.people.map((p) => (
                  <li
                    key={p}
                    className="pill border border-[rgba(255,255,255,0.7)] bg-white/55 px-[0.75rem] py-[0.38rem] text-[0.82rem] leading-none text-ink transition-colors duration-150 hover:border-jelly hover:text-jelly-ink"
                  >
                    {ink(p)}
                  </li>
                ))}
              </ul>

              {l.note ? (
                <p className="m-0 mt-2 text-[0.74rem] leading-snug text-ink-faint">
                  {ink(l.note)}
                </p>
              ) : null}
            </div>
          ))}
        </div>

        <div className="glasspane self-start p-4 sm:p-5">
          <p className="eyebrow m-0 text-[0.6rem]">Base payroll, year one</p>
          <p className="font-display m-0 mt-1 text-[clamp(2.4rem,8vw,3.4rem)] font-light leading-none text-jelly-ink">
            {money(total)}
          </p>
          <p className="m-0 mt-2 text-[0.74rem] leading-snug text-ink-faint">
{headcount} salaries priced, {open} still open. Base only: no taxes, benefits or bonus in
            that number yet.
          </p>

          <ul className="m-0 mt-5 list-none space-y-2 p-0">
            {terms.map((t) => (
              <li key={t.label} className="border-b border-rule pb-2">
                <p className="eyebrow m-0 text-[0.58rem]">{t.label}</p>
                <p className="font-display m-0 mt-1 text-[0.98rem] font-light leading-snug text-ink">
                  {ink(t.value)}
                </p>
                {t.note ? (
                  <p className="m-0 mt-1 text-[0.72rem] leading-snug text-ink-faint">
                    {ink(t.note)}
                  </p>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Frame>
  );
}

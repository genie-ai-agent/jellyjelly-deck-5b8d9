import Frame from './Frame';
import { ink } from '@/lib/blanks';
import type { ResidenceBrief, Comp } from '@/data/slides';

type Props = {
  eyebrow: string;
  title: string;
  standfirst: string;
  chooser: string;
  briefs: ResidenceBrief[];
  comps: Comp[];
  compsNote: string;
  footnote?: string;
};

export default function ResidenceSlide({
  eyebrow,
  title,
  standfirst,
  chooser,
  briefs,
  comps,
  compsNote,
  footnote,
}: Props) {
  return (
    <Frame eyebrow={eyebrow} title={title} standfirst={standfirst} footnote={footnote}>
      <p className="m-0 -mt-4 mb-5 border-y border-ink py-[0.55rem] text-[0.85rem] leading-snug text-ink-soft">
        {ink(chooser)}
      </p>

      <div className="grid gap-8 lg:grid-cols-[1fr_1fr_0.85fr] lg:gap-12">
        {briefs.map((b) => (
          <div key={b.city} className="border-t border-ink pt-4">
            <p className="eyebrow m-0 text-[0.6rem]">Residence</p>
            <h3 className="font-display m-0 mt-1 text-[clamp(1.5rem,4.4vw,2rem)] font-light leading-none text-ink">
              {ink(b.city)}
            </h3>
            <p className="m-0 mt-2 max-w-[40ch] text-[0.84rem] italic leading-snug text-ink-soft">
              {ink(b.anchor)}
            </p>

            <p className="font-display m-0 mt-3 text-[1.45rem] font-light leading-none text-jelly">
              {ink(b.estimate)}
            </p>
            <p className="m-0 mt-1 text-[0.74rem] italic leading-snug text-ink-faint">
              {ink(b.estimateNote)}
            </p>

            <ul className="m-0 mt-4 list-none space-y-[0.5rem] p-0">
              {b.constraints.map((c) => (
                <li
                  key={c}
                  className="flex gap-2 border-b border-rule pb-[0.5rem] text-[0.82rem] leading-snug text-ink"
                >
                  <span className="mt-[0.45em] h-[5px] w-[5px] shrink-0 rotate-45 bg-jelly" aria-hidden="true" />
                  <span>{ink(c)}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="border-t border-ink pt-4">
          <p className="eyebrow m-0 text-[0.6rem]">What is actually on the market</p>
          <ul className="m-0 mt-3 list-none space-y-[0.45rem] p-0">
            {comps.map((c) => (
              <li key={`${c.name}-${c.size}`} className="border-b border-rule pb-[0.45rem]">
                <div className="flex items-baseline justify-between gap-3">
                  <p className="font-display m-0 text-[0.98rem] font-light leading-tight text-ink">
                    {ink(c.name)}
                  </p>
                  <p className="font-display m-0 shrink-0 text-[0.98rem] font-light leading-none text-jelly">
                    {ink(c.price)}
                  </p>
                </div>
                <p className="m-0 mt-1 text-[0.74rem] leading-snug text-ink-faint">
                  {ink(c.size)} · {ink(c.where)}
                </p>
              </li>
            ))}
          </ul>
          <p className="m-0 mt-2 text-[0.72rem] italic leading-snug text-ink-faint">
            {ink(compsNote)}
          </p>
        </div>
      </div>
    </Frame>
  );
}

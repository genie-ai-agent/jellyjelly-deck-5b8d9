import { ink } from '@/lib/blanks';

type Props = { title: string; standfirst: string; meta: string[] };

export default function TitleSlide({ title, standfirst, meta }: Props) {
  return (
    <div className="mx-auto flex w-full max-w-[1180px] flex-col justify-center px-6 pb-24 pt-16 sm:px-10 lg:px-16">
      <div className="rise">
        <p className="eyebrow m-0">Confidential · do not forward</p>
        <h1 className="font-display mt-6 text-[clamp(3.2rem,15vw,9rem)] font-light leading-[0.84] tracking-[-0.035em] text-ink">
          Jelly<span className="italic text-jelly">Jelly</span>
        </h1>
        <div className="mt-8 h-px w-full max-w-[520px] bg-ink" />
        <p className="font-display mt-6 max-w-[26ch] text-[clamp(1.35rem,4.2vw,2.1rem)] font-light italic leading-[1.2] text-ink">
          {ink(standfirst)}
        </p>
        <ul className="mt-10 flex list-none flex-col gap-2 p-0 sm:flex-row sm:gap-8">
          {meta.map((m) => (
            <li key={m} className="eyebrow m-0 text-ink-soft">
              {m}
            </li>
          ))}
        </ul>
        <p className="mt-10 text-[0.8rem] text-ink-faint">
          {title} · use → / ← to move through the deck
        </p>
      </div>
    </div>
  );
}

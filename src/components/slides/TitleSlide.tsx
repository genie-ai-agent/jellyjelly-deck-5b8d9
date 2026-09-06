import { ink } from '@/lib/blanks';

type Props = { title: string; standfirst: string; meta: string[] };

export default function TitleSlide({ title, standfirst, meta }: Props) {
  return (
    <div className="mx-auto flex w-full max-w-[1180px] flex-col justify-center px-6 pb-28 pt-16 sm:px-10 lg:px-16">
      <div className="rise">
        <div className="flex items-center gap-3">
          <img
            src="/jelly-icon.svg"
            alt=""
            aria-hidden="true"
            className="blob h-9 w-9 sm:h-11 sm:w-11"
          />
          <p className="eyebrow m-0">Confidential &middot; do not forward</p>
        </div>

        <h1 className="font-display mt-7 text-[clamp(3.4rem,15vw,9rem)] font-light leading-[0.86] tracking-[-0.035em] text-ink">
          Jelly<span className="text-ink-faint">Jelly</span>
        </h1>

        <p className="font-display mt-7 max-w-[30ch] text-[clamp(1.4rem,4.4vw,2.35rem)] font-light leading-[1.16] tracking-[-0.02em] text-ink-soft">
          {ink(standfirst)}
        </p>

        <ul className="mt-9 flex list-none flex-wrap gap-2 p-0 sm:gap-3">
          {meta.map((m) => (
            <li
              key={m}
              className="glasspane pill px-4 py-2 text-[0.78rem] font-medium tracking-[0.02em] text-ink-soft"
            >
              {m}
            </li>
          ))}
        </ul>

        <p className="mt-9 text-[0.82rem] text-ink-faint">
          {title} &middot; use &rarr; / &larr; to move through the deck
        </p>
      </div>
    </div>
  );
}

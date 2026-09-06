import type { ReactNode } from 'react';
import { ink } from '@/lib/blanks';

type Props = {
  eyebrow?: string;
  title?: string;
  standfirst?: string;
  footnote?: string;
  children?: ReactNode;
};

export default function Frame({ eyebrow, title, standfirst, footnote, children }: Props) {
  return (
    <div className="mx-auto flex w-full max-w-[1180px] flex-col justify-center px-5 pb-24 pt-14 sm:px-10 sm:pb-28 sm:pt-16 lg:px-16">
      <div className="rise">
        {eyebrow ? (
          <div className="flex items-center gap-2.5">
            <span className="h-[9px] w-[9px] rounded-full bg-jelly" aria-hidden="true" />
            <p className="eyebrow m-0">{eyebrow}</p>
          </div>
        ) : null}

        {title ? (
          <h2 className="font-display mt-4 max-w-[26ch] text-[clamp(2rem,6.2vw,4rem)] font-light leading-[1.02] tracking-[-0.03em] text-ink">
            {ink(title)}
          </h2>
        ) : null}

        {standfirst ? (
          <p className="mt-4 max-w-[64ch] text-[clamp(1rem,2.1vw,1.18rem)] font-normal leading-[1.55] text-ink-soft">
            {ink(standfirst)}
          </p>
        ) : null}

        {children ? <div className="mt-6 sm:mt-8">{children}</div> : null}

        {footnote ? (
          <p className="mt-6 max-w-[74ch] border-t border-rule pt-4 text-[0.82rem] leading-relaxed text-ink-faint">
            {ink(footnote)}
          </p>
        ) : null}
      </div>
    </div>
  );
}

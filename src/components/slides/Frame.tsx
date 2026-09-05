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
    <div className="mx-auto flex w-full max-w-[1180px] flex-col justify-center px-6 pb-24 pt-14 sm:px-10 sm:pb-28 sm:pt-16 lg:px-16">
      <div className="rise">
        {eyebrow ? (
          <div className="flex items-center gap-3">
            <span className="h-[7px] w-[7px] rotate-45 bg-jelly" aria-hidden="true" />
            <p className="eyebrow m-0">{eyebrow}</p>
          </div>
        ) : null}

        {title ? (
          <h2 className="font-display mt-4 max-w-[24ch] text-[clamp(2rem,6.2vw,4.1rem)] font-light leading-[0.98] tracking-[-0.02em] text-ink">
            {ink(title)}
          </h2>
        ) : null}

        {standfirst ? (
          <p className="mt-5 max-w-[62ch] text-[clamp(1rem,2.1vw,1.2rem)] leading-[1.5] text-ink-soft">
            {ink(standfirst)}
          </p>
        ) : null}

        {children ? <div className="mt-9 sm:mt-11">{children}</div> : null}

        {footnote ? (
          <p className="mt-10 max-w-[70ch] border-t border-rule pt-4 text-[0.8rem] italic leading-relaxed text-ink-faint">
            {ink(footnote)}
          </p>
        ) : null}
      </div>
    </div>
  );
}

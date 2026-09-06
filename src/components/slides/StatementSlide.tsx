import Frame from './Frame';
import { ink } from '@/lib/blanks';

type Props = {
  eyebrow: string;
  title: string;
  body: string[];
  footnote?: string;
};

export default function StatementSlide({ eyebrow, title, body, footnote }: Props) {
  return (
    <Frame eyebrow={eyebrow} title={title} footnote={footnote}>
      <ol className="m-0 grid list-none gap-3 p-0 sm:grid-cols-3 sm:gap-4">
        {body.map((line, i) => (
          <li key={i} className="glasspane p-4 sm:p-5">
            <span className="font-display block text-[1.4rem] font-light leading-none text-jelly-ink">
              {String(i + 1).padStart(2, '0')}
            </span>
            <p className="mt-3 max-w-[36ch] text-[0.98rem] leading-[1.55] text-ink-soft">
              {ink(line)}
            </p>
          </li>
        ))}
      </ol>
    </Frame>
  );
}

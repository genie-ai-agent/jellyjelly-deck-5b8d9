import Frame from './Frame';
import { ink } from '@/lib/blanks';
import type { Person } from '@/data/slides';

type Props = {
  eyebrow: string;
  title: string;
  standfirst: string;
  people: Person[];
  footnote?: string;
};

export default function TeamSlide({ eyebrow, title, standfirst, people, footnote }: Props) {
  return (
    <Frame eyebrow={eyebrow} title={title} standfirst={standfirst} footnote={footnote}>
      <ul className="m-0 grid list-none grid-cols-1 gap-3 p-0 sm:grid-cols-2 lg:grid-cols-5">
        {people.map((p, i) => (
          <li
            key={p.name}
            className="group glasspane p-5 transition-transform duration-300 hover:-translate-y-1"
          >
            <span className="eyebrow block text-[0.6rem] text-ink-faint">
              {String(i + 1).padStart(2, '0')}
            </span>
            <h3 className="font-display mt-2 text-[1.75rem] font-light leading-none tracking-[-0.01em] text-ink transition-colors duration-300 group-hover:text-jelly-ink">
              {p.name}
            </h3>
            <p className="mt-2 text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-ink-soft">
              {ink(p.role)}
            </p>
            <div className="mt-3 h-px w-8 bg-jelly transition-all duration-300 group-hover:w-16" />
            <ul className="m-0 mt-3 list-none space-y-1.5 p-0">
              {p.resume.map((line, j) => (
                <li key={j} className="text-[0.9rem] leading-[1.45] text-ink-soft">
                  {ink(line)}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Frame>
  );
}

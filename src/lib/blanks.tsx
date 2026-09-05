import type { ReactNode } from 'react';

/** Renders [bracketed blanks] as marked-up gaps so nothing reads as a real fact. */
export function ink(text: string): ReactNode {
  const parts = text.split(/(\[[^\]]+\])/g);
  return parts.map((part, i) =>
    part.startsWith('[') && part.endsWith(']') ? (
      <span className="blank" key={i}>
        {part.slice(1, -1)}
      </span>
    ) : (
      <span key={i}>{part}</span>
    ),
  );
}

type Props = { title: string; standfirst: string; meta: string[] };

/**
 * Cover. Deliberately bare: the logo lockup on the gradient, nothing else.
 * Navigation lives in the footer gutter.
 */
export default function TitleSlide({}: Props) {
  return (
    <div className="mx-auto flex w-full max-w-[1180px] flex-col items-center justify-center px-6 pb-28 pt-20 text-center">
      <div className="rise flex flex-col items-center">
        <img
          src="/jelly-icon.svg"
          alt=""
          aria-hidden="true"
          className="blob h-[clamp(4.5rem,17vw,8.5rem)] w-[clamp(4.5rem,17vw,8.5rem)]"
        />

        <h1 className="font-display mt-6 text-[clamp(2.9rem,13vw,7.5rem)] font-light leading-[0.9] tracking-[-0.035em] text-ink sm:mt-8">
          Jelly<span className="text-ink-faint">Jelly</span>
        </h1>
      </div>
    </div>
  );
}

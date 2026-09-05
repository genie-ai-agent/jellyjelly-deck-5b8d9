import type { Slide as SlideData } from '@/data/slides';
import TitleSlide from './slides/TitleSlide';
import StatementSlide from './slides/StatementSlide';
import TeamSlide from './slides/TeamSlide';
import HiringSlide from './slides/HiringSlide';
import RoundSlide from './slides/RoundSlide';
import InvestorsSlide from './slides/InvestorsSlide';

export default function Slide({ slide }: { slide: SlideData }) {
  switch (slide.layout) {
    case 'title':
      return (
        <TitleSlide title={slide.title} standfirst={slide.standfirst} meta={slide.meta} />
      );
    case 'statement':
      return (
        <StatementSlide
          eyebrow={slide.eyebrow}
          title={slide.title}
          body={slide.body}
          footnote={slide.footnote}
        />
      );
    case 'team':
      return (
        <TeamSlide
          eyebrow={slide.eyebrow}
          title={slide.title}
          standfirst={slide.standfirst}
          people={slide.people}
          footnote={slide.footnote}
        />
      );
    case 'hiring':
      return (
        <HiringSlide
          eyebrow={slide.eyebrow}
          title={slide.title}
          standfirst={slide.standfirst}
          hires={slide.hires}
          footnote={slide.footnote}
        />
      );
    case 'round':
      return (
        <RoundSlide
          eyebrow={slide.eyebrow}
          title={slide.title}
          standfirst={slide.standfirst}
          terms={slide.terms}
          use={slide.use}
          footnote={slide.footnote}
        />
      );
    case 'investors':
      return (
        <InvestorsSlide
          eyebrow={slide.eyebrow}
          title={slide.title}
          standfirst={slide.standfirst}
          groups={slide.groups}
          footnote={slide.footnote}
        />
      );
  }
}

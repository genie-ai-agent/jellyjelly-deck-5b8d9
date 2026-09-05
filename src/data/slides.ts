// One place to edit the deck. Add a slide by adding an object to `slides`.
// Anything in [square brackets] is a real blank: a fact only Andrew/Iqram can fill.

export type Person = {
  name: string;
  role: string;
  resume: string[];
};

export type Hire = {
  name: string;
  role: string;
  why: string;
};

export type EquityRow = {
  name: string;
  grant: string;
  note: string;
};

export type MoneyRow = {
  label: string;
  value: string;
  note?: string;
};

export type InvestorGroup = {
  heading: string;
  brief: string;
  names: string[];
};

export type Slide =
  | {
      id: string;
      nav: string;
      layout: 'title';
      title: string;
      standfirst: string;
      meta: string[];
    }
  | {
      id: string;
      nav: string;
      layout: 'statement';
      eyebrow: string;
      title: string;
      body: string[];
      footnote?: string;
    }
  | {
      id: string;
      nav: string;
      layout: 'team';
      eyebrow: string;
      title: string;
      standfirst: string;
      people: Person[];
      footnote?: string;
    }
  | {
      id: string;
      nav: string;
      layout: 'hiring';
      eyebrow: string;
      title: string;
      standfirst: string;
      hires: Hire[];
      footnote?: string;
    }
  | {
      id: string;
      nav: string;
      layout: 'equity';
      eyebrow: string;
      title: string;
      standfirst: string;
      rows: EquityRow[];
      terms: MoneyRow[];
      footnote?: string;
    }
  | {
      id: string;
      nav: string;
      layout: 'round';
      eyebrow: string;
      title: string;
      standfirst: string;
      terms: MoneyRow[];
      use: MoneyRow[];
      footnote?: string;
    }
  | {
      id: string;
      nav: string;
      layout: 'investors';
      eyebrow: string;
      title: string;
      standfirst: string;
      groups: InvestorGroup[];
      footnote?: string;
    };

export const deckMeta = {
  company: 'JellyJelly',
  audience: 'Prepared for Sam Lessin',
  date: 'September 2026',
};

export const slides: Slide[] = [
  {
    id: 'cover',
    nav: 'Cover',
    layout: 'title',
    title: 'JellyJelly',
    standfirst: 'The team, the team we still need, what they own, and the round.',
    meta: ['Prepared for Sam Lessin', 'September 2026', 'Confidential draft'],
  },
  {
    id: 'why-this-deck',
    nav: 'The ask, up front',
    layout: 'statement',
    eyebrow: 'Page 01',
    title: 'Two questions, answered in order: who is building this, and what we are raising.',
    body: [
      'Five people are on it today. We know the next eight we want, by name.',
      'The round is sized around those hires, their equity, and [runway target] of runway.',
      'What we want from you: [lead / follow / intros \u2014 the specific ask].',
    ],
    footnote: 'Arrow keys to move. Cmd-P prints the whole thing to PDF.',
  },
  {
    id: 'team',
    nav: 'The team',
    layout: 'team',
    eyebrow: 'Page 02',
    title: 'The team',
    standfirst: 'Five people. Resume only \u2014 what each of them has already shipped.',
    people: [
      {
        name: 'Iqram',
        role: 'Co-founder',
        resume: ['Co-founded Venmo', '[second line \u2014 your pick]'],
      },
      { name: 'Joe', role: '[role]', resume: ['[shipped what, where]', '[second line]'] },
      { name: 'Ari', role: '[role]', resume: ['[shipped what, where]', '[second line]'] },
      { name: 'Kris', role: '[role]', resume: ['[shipped what, where]', '[second line]'] },
      { name: 'Zach', role: '[role]', resume: ['[shipped what, where]', '[second line]'] },
    ],
    footnote: 'House rule: resumes only. No line about what anyone is currently working on.',
  },
  {
    id: 'hiring',
    nav: 'Who we hire next',
    layout: 'hiring',
    eyebrow: 'Page 03',
    title: 'The team we want to hire',
    standfirst: 'Not job specs. Eight people we already know we want.',
    hires: [
      { name: 'Jenny Cortina', role: '[role]', why: '[what she owns]' },
      { name: 'Maja', role: '[role]', why: '[what she owns]' },
      { name: 'Shreyans Bhansali', role: '[role]', why: '[what he owns]' },
      { name: 'Andrew Staub', role: '[role]', why: '[what he owns]' },
      { name: 'Jesse Benter', role: '[role]', why: '[what he owns]' },
      { name: 'Greg Einfrank', role: '[role]', why: '[what he owns]' },
      { name: 'Joe Barouch', role: '[role]', why: '[what he owns]' },
      { name: 'Matt Mirman', role: '[role]', why: '[what he owns]' },
    ],
    footnote:
      'Names came off a voice note \u2014 confirm spellings before this goes to Sam. Order is not ranked yet.',
  },
  {
    id: 'equity',
    nav: 'Proposed equity',
    layout: 'equity',
    eyebrow: 'Page 04',
    title: 'Proposed equity split',
    standfirst: 'What the eight above would own. One number is set; the rest are open.',
    rows: [
      { name: 'Andrew Staub', grant: '10%', note: 'proposed, agreed in principle' },
      { name: 'Jenny Cortina', grant: '[%]', note: '[open]' },
      { name: 'Maja', grant: '[%]', note: '[open]' },
      { name: 'Shreyans Bhansali', grant: '[%]', note: '[open]' },
      { name: 'Jesse Benter', grant: '[%]', note: '[open]' },
      { name: 'Greg Einfrank', grant: '[%]', note: '[open]' },
      { name: 'Joe Barouch', grant: '[%]', note: '[open]' },
      { name: 'Matt Mirman', grant: '[%]', note: '[open]' },
    ],
    terms: [
      { label: 'Measured against', value: '[fully diluted / post-round]' },
      { label: 'Pool this comes out of', value: '[% pool]' },
      { label: 'Vesting', value: '[schedule + cliff]' },
      { label: 'Cash alongside it', value: '[salary band or deferred]' },
    ],
    footnote: 'Only the 10% is a real number. The rest stay blank until you say them.',
  },
  {
    id: 'round',
    nav: 'The round',
    layout: 'round',
    eyebrow: 'Page 05',
    title: 'The round',
    standfirst: 'How much, on what terms, and where it goes.',
    terms: [
      { label: 'Raising', value: '[$ amount]', note: 'total round size' },
      { label: 'Instrument', value: '[SAFE / priced]', note: '[post-money cap or pre]' },
      { label: 'Committed', value: '[$ soft-circled]', note: '[who, if you want it named]' },
      { label: 'Runway it buys', value: '[months]', note: 'to [the milestone that matters]' },
    ],
    use: [
      { label: 'The eight hires', value: '[%]' },
      { label: 'Compute + infra', value: '[%]' },
      { label: 'Everything else', value: '[%]' },
    ],
    footnote: 'Numbers stay blank until they are the real ones.',
  },
  {
    id: 'investors',
    nav: 'Who we want in',
    layout: 'investors',
    eyebrow: 'Page 06',
    title: 'Who we want to raise from',
    standfirst:
      'Not a list of everyone who would say yes. Three kinds of money, and we want all three.',
    groups: [
      {
        heading: 'The anchor',
        brief: 'One investor who sets the terms and moves in a week, not a quarter.',
        names: ['[fund]', '[partner]', 'check: [$]'],
      },
      {
        heading: 'Operators',
        brief: 'People who have shipped a consumer product at scale and will pick up the phone.',
        names: ['[name]', '[name]', '[name]', 'checks: [$\u2013$]'],
      },
      {
        heading: 'Distribution',
        brief: 'Angels whose audience is our audience \u2014 they post once and we feel it.',
        names: ['[name]', '[name]', '[name]', 'checks: [$\u2013$]'],
      },
    ],
    footnote: 'Sam: tell us which names on this list you would rather we cut.',
  },
  {
    id: 'next',
    nav: 'Coming next',
    layout: 'statement',
    eyebrow: 'Page 07',
    title: 'Slides that land here next.',
    body: [
      'Product \u2014 the one screen that explains JellyJelly without narration.',
      'Traction \u2014 [the two numbers that are going up and to the right].',
      'Why now \u2014 why this is buildable in 2026 and was not in 2022.',
    ],
    footnote: 'Send the details and they get built into this same link.',
  },
];

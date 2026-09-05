// One place to edit the deck. Add a slide by adding an object to `slides`.
// Anything in [square brackets] is a real blank: a fact only Andrew/Iqram can fill.

export type Person = {
  name: string;
  role: string;
  resume: string[];
};

export type Hire = {
  role: string;
  why: string;
  when: string;
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
    standfirst: 'The team, the team we still need, and the round.',
    meta: ['Prepared for Sam Lessin', 'September 2026', 'Confidential draft'],
  },
  {
    id: 'why-this-deck',
    nav: 'The ask, up front',
    layout: 'statement',
    eyebrow: 'Page 01',
    title: 'Two questions, answered in order: who is building this, and what we are raising.',
    body: [
      'Five people are on it today. We know the next five we want.',
      'The round is sized around those hires and [runway target] of runway, nothing else.',
      'What we want from you: [lead / follow / intros — the specific ask].',
    ],
    footnote: 'Arrow keys to move. Cmd-P prints the whole thing to PDF.',
  },
  {
    id: 'team',
    nav: 'The team',
    layout: 'team',
    eyebrow: 'Page 02',
    title: 'The team',
    standfirst: 'Five people. Resume only — what each of them has already shipped.',
    people: [
      {
        name: 'Iqram',
        role: 'Co-founder',
        resume: ['Co-founded Venmo', '[second line — your pick]'],
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
    standfirst:
      'The round pays for these seats. Draft — redline the roles, the reasons and the order.',
    hires: [
      {
        role: '[role 1]',
        why: '[what breaks today without this person]',
        when: 'First hire',
      },
      { role: '[role 2]', why: '[what it unlocks]', when: '[month]' },
      { role: '[role 3]', why: '[what it unlocks]', when: '[month]' },
      { role: '[role 4]', why: '[what it unlocks]', when: '[month]' },
      { role: '[role 5]', why: '[what it unlocks]', when: '[month]' },
    ],
    footnote: 'Every seat here has a name we are already talking to, or a place we know to look.',
  },
  {
    id: 'round',
    nav: 'The round',
    layout: 'round',
    eyebrow: 'Page 04',
    title: 'The round',
    standfirst: 'How much, on what terms, and where it goes.',
    terms: [
      { label: 'Raising', value: '[$ amount]', note: 'total round size' },
      { label: 'Instrument', value: '[SAFE / priced]', note: '[post-money cap or pre]' },
      { label: 'Committed', value: '[$ soft-circled]', note: '[who, if you want it named]' },
      { label: 'Runway it buys', value: '[months]', note: 'to [the milestone that matters]' },
    ],
    use: [
      { label: 'The five hires', value: '[%]' },
      { label: 'Compute + infra', value: '[%]' },
      { label: 'Everything else', value: '[%]' },
    ],
    footnote: 'Numbers stay blank until they are the real ones.',
  },
  {
    id: 'investors',
    nav: 'Who we want in',
    layout: 'investors',
    eyebrow: 'Page 05',
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
        names: ['[name]', '[name]', '[name]', 'checks: [$–$]'],
      },
      {
        heading: 'Distribution',
        brief: 'Angels whose audience is our audience — they post once and we feel it.',
        names: ['[name]', '[name]', '[name]', 'checks: [$–$]'],
      },
    ],
    footnote: 'Sam: tell us which names on this list you would rather we cut.',
  },
  {
    id: 'next',
    nav: 'Coming next',
    layout: 'statement',
    eyebrow: 'Page 06',
    title: 'Slides that land here next.',
    body: [
      'Product — the one screen that explains JellyJelly without narration.',
      'Traction — [the two numbers that are going up and to the right].',
      'Why now — why this is buildable in 2026 and was not in 2022.',
    ],
    footnote: 'Send the details and they get built into this same link.',
  },
];

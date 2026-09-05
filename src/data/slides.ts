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
  group?: string;
};

export type MoneyRow = {
  label: string;
  value: string;
  note?: string;
};

export type CompBand = {
  band: string;
  basis: string;
  people: string[];
  note?: string;
};

export type SpendItem = {
  label: string;
  value: string;
  detail: string;
};

export type ResidenceBrief = {
  city: string;
  anchor: string;
  constraints: string[];
  estimate: string;
  estimateNote: string;
};

export type Comp = {
  name: string;
  where: string;
  size: string;
  price: string;
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
      layout: 'comp';
      eyebrow: string;
      title: string;
      standfirst: string;
      bands: CompBand[];
      terms: MoneyRow[];
      footnote?: string;
    }
  | {
      id: string;
      nav: string;
      layout: 'spend';
      eyebrow: string;
      title: string;
      standfirst: string;
      items: SpendItem[];
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
      layout: 'residence';
      eyebrow: string;
      title: string;
      standfirst: string;
      chooser: string;
      briefs: ResidenceBrief[];
      comps: Comp[];
      compsNote: string;
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
      'We are raising $50M at a $1B valuation, and almost all of it is payroll for those people.',
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
    standfirst:
      'One rule: everyone except the two founders is at 1%. Andrew is the single exception.',
    rows: [
      { name: 'Iqram', grant: '[%]', note: 'founder \u2014 outside this pool', group: 'Founders' },
      { name: 'Andrew Staub', grant: '10%', note: 'the exception, agreed in principle', group: 'Founders' },
      { name: 'Joe', grant: '1%', note: 'current team', group: 'Current team' },
      { name: 'Ari', grant: '1%', note: 'may move to Help Somebody instead \u2014 open', group: 'Current team' },
      { name: 'Kris', grant: '1%', note: 'current team', group: 'Current team' },
      { name: 'Zach', grant: '1%', note: 'current team', group: 'Current team' },
      { name: 'Jenny Cortina', grant: '1%', note: 'on offer', group: 'Proposed hires' },
      { name: 'Maja', grant: '1%', note: 'on offer', group: 'Proposed hires' },
      { name: 'Shreyans Bhansali', grant: '1%', note: 'on offer', group: 'Proposed hires' },
      { name: 'Jesse Benter', grant: '1%', note: 'on offer', group: 'Proposed hires' },
      { name: 'Greg Einfrank', grant: '1%', note: 'on offer', group: 'Proposed hires' },
      { name: 'Joe Barouch', grant: '1%', note: 'on offer', group: 'Proposed hires' },
      { name: 'Matt Mirman', grant: '1%', note: 'on offer', group: 'Proposed hires' },
    ],
    terms: [
      { label: 'Measured against', value: '[fully diluted / post-round]' },
      { label: 'Pool this comes out of', value: '[% pool]' },
      { label: 'Vesting', value: '[schedule + cliff]' },
      { label: 'Cash alongside it', value: '[salary floor \u2014 see the round]' },
    ],
    footnote:
      'Open question: whether Ari sits here or moves to Help Somebody with Andrew. Iqram\u2019s own number is the other blank.',
  },
  {
    id: 'salaries',
    nav: 'What we pay',
    layout: 'comp',
    eyebrow: 'Page 05',
    title: 'What we pay',
    standfirst:
      'Two bands, set on experience and level. Everyone gets a real salary \u2014 nothing deferred.',
    bands: [
      {
        band: '$300k',
        basis:
          'Senior band: the people who have already run this job before, at Andrew\u2019s level. The Ben cohort.',
        people: [
          'Zach',
          'Jenny Cortina',
          'Shreyans Bhansali',
          'Andrew Staub',
          'Jesse Benter',
          'Greg Einfrank',
          'Joe Barouch',
          'Matt Mirman',
        ],
        note:
          'Zach and Joe Barouch land here by the rule, not by name \u2014 you named four people for the lower band and neither was one of them. Confirm both.',
      },
      {
        band: '$200k',
        basis: 'Second band: earlier in their careers, same bar, room to move up a band.',
        people: ['Maja', 'Kris', 'Joe', 'Ari'],
        note: 'Read as Joe on the current team, not Joe Barouch. Ari is still open (see equity).',
      },
      {
        band: '[founder comp]',
        basis: 'Iqram sits outside both bands \u2014 founder salary is its own decision.',
        people: ['Iqram'],
      },
    ],
    terms: [
      { label: 'What sets the band', value: 'Experience and level', note: 'Not age \u2014 see the note below.' },
      { label: 'Fully loaded cost', value: '[base x 1.2\u20131.3]', note: 'taxes + benefits on top of base' },
      { label: 'Bonus / review cycle', value: '[if any]' },
      { label: 'Location adjustment', value: '[flat everywhere, or by city]' },
    ],
    footnote:
      'One flag worth keeping: paying on age is age discrimination and not defensible. Paying on experience, level and scope is standard and is how this page is written \u2014 keep the language on the left, not on birthdays.',
  },
  {
    id: 'round',
    nav: 'The round',
    layout: 'round',
    eyebrow: 'Page 06',
    title: 'The round',
    standfirst: '$50M at $1B. The money is the team \u2014 that is the whole use of proceeds.',
    terms: [
      { label: 'Raising', value: '$50M', note: 'now, this round' },
      { label: 'Valuation', value: '$1B', note: '[pre or post-money \u2014 confirm]' },
      { label: 'Instrument', value: '[priced / SAFE]', note: '[docs and lead counsel]' },
      { label: 'Committed', value: '[$ soft-circled]', note: '[who, if you want it named]' },
      { label: 'Runway it buys', value: '[months]', note: 'to [the milestone that matters]' },
    ],
    use: [
      { label: 'Payroll \u2014 the twelve above', value: '$3.2M / yr' },
      { label: 'Product, compute + tokens', value: '[$]' },
      { label: 'Space, events + everything else', value: '[$]' },
    ],
    footnote:
      'Base payroll is the only line that computes itself: $2.4M senior band + $800k second band. The next page breaks out the rest.',
  },
  {
    id: 'spend',
    nav: 'Where it goes',
    layout: 'spend',
    eyebrow: 'Page 07',
    title: 'Where the money goes',
    standfirst:
      'Payroll is most of it. The rest is compute, rooms for people to work in, and getting the community in one place.',
    items: [
      {
        label: 'Payroll',
        value: '$3.2M / yr',
        detail: 'Twelve people across the two bands. Iqram\u2019s own line still open.',
      },
      {
        label: 'AI: models, inference, tokens',
        value: '[$ / mo]',
        detail: 'The product\u2019s real marginal cost. Scales with usage, so it needs a per-user number.',
      },
      {
        label: 'Events',
        value: '[$]',
        detail: '[how many a year, what size, which cities]',
      },
      {
        label: 'Merch',
        value: '[$]',
        detail: 'Community-facing, not swag-drawer. [run size]',
      },
      {
        label: 'Offices',
        value: '[$ / yr]',
        detail:
          'Current office stays and is enough for now. New line: an office in Berkeley.',
      },
      {
        label: 'Corporate residence \u2014 San Francisco',
        value: '~$12\u201318k / mo',
        detail:
          'A rented multi-room apartment near Embarcadero. Market estimate, not a signed lease \u2014 next page.',
      },
      {
        label: 'Corporate residence \u2014 [second city]',
        value: '[$ / mo]',
        detail: 'Same setup, walking distance to Iqram. [city name \u2014 next page]',
      },
    ],
    footnote:
      'Only payroll computes from decisions already made. The residence number is researched market rate for a 3\u20134 bedroom on the waterfront, and the next page shows the comps it came from.',
  },
  {
    id: 'residences',
    nav: 'The residences',
    layout: 'residence',
    eyebrow: 'Page 08',
    title: 'The residences',
    standfirst:
      'Not hotels, not a second office. A rented apartment with a lot of rooms, run as a place the team gathers.',
    chooser:
      'Greg Rogers picks the apartments. Brief to him: enough rooms to sleep the team, one big common room that works for a gathering, and no interest in fancy for its own sake.',
    briefs: [
      {
        city: 'San Francisco',
        anchor: 'As close to Embarcadero as we can find.',
        constraints: [
          'Walk to Embarcadero station \u2014 BART and Muni in one stop',
          '4+ bedrooms, one common room big enough to host in',
          'Furnished or easy to furnish; 12-month lease, not nightly',
          'Not luxury. Spend on space and location, not finishes',
        ],
        estimate: '$12\u201318k / mo',
        estimateNote:
          '3\u20134 bedrooms on the waterfront, ~$145\u2013215k a year. Comps at right.',
      },
      {
        city: '[second city]',
        anchor: 'Ideally within walking distance of where Iqram lives.',
        constraints: [
          'Same setup: multi-room apartment, one good common room',
          'Location set by Iqram\u2019s address, not by a neighborhood',
          'City name still open \u2014 the note came through as \u201cFaidai\u201d (Dubai?)',
        ],
        estimate: '[$ / mo]',
        estimateNote: 'Name the city and this gets the same comp treatment.',
      },
    ],
    comps: [
      {
        name: 'The Gateway',
        where: '460 Davis Ct \u2014 where FiDi, Jackson Square and Embarcadero meet',
        size: 'Studio\u20133BR, plus 2\u20134BR townhomes',
        price: '$4.5\u201310.2k',
      },
      {
        name: 'The Infinity',
        where: '300 Spear St, South Beach',
        size: '3BR, 1,882 sq ft',
        price: '$14k',
      },
      {
        name: 'The Infinity',
        where: '300 Spear St, South Beach',
        size: '4BR, 2,683 sq ft',
        price: '$29.5k',
      },
      {
        name: 'Embarcadero average',
        where: 'neighborhood-wide',
        size: '2BR',
        price: '$6.7k',
      },
    ],
    compsNote:
      'City-wide 3BR average runs $8.3\u201310k. Rents pulled September 2026 from building listings plus Rentable, Zillow and RentHop \u2014 indicative, not quotes.',
    footnote:
      'Open: the end of \u201ca great gathering place for\u2026\u201d, and whether Embarcadero or Sea Cliff anchors the search \u2014 they sit ~7 miles apart.',
  },
  {
    id: 'investors',
    nav: 'Who we want in',
    layout: 'investors',
    eyebrow: 'Page 09',
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
    eyebrow: 'Page 10',
    title: 'Slides that land here next.',
    body: [
      'Product \u2014 the one screen that explains JellyJelly without narration.',
      'Traction \u2014 [the two numbers that are going up and to the right].',
      'Why now \u2014 why this is buildable in 2026 and was not in 2022.',
    ],
    footnote: 'Send the details and they get built into this same link.',
  },
];

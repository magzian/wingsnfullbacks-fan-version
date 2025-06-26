export const teams = [
  { id: 1, name: 'Eagles FC' },
  { id: 2, name: 'Tigers United' },
  { id: 3, name: 'Lions FC'},
  { id: 4, name: 'Panthers' }, 
];

export const matches = [
  {
    id: 1,
    homeTeam: 1,
    awayTeam: 2,
    time: '4:00 PM',
    date: 'Today',
    status: 'fixture', // 'fixture', 'live', or 'result'
    score: null,
    minute: null,
  },
  {
    id: 2,
    homeTeam: 3,
    awayTeam: 4,
    time: '6:00 PM',
    date: 'Today',
    status: 'fixture',
    score: null,
    minute: null,
  },
  {
    id: 3,
    homeTeam: 1,
    awayTeam: 2,
    time: '4:00 PM',
    date: 'Today',
    status: 'live',
    score: '2 - 1',
    minute: '75′',
  },
  {
    id: 4,
    homeTeam: 3,
    awayTeam: 4,
    time: '6:00 PM',
    date: 'Yesterday',
    status: 'result',
    score: '1 - 3',
    minute: 'FT',
  },
];

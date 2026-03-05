import type { Intelligence } from '../models/Intelligence';

const mockIntelligenceData: Intelligence[] = [
  {
    ioc: '1.2.3.4',
    threat: 'low',
    countryCode: 'us',
    seenBy: ['usSS', 'whiteHatsAnon'],
    lastSeen: 1650309845083,
  },
  {
    ioc: '1.2.3.5',
    threat: 'high',
    countryCode: 'us',
    seenBy: ['usSS'],
    lastSeen: 1650307825088,
  },
  {
    ioc: 'gougle.com',
    threat: 'high',
    countryCode: 'ca',
    seenBy: ['usSS', 'whiteHatsAnon', 'ruWatch', 'privateInc', 'angiesList'],
    lastSeen: 1650609845087,
  },
  {
    ioc: 'goople.com',
    threat: 'high',
    countryCode: 'ru',
    seenBy: ['usSS', 'whiteHatsAnon', 'angiesList'],
    lastSeen: 1650109815283,
  },
  {
    ioc: '192.0.2.10',
    threat: 'medium',
    countryCode: 'gb',
    seenBy: ['ukSec', 'whiteHatsAnon'],
    lastSeen: 1651000000000,
  },
  {
    ioc: 'malicious.example',
    threat: 'critical',
    countryCode: 'cn',
    seenBy: ['cnWatch', 'privateInc'],
    lastSeen: 1652000005000,
  },
  {
    ioc: 'deadbeefcafebabe',
    threat: 'low',
    countryCode: 'de',
    seenBy: [],
    lastSeen: 1653001234000,
  },
  {
    ioc: 'sub.compromised.net',
    threat: 'high',
    countryCode: 'fr',
    seenBy: ['frWatch', 'whiteHatsAnon'],
    lastSeen: 1653500000000,
  },
  {
    ioc: '203.0.113.77',
    threat: 'medium',
    countryCode: 'au',
    seenBy: ['auSec'],
    lastSeen: 1654005000000,
  },
  {
    ioc: 'suspicious-files.example/hash-12345',
    threat: 'low',
    countryCode: 'nl',
    seenBy: ['privateInc', 'nlGroup'],
    lastSeen: 1654500000000,
  },
  {
    ioc: 'phantom-domain.xyz',
    threat: 'medium',
    countryCode: 'br',
    seenBy: ['brWatch', 'whiteHatsAnon'],
    lastSeen: 1655000000000,
  },
];

export { mockIntelligenceData };

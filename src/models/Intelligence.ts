export interface Intelligence {
  ioc: string;
  threat: string;
  countryCode: string;
  seenBy: string[];
  lastSeen: number;
}

export interface TransformedIntelligence {
  threat: Record<string, number>;
  countryCode: Record<string, number>;
}

export type IntelligenceKeyAttribute = 'countryCode' | 'threat';

export type IntelligenceKeyAttributeCount = Record<string, number>;

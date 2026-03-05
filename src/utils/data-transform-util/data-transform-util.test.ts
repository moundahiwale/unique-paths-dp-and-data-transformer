import { describe, it, expect } from 'vitest';
import { countBy, topN } from './data-transform-util';
import { mockIntelligenceData } from '../../data/mock-intelligence-data';

describe('data-transform-util', () => {
  it('countBy should tally values for countryCode', () => {
    const countryCounts = countBy('countryCode', mockIntelligenceData);
    expect(countryCounts.us).toBe(2);
    expect(countryCounts.ca).toBe(1);
    expect(countryCounts.ru).toBe(1);
  });

  it('topN should return the top 3 entries by count', () => {
    const threatCounts = countBy('threat', mockIntelligenceData);
    const top3Threats = topN(threatCounts, 3);

    // From the mock data: high=4, low=3, medium=3
    expect(top3Threats).toEqual({ high: 4, low: 3, medium: 3 });

    const countryCounts = countBy('countryCode', mockIntelligenceData);
    const top3Countries = topN(countryCounts, 3);
    // Expected: us with a count of 2
    expect(top3Countries.us).toBe(2);

    // Ensure only 3 keys returned
    expect(Object.keys(top3Countries)).toHaveLength(3);
  });
});

import type {
  IntelligenceKeyAttributeCount,
  Intelligence,
  IntelligenceKeyAttribute,
} from '../../models/Intelligence';

// We are iterating over the data once for each record, O(n) time complexity
function countBy(key: IntelligenceKeyAttribute, data: Intelligence[]) {
  return data.reduce((acc: IntelligenceKeyAttributeCount, item) => {
    const value = item[key];
    acc[value] = (acc[value] ?? 0) + 1;
    return acc;
  }, {} as IntelligenceKeyAttributeCount);
}

// We are using the default sort function provided by JavaScript which has O(n log n) time complexity,
// slicing the top n values is O(n) worst case, so overall O(n log n) time complexity
function topN(counts: IntelligenceKeyAttributeCount, n = 3) {
  // Using Object.entries to convert the count object into an array so we can perform array functions like sort, slice and reduce
  return (
    Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, n)
      // The expected output is an object with the key and the respective count, using reduce to convert the array to an object
      .reduce((acc: IntelligenceKeyAttributeCount, [key, value]) => {
        acc[key] = value;
        return acc;
      }, {} as IntelligenceKeyAttributeCount)
  );
}

export { countBy, topN };

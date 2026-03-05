import { useNavigate } from 'react-router-dom';
import './DataTransformer.scss';
import { mockIntelligenceData } from '../../data/mock-intelligence-data';
import { useState } from 'react';
import type { TransformedIntelligence } from '../../models/Intelligence';
import { countBy, topN } from '../../utils/data-transform-util';

function DataTransformer() {
  const [transformedData, setTransformedData] =
    useState<TransformedIntelligence>();

  const navigate = useNavigate();

  const handleDataTransform = () => {
    // Getting the top 3 countryCode and threat values is a 2 step approach:
    // 1. Count the individual attributes
    const countryCounts = countBy('countryCode', mockIntelligenceData);
    const threatCounts = countBy('threat', mockIntelligenceData);

    // 2. Get the top 3 values for each attribute
    const transformed = {
      countryCode: topN(countryCounts, 3),
      threat: topN(threatCounts, 3),
    };

    // I have chosen just the countryCode and threat attributes as that sufficiently demonstrates usage of functional programming and common data transformation techniques
    // This could be easily extended to include other attributes.
    // In fact, as a part of question 3, have the person implement something live e.g. calculate the top 3 seenBy values with their counts

    setTransformedData(transformed);
  };

  return (
    <div className='data-transformer'>
      <button onClick={() => navigate('/')} className='back-button'>
        ⬅️ Back to Home Page
      </button>
      <h2>Data Transformer</h2>
      <div className='input-data'>
        <code>{JSON.stringify(mockIntelligenceData)}</code>
      </div>
      <div className='data-transform'>
        <button className='transform-button' onClick={handleDataTransform}>
          Transform Data
        </button>
        <div className='alert-info'>
          ℹ️ Click transform data to get the top 3 values for countryCode and
          threat attribute in above input data and their tally
        </div>
        <code>{transformedData && JSON.stringify(transformedData)}</code>
      </div>
    </div>
  );
}

export default DataTransformer;

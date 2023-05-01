import React from 'react';

import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, DateTime, Legend, Tooltip, LineSeries
 } from '@syncfusion/ej2-react-charts';

 import { lineCustomSeries, LinePrimaryXAxis, LinePrimaryYAxis } from '../../data/dummy';

const LineChart = () => {
  return (
    <ChartComponent>
      <Inject services={[LineSeries, DateTime, Legend, Tooltip]}/>
      <SeriesCollectionDirective>
        {lineCustomSeries.map((item, index) => (
          <SeriesDirective />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default LineChart
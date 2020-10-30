// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const measureKelvin = () => {
  const measurument = {
    type: 'temp',
    unit: 'cels',
    value: prompt('Degrees celsius'),
  };

  console.log(measurument.value);
  const kelvin = Number(measurument.value) + 273;
  return kelvin;
};
console.log(measureKelvin());

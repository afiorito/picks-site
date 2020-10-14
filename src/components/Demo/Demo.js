import React, { useEffect, useState } from 'react';
import { Device } from '../../components/Device';
import logo from '../../images/logo.svg';
import './demo.scss';

const foodPicker = {
  name: '@cuisine',
  color: '#FFDC7B',
  picks: [
    'Chinese',
    'Thai',
    'Italian',
    'Indian',
    'Mexican',
    'American',
    'Japanese',
  ],
};

const bodyPartPicker = {
  name: '@bodypart',
  color: '#FF9E9E',
  picks: ['Legs', 'Shoulders', 'Back', 'Chest', 'Biceps', 'Triceps'],
};

const timePicker = {
  name: '@time',
  color: '#C6A3FF',
  picks: [...Array(30)].map((_, i) => `${i + 10}m`),
};

const data = [
  {
    name: 'Dinner',
    segments: ['For dinner, I should eat ', 0, ' food.'],
    pickers: [foodPicker],
  },
  {
    name: 'Exercise',
    segments: ['Workout ', 0, ' and ', 1, ' for ', 2, '.'],
    pickers: [bodyPartPicker, bodyPartPicker, timePicker],
  },
];

const random = (max, min = 0) => Math.floor(Math.random() * (max - min)) + min;

export const Demo = () => {
  const mapDataToGenerators = index => {
    return data.map((d, i) => {
      const { pickers, segments, ...generator } = d;

      const expression = segments.map(segment => {
        if (typeof segment === 'number') {
          const picker = pickers[segment];
          const value =
            i === index
              ? picker.picks[random(picker.picks.length)]
              : picker.name;
          return (
            <span
              key={segment}
              className="picker"
              style={{ backgroundColor: picker.color }}
            >
              {value}
            </span>
          );
        }
        return segment;
      });

      return {
        ...generator,
        expression,
      };
    });
  };

  const [generators, setGenerators] = useState(mapDataToGenerators());
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let i = random(10, 5);
    const timer = setInterval(() => {
      if (i-- < 0) {
        clearInterval(timer);
        setTimeout(() => {
          setIndex((index + 1) % data.length);
        }, 1000);
      }
      setGenerators(mapDataToGenerators(index));
    }, 1000);
  }, [index]);

  const renderGenerators = () => {
    return generators.map(generator => (
      <div key={generator.name} className="generator">
        <h3>{generator.name}</h3>
        <p>{generator.expression}</p>
      </div>
    ));
  };

  return (
    <Device>
      <header className="nav-header">
        <img src={logo} alt="Picks Logo" />
      </header>
      <div className="generators">{renderGenerators(generators[0])}</div>
    </Device>
  );
};

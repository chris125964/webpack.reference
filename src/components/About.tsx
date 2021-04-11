import React from 'react';
import { Person } from '../model/person';

const About = ({}) => {
  const person = new Person('Christian', 'Todd');
  return (
    <div>
      <h1>Hello About</h1>;
      <h1>
        {person.firstName} {person.lastName}
      </h1>
      ;
    </div>
  );
};

export default About;

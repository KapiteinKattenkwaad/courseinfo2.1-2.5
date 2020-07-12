import React from 'react';

const reducer = (accumulator, currentValue) => accumulator + currentValue;


const Course = ({name, amount, part, key}) => {
  return (
    <div>
      <h2>{name} </h2>
      <ul>
        {part.map(name =>
          <li>
            {name.name}
          </li>
        )}
      </ul>
     <p> The total of excercises is {amount.reduce(reducer)}</p>
    </div>
  );
}


export default Course;

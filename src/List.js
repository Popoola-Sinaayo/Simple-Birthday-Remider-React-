import React from 'react';

const List = ({id, name, age, image, removeHandler}) => {
  return (
    <div className='main'>
      <section className='person'>
        <img src={image} alt={name}></img>
        <div>
        <h4>{name}</h4>
        <p>{age} Years</p>
        </div>
      </section>
      <section>
      <button className='remove' onClick={() => removeHandler(id)}>Remove</button>
      </section>
    </div>
  );
};

export default List;

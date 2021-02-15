import React from 'react';
import PropTypes from 'prop-types';

const foodILike = [
  {
    id:1,
    name: "kimchi",
    image: "https://cdn.imweb.me/thumbnail/20200415/6b6e035658bac.png",
    rating: 5
  },
  {
    id:2,
    name: "samgyeopsal",
    image: "https://cdn.imweb.me/thumbnail/20200324/876cb6cbe8132.jpg",
    rating: 4.3
  }
];


function Food({name, picture, rating}){
    return (
        <div>
            <h1>I like {name}</h1>
            <h4>{rating}/5.0</h4>
            <img src={picture} alt={name}/>
        </div>
    )
}

Food.propTypes = {
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired
}

function App() {
    return (
        <div>
        {foodILike.map(dish => (
            <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>
        ))}
        </div>
    );
}

export default App;

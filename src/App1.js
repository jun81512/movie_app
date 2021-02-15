import React from 'react';

function Food({name, picture}){
  return <div>
    <h1>I like {name}</h1>
    <img src={picture}/>
  </div>
}
// function Food(props){
//  console.log(props);
//   return <h1>I like {props.fav}</h1>;
// }

const foodILike = [
  {
    name: "kimchi",
    image: "https://cdn.imweb.me/thumbnail/20200415/6b6e035658bac.png"
  },
  {
    name: "samgyeopsal",
    image: "https://cdn.imweb.me/thumbnail/20200324/876cb6cbe8132.jpg"
  }
];

function App() {
  return (
    <div>
      {/* <h1>Hello!!</h1>
      <Food fav="kimchi" />
      <Food fav="ramen" />
      <Food fav="samgiopsal" />
      <Food fav="chukumi" /> */}

      {foodILike.map(dish => (
        <Food name={dish.name} picture={dish.image} />
      ))}
    </div>
  );
}

export default App;

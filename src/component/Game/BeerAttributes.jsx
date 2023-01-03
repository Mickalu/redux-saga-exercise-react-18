import React from 'react'

const BeerAttributes = ({ beer }) => (
  <ul className="beer_details">
    <li>
      <span>{beer.country}</span>&nbsp;Country
    </li>
    <li>
      <span>{beer.type_beer}</span>&nbsp;Style
    </li>
    <li>
      <span>{beer.colour}</span>&nbsp;Colour
    </li>
    <li>
      <span>{beer.size ? beer.size.toString().toLowerCase().replace('cl', '') : ' '}</span>&nbsp;cl
    </li>
    <li>
      <span>{beer.graduation}</span>&nbsp;°Alcohol
    </li>
    <li>
      <span>
        {beer.price
          ? `${parseFloat(beer.price)
            .toFixed(2)
            .toString()
            .replace('.', ',')}`
          : ' '
        }
      </span>&nbsp;
      <span>&#163;</span>
    </li>
  </ul>
);

export default BeerAttributes

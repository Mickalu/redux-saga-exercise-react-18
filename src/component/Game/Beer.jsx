import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";

import { updateLoadingBeer } from '../slice/loadingBeer';
import BeerAttributes from '../component/Game/BeerAttributes';

const Beer = ({ beer }) => {
  const dispach = useDispatch();
  const currentIndex = useSelector((state) => state.currentIndex);

  let img_height = "auto";
  let beerImage;

  let beerImgWrapper = useRef(null);
  let beerImg = useRef(null);

  const loadingBeerComponent = (<span><i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw" /></span>);

  useEffect(() => {
    if(beerImg.current) {
      beerImg.current.style.width = `${beerImgWrapper.current.offsetWidth}px`;
    }
  },
  [currentIndex]);

  const imageLoaded = () => {
    if(img_height === 'auto') {
      beerImg.current.style.width = `${beerImgWrapper.current.offsetWidth}px`;
      img_height = beerImg.current.style.height;
    }
    dispach(updateLoadingBeer(false));
  };

  if(beer.photo_link) {
    beerImage = (
      <img
        height={`${img_height}px`} style={{ height: img_height, color: 'red' }}
        className="img-responsive"
        ref={beerImg}
        src={beer.photo_link}
        onLoad={imageLoaded}
        onError={({ currentTarget }) => {
          dispach(updateLoadingBeer(false));
          currentTarget.src = "";
        }}
        role="presentation"
        name="beerImg"
         alt="beer"
      />
    );
  }
  else {
    beerImage = loadingBeerComponent;
  }

  return (
    <Container>
      <Row>
        <div className="col-sm-4" />
          <div className="col-sm-4 text-center beer-col">
            <div ref={beerImgWrapper} className="beer-img">
             {beerImage}
            </div>
            <h3 className="beer_title" name="beerTitle">{beer.title}</h3>
          </div>
        <div className="col-sm-4 hidden-xs hidden-sm">
          <BeerAttributes beer={beer} />
        </div>
      </Row>
    </Container>
  );
};

export default Beer;

import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";

import { updateLoadingBeer } from '../../slice/loadingBeer';
import BeerAttributes from './BeerAttributes';

const Beer = ({ beer }) => {
  const dispach = useDispatch();
  const loadingBeer = useSelector((state) => state.loadingBeer);
  let img_height = "auto";
  let loadingBeerComponent;

  let beerImgWrapper = useRef(null);
  let beerImg = useRef(null);

  useEffect(() => {
    beerImg.current.style.width = `${beerImgWrapper.current.offsetWidth}px`;
  });

  if (loadingBeer){
    loadingBeerComponent = (<span><i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw" /></span>);
  };

  const imageLoaded = () => {
    if (img_height === 'auto'){
      img_height = beerImg.current.style.height;
    }

    dispach(updateLoadingBeer(false));
  };

  return (
    <Container>
      <Row>
        <div className="col-sm-4" />
          <div className="col-sm-4 text-center beer-col">
            <div ref={beerImgWrapper} className="beer-img">
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
              />
              {loadingBeerComponent}
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

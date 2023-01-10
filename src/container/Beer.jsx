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

  let _beerImgWrapperRef = useRef(null);
  let _beerImgRef = useRef(null);

  const loadingBeerComponent = (<span data-testid="circle-spin"><i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw" /></span>);

  useEffect(() => {
    if(_beerImgRef.current) {
      _beerImgRef.current.style.width = `${_beerImgWrapperRef.current.offsetWidth}px`;
    }
  },
  [currentIndex]);

  const imageLoaded = () => {
    if(img_height === "auto"){
      _beerImgRef.current.style.width = `${_beerImgWrapperRef.current.offsetWidth}px`;
      img_height = _beerImgRef.current.style.height;
    }
    dispach(updateLoadingBeer(false));
  };

  const imageBeerDisplayed = () => {
    if(beer.photo_link){
      return (
        <img
          height={`${img_height}px`} style={{ height: img_height, color: "red" }}
          className="img-responsive"
          ref={_beerImgRef}
          src={beer.photo_link}
          onLoad={imageLoaded}
          onError={({ currentTarget }) => {
            dispach(updateLoadingBeer(false));
            currentTarget.src = "";
          }}
          alt="beer"
          role="presentation"
          name="beerImg"
          data-testid="beer-image"
        />
      );
    }
    else {
      return loadingBeerComponent;
    }
  };

  return (
    <Container data-testid="beer-container">
      <Row>
        <div className="col-sm-4" />
          <div className="col-sm-4 text-center beer-col">
            <div data-testid="div-image-beer" ref={_beerImgWrapperRef} className="beer-img">
             {imageBeerDisplayed()}
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

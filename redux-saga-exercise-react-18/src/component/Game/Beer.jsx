import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";

import BeerAttributes from './BeerAttributes';

const Beer = () => {
  return (
    <div>
      <Container>
          <Row>
            <div className="col-sm-4" />
              <div className="col-sm-4 text-center beer-col">
                <div ref={node => this.beerImgWrapper = node} className="beer-img">
                  <img
                    height={`${this.img_height}px`} style={{ height: this.img_height, color: 'red' }}
                    className="img-responsive"
                    ref={node => this.beerImg = node}
                    src={beer.photo_link}
                    onLoad={imageLoaded}
                    onError={({ currentTarget }) => {
                      this.props.setLoadingBeer(false);
                      currentTarget.src = "";
                    }}
                    role="presentation"
                    name="beerImg"
                  />
                  { loadingBeerComponent }
                </div>
                <h3 className="beer_title" name="beerTitle">{beer.product_name}</h3>
                <h3 className="beer_title" name="beerTitle">Test</h3>
              </div>
            <div className="col-sm-4 hidden-xs hidden-sm">
              {/* <BeerAttributes beer={beer} /> */}
              <BeerAttributes />
            </div>

          </Row>
      </Container>
    </div>
  );
};

export default Beer;

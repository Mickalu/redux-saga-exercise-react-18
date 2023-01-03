export const INIT_BEERS_SLICE_STATE = {
  data: [],
  isFetching: false,
};

export const initBeersSliceWithBeers = {
  data: [
    {id:"82", title:"Karmeliet Triple", description:"<p>Do we really have to introduce Triple Karmeliet, our best-selling beer?</p>", country:"Belgium", type_beer:"Tripel", company:"Brasserie Bosteels", colour:"Blond", graduation:"6 %", size:"33 cl", price:"2.5", photo_link:"https://img.saveur-biere.com/img/p/82-14662-thickbox_sb3.jpg"},
    {id:"126", title:"Cuvée des trolls", description:"<p>A tradionally made beer with fruity notes of orange and honey. Discover one of the reference beers from Belgium!</p>", country:"Belgium", type_beer:"Belgian Pale ale / Blonde", company:"Brasserie Dubuisson", colour:"Blond", graduation:"8 %", size:"25 cl", price:"1.6", photo_link:"https://img.saveur-biere.com/img/p/126-14990-thickbox_sb3.jpg"}
  ],
  isFetching: false,
}

export const stateIsFetchingTrue = {
  data: [],
  isFetching: true,
};

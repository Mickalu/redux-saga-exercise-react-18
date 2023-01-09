export const INIT_BEERS_SLICE_STATE = {
  data: [],
  isFetching: false,
};

export const initBeersSliceWithBeers = {
  data: [
    {id:"1", title:"Karmeliet Triple", description:"<p>Do we really have to introduce Triple Karmeliet, our best-selling beer?</p>", country:"Belgium", type_beer:"Tripel", company:"Brasserie Bosteels", colour:"Blond", graduation:"6 %", size:"33 cl", price:"2.5", photo_link:"https://img.saveur-biere.com/img/p/82-14662-thickbox_sb3.jpg"},
    {id:"2", title:"Cuvée des trolls", description:"<p>A tradionally made beer with fruity notes of orange and honey. Discover one of the reference beers from Belgium!</p>", country:"Belgium", type_beer:"Belgian Pale ale / Blonde", company:"Brasserie Dubuisson", colour:"Blond", graduation:"8 %", size:"25 cl", price:"1.6", photo_link:"https://img.saveur-biere.com/img/p/126-14990-thickbox_sb3.jpg"},
    {id:"3",title:"Kwak",description:"<p>This Belgian beer no longer needs any introduction. Best poured in the original coachman's glass from this brand!</p>",country:"Belgium",type_beer:"Belgian Pale ale / Blonde",company:"Brasserie Bosteels",colour:"Amber",graduation:"8 %",size:"33 cl",price:"2.1",photo_link:"https://img.saveur-biere.com/img/p/104-16465-thickbox_sb3.jpg"},
    {id:"4",title:"Orval",description:"<p>Orval is a triple trappist bitter-sweet beer with an evolutive flavour! A true Belgian reference beer.</p>",country:"Belgium",type_beer:"Belgian Pale ale / Blonde",company:"Abbaye d'Orval",colour:"Amber",graduation:"6 %",size:"33 cl",price:"2.8",photo_link:"https://img.saveur-biere.com/img/p/81-14420-thickbox_sb3.jpg"},
  ],
  isFetching: false,
};

export const stateBeers = {
  data: [
    { id: "1" },
    { id: "2" },
    { id: "3" },
    { id: "4" },
  ],
  isFetching: false,
};

export const stateIsFetchingTrue = {
  data: [],
  isFetching: true,
};

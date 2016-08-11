const initialState = {
  year: 2016,
  photos: []
};

export default function page(state = initialState, action){
  let data = JSON.stringify(state);
  data = JSON.parse(data);

  switch (action.type){
    case 'SET_YEAR':
      data = {year: action.payload, photos: []};
      break;
    default:
      data = state;
      break;
  }
  return data;
}

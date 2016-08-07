const initialState = {
  year: 2016,
  photos: []
};

export default function page(state = initialState, action){
  let data;

  switch (action.type){
    case 'SET_YEAR':
      data = {state, year: action.payload};
      break;
    default:
      data = state;
      break;
  }
  return data;
}

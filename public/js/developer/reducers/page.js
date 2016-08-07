const initialState = {
  year: 2016,
  photos: []
};

export default function page(state = initialState, action){

  switch (action.type){
    case 'SET_YEAR':
      (function(){
            return {state, year: action.payload}
          })();
          break;
    default:
      (function(){
        return state;
      })();
          break;
  }

}

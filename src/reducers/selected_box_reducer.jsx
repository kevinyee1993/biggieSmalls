import { SELECT_IMAGE } from '../actions/index';


// just setting the default selected pictures;
const defaultState = { boxPic1: null,
  boxPic2: null,
  boxSize1: null,
  boxSize2: null};

// once action gets sent, check to see if boxPic1 is occupied
// if it is, set boxPic2 to that picture
// if both occupied, then show the final message
export default function(state = defaultState, action) {
  switch(action.type) {
    case SELECT_IMAGE:
      if(!state.boxPic1) {
        // return { imageSize: action.payload };
        return Object.assign({}, state, { boxPic1: action.payload.imageURL,
          boxSize1: action.payload.imageSize });
      } else if(!state.boxPic2) {
        return Object.assign({}, state, { boxPic2: action.payload.imageURL,
          boxSize2: action.payload.imageSize });
      }

      // think about returning default state here or something to restart
      // everything after both boxes are filled
  }

  return state;
}

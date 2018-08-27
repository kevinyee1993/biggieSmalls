export const SELECT_IMAGE = 'SELECT_IMAGE';
export const RESET_GAME = 'RESET_GAME';


// does the payload have to be an object or can it just be
// some data?
// looks like it can just be data then you do what you want with it homie
export function selectImage(image) {
  return({
    type: SELECT_IMAGE,
    payload: image
  });
}

export function resetSelection() {
  return(
    {
      type: RESET_GAME,
      payload: { boxPic1: null,
        boxPic2: null,
        boxSize1: null,
        boxSize2: null }
    }
  );
}

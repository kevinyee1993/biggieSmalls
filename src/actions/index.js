export const SELECT_IMAGE = 'SELECT_IMAGE';


// does the payload have to be an object or can it just be
// some data?
// looks like it can just be data then you do what you want with it homie
export function selectImage(image) {
  return({
    type: SELECT_IMAGE,
    payload: image
  });
}

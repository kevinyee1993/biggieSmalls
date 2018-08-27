
// just setting the default selected pictures;
const defaultState = { boxPic1: null, boxPic2: null };

// once action gets sent, check to see if boxPic1 is occupied
// if it is, set boxPic2 to that picture
// if both occupied, then show the final message
export default function(state = defaultState, action) {
  return({
    test: "farts"
  });
}

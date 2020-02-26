const initialState = [
  {
    position: '1',
    marking : ''
  },
  {
    position: '2',
    marking : ''
  },
  {
    position: '3',
    marking : ''
  },
  {
    position: '4',
    marking : ''
  },
  {
    position: '5',
    marking : ''
  },
  {
    position: '6',
    marking : ''
  },
  {
    position: '7',
    marking : ''
  },
  {
    position: '8',
    marking : ''
  },

  {
    position: '9',
    marking : ''
  },

];


export default function Marking(state=initialState, action){
  switch (action.type){
    case 'MARK_SPOT':
    state.map((square) => {
      if (square.position === action.position) {
        return{
        ...square,
        marking: action.marking
      };
      }
      return square
    });
    default:
    return state
  }
}

const index = {i: 0};
const banner = (state={i: 0}, action) => {
  switch (action.type) {
    case 'NEXT':
      const i = typeof action.payload !== 'undefined' ? action.payload : 0;
      return {
        ...state,
        ...banner,
        i: i === 2 ? 0 : i + 1
      }
    default:
      return state
  }
}

export default banner;

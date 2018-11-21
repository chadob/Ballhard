const data = (state={factList: null, currentFact: null, errorOnSignIn: false, signInWindow: false, signUpWindow: false}, action) => {
  switch (action.type) {
    case 'TOGGLE_SIGN_IN':
      return {
        ...state,
        signInWindow: action.payload,
      }
    case 'TOGGLE_SIGN_UP':
      return {
        ...state,
        signUpWindow: action.payload
      }
    case 'SIGN_IN':
      return {
        ...state,
        loggedIn: true,
        errorOnSignIn: false
      }
    case 'FAILED_SIGN_IN':
      return {
        ...state,
        loggedIn: false,
        errorOnSignIn: true
      }
    case 'FETCH_USER_FOR_SIGN_IN':
      return {
        ...state,
        user: action.payload
      }
    case 'SIGN_OUT':
      return {
        ...state,
        loggedIn: false,
        rating: null,
        user: null,
        recommendedVideos: null,
      }
    case 'SIGN_UP':
      return {
        ...state,
      }
    case 'FETCH_LISTS':
      return {
        ...state,
        imgList: action.payload.imgList,
        factList: action.payload.factList
      }
    case 'FETCH_VIDEO':
      return {
        ...state,
        video: action.payload
      }
    case 'CLEAR_VIDEO':
      return {
        ...state,
        video: action.payload
      }
    case 'FETCH_ALL_VIDEOS':
      return {
        ...state,
        allVideos: action.payload
      }
    case 'GENERATE_TOP_RATED':
      return {
        ...state,
        topRatedVideos: action.payload
      }
    case 'GENERATE_CONTENT':
      return {
        ...state,
        videosSections: action.payload
      }
    case 'GENERATE_RECOMMENDED_CONTENT':
      return {
        ...state,
        recommendedVideos: action.payload
      }
    case 'FETCH_USER_PICTURE':
      return {
        ...state,
        userPicture: action.payload
      }
    case 'FETCH_USER_RATINGS':
      return {
        ...state,
        rating: action.payload.rating,
        favorite: action.payload.favorite
      }
    case 'RATE_VIDEO':
      return {
        ...state,
        user: {
          ...state.user,
          ratings: {
            ...state.user.ratings,
            [action.payload.videoId]: action.payload.rating
          }
        }
      }
    case 'FETCH_COMMENTS':
      return {
        ...state,
        video: {
          ...state.video,
          comments: action.payload
        }
      }
    case 'ADD_COMMENT':
      return {
        ...state,
        video: {
          ...state.video,
          commentOrder: [...state.video.commentOrder, action.payload._id],
          comments: [...state.video.comments, action.payload],
        }
      }
    case 'TOGGLE_FAVORITE':
      return {
        ...state,
        user: {
          ...state.user,
          favoriteVideos: action.payload
        }
      }
    case 'SEARCH':
      return {
        ...state,
        search: {
          ...state.search,
          type: action.payload.type,
          query: action.payload.query,
          searchResults: action.payload.results
        }
      }
    case 'SEARCH_BY_PRESET':
      return {
        ...state,
        search: {
          ...state.search,
          type: "preset",
          query: action.payload.query,
          searchResults: action.payload.results
        }
      }
    case 'SEARCH_BY_TYPE':
      return {
        ...state,
        search: {
          ...state.search,
          type: "type",
          query: action.payload
        }
      }
    case 'SEARCH_BY_QUERY':
      return {
        ...state,
        search: {
          ...state.search,
          type: "query",
          query: action.payload
        }
      }
    case 'FETCH_SEARCHES':
      return {
        ...state,
        searches: action.payload.searches,
        topSearches: action.payload.topSearches,
        userSearches: action.payload.userSearches
      }
    case 'UPDATE_SEARCHES':
      return {
        ...state,
      }
    case 'UPDATE_USER_SEARCHES':
      return {
        ...state,
        user: {
          ...state.user,
          recentSearches: action.payload
        }
      }
    default:
      return state
  }
}

export default data;

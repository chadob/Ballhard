import {data} from '../Data/data.js';
import fetch from 'cross-fetch';
import axios from 'axios';
import {
  TOGGLE_SIGN_IN,
  TOGGLE_SIGN_UP,
  SIGN_IN,
  FAILED_SIGN_IN,
  SIGN_OUT,
  SIGN_UP,
  FETCH_LISTS,
  FETCH_VIDEO,
  FETCH_USER_FOR_SIGN_IN,
  FETCH_ALL_VIDEOS,
  FETCH_USER_RATINGS,
  FETCH_USER_PICTURE,
  FETCH_COMMENTS,
  FETCH_SEARCHES,
  GENERATE_CONTENT,
  GENERATE_TOP_RATED,
  GENERATE_RECOMMENDED_CONTENT,
  UPDATE_SEARCHES,
  UPDATE_USER_SEARCHES,
  SEARCH_BY_PRESET,
  SEARCH,
  SEARCH_BY_TYPE,
  SEARCH_BY_QUERY,
  NEXT,
  LOG_IN,
  RATE_VIDEO,
  TOGGLE_FAVORITE,
  ADD_COMMENT,
} from "./types";
import {searchFor, containsWord, basicSearch} from "./helperFunctions";

const url = process.env.NODE_ENV === 'production' ? "/api/" : "http://localhost:5000/api/";
export const sections = {
  DUNKING: 'DUNKING',
  DRIBBLING: 'DRIBBLING',
  SHOOTING: 'SHOOTING'
}
export const toggleSignIn = (status) => ({
  type: TOGGLE_SIGN_IN,
  payload: status
});
export const toggleSignUp = (status) => ({
  type: TOGGLE_SIGN_UP,
  payload: status
});

export function fetchUserForSignIn(username, password) {
  return (dispatch) => {
    axios.get(`${url}user/getuser/${username}`, {params: {password: password}})
    .then(function(res) {
      let data = res.data
      console.log(data)
      if (data) {
        let userSearches = res.data.recentSearches
        dispatch(fetchAllVideos(userSearches))
        dispatch({type:FETCH_USER_FOR_SIGN_IN, payload: data})
        dispatch({type: SIGN_IN});
      } else {
        dispatch({type: FAILED_SIGN_IN})
      }
    }).catch((err) => {
      console.log(err)
    })
  }
}
export const signOut = (id) => ({
    type: SIGN_OUT
});

//add user to database and then sign in
export const signUp = (username, password) => {
  return (dispatch) => {
    console.log(username, password)
    axios.post(`${url}user`, {username: username, password: password}).then((res) => {
      console.log(res);
      dispatch(fetchUserForSignIn(username, password));
    }).catch((err)=>console.log(err))
  }
};


export const fetchLists = () => ({
    type: FETCH_LISTS,
    payload: {
      imgList: data.imgList,
      factList: data.factList
    }
});
export const fetchVideo = id => {
  return (dispatch) => {
    axios.get(`${url}video/get/${id}`)
    .then((res) => {
      let video = res.data
      console.log(video)
      dispatch({type: 'FETCH_VIDEO', payload: video});
      dispatch(fetchComments(id, video.commentOrder))
    }).catch((err) => console.log(err))
  }
}

export const fetchAllVideos = (userSearches) => {
  return (dispatch) => {
    axios.get(`${url}/videos`)
    .then((res) => {
      let allVideos = res.data
      dispatch(generateMainContent(allVideos, userSearches));
      dispatch({type:FETCH_ALL_VIDEOS, payload: allVideos})
    }).catch((err) => {
      console.log(err)
    })
  }
}
export const fetchComments = (id, arr) => {
  return (dispatch) => {
    axios.get(`${url}comments/${id}`)
    .then((res) => {
      let comments = res.data
      dispatch({
        type: FETCH_COMMENTS,
        payload: arr.map(function(id) {
          return comments.find(comment => {
            return comment._id === id
          })
        })
      });
    }).catch((err) => console.log(err))
  }
}
export function fetchSearches () {
  return (dispatch) => {
    axios.get(`${url}searches`)
    .then((res) => {
      let data = res.data
      delete data["_id"];
      dispatch({
        type: FETCH_SEARCHES,
        payload: {
          searches: data
        }
      });
    }).catch((err) => {
      console.log(err)
    })
  }
}
export function updateSearches (search, userId) {
  return (dispatch) => {
    axios.post(`${url}user/search/${search}`, {userId: userId}).then((res) => {
      console.log(res);
      dispatch({
        type: UPDATE_USER_SEARCHES,
        payload: res.data
      });
    }).catch((err)=>console.log(err))
    axios.post(`${url}search/${search}`).then((res) => {
      console.log(res);
      dispatch({
        type: UPDATE_SEARCHES,
      });
    }).catch((err)=>console.log(err))
  }
}
//Search through videos for query
export const search = (query, type, videos) => {
  console.log(query)
  console.log(type)
  console.log(videos)
  return (dispatch => {
    let splitQuery = query.toLowerCase().split(" ");
    console.log(splitQuery)
    let results;
    if (type === "query") {
      results = {['Videos containing "' + [query] + '"']: videos.filter((video, idx) => {
        return basicSearch(splitQuery, video.description)
      })}
    } else {
      results = {[query]: videos.filter((video, idx) => {
        return basicSearch(splitQuery, video.section)
      })}
    }
    dispatch({
      type: SEARCH,
      payload: {
        query: query,
        type: type,
        results: results
      }
    })
  })
}
//let state know that search is by section
export const searchByPreset = (query, results) => {
  console.log(results);
  return {
    type: SEARCH_BY_PRESET,
    payload: {
      query: query,
      results: results
    }
  }
};
//let state know that search is by section
export const searchByType = section => ({
    type: SEARCH_BY_TYPE,
    payload: section
});
//let state know that search is by query
export const searchByQuery = query => ({
    type: SEARCH_BY_QUERY,
    payload: query
});

export const generateContent = (type, sections, arr) => {
  return (dispatch) => {
    let arraysObj = {}
    //loop through sections to get the names of the different generateSections
    // check each section's array against all videos to find out if they contain work and one of the words in the array

    arraysObj = sections.map((section,idx) => {
      let curSec = Object.keys(sections[idx])[0]
      let sectionTitle = curSec.charAt(0).toUpperCase() + curSec.slice(1)+ " Workouts"
      return {[sectionTitle]:
        arr.filter(video => {
          (video.section.indexOf(section[0])  > -1 || video.section.indexOf(section[1]) > -1)
          && (video.description.indexOf(type[0]) > -1 || video.description.indexOf(type[1]) > -1)
        })
      }
    });
    dispatch({
      type: GENERATE_CONTENT,
      payload: arraysObj
    })
  }
}

// searches through all videos descriptions and returns videos where
// their descriptions contain all search words in at least one of the
// user's recent searches
export const generateRecommendedContent = (userSearches, videos) => {
  return (dispatch => {
    let keywords = userSearches.map(search => {
      return search.toLowerCase().split(" ");
    })
    let results = {Recommended: videos.filter((video, idx) => {
      return keywords.some(searchFor(video.description))
    })}
    dispatch({
      type: GENERATE_RECOMMENDED_CONTENT,
      payload: results
    })
  })
}
export const generateTopRated = (arr) => {
  return (dispatch) => {
    let sortedArr = {"Top Rated": arr.sort( (a,b) => {
      return a.rating - b.rating;
    }).slice(0,5)};
    dispatch({
      type: GENERATE_TOP_RATED,
      payload: sortedArr
    })
  }
}
export function generateMainContent (allVideos) {
  return dispatch => {
    dispatch(generateTopRated(allVideos)),
    dispatch(generateContent({"Workout": ["work", "drill"]}, [{"dunking": ["dunk", "jump"]}, {"dribbling": ["handl", "dribbl"]}, {"shooting": ["shoot", "shot"]}], allVideos))
  }
}
export const next = i => ({
    type: NEXT,
    payload: i
});

export const logIn = (username, password) => ({
    type: LOG_IN,
    payload: {
      username,
      password
    }
});
export function rateVideo (rating, videoId, userId) {
  return (dispatch) => {
    console.log(userId)
    axios.post(`${url}user/rate/${userId}`, {rating: rating, videoId: videoId}).then((res) => {
      console.log(res);
      dispatch({
        type: RATE_VIDEO,
        payload: {
          rating: rating,
          videoId: videoId,
          userId: userId
        }
      });
    }).catch((err)=>console.log(err))
  }
}

export function toggleFavorite (videoId, userId) {
  return (dispatch) => {
    axios.post(`${url}user/favorite/${videoId}`, {userId: userId}).then((res) => {
      console.log(res);
      dispatch({
        type: TOGGLE_FAVORITE,
        payload: res.data
      });
    });
  }
}
export function addComment (comment) {
  return (dispatch) => {
    console.log(comment)
    axios.post(`${url}video/comment/${comment.video}`, comment).then((res) => {
      console.log(res);
      dispatch({
        type: ADD_COMMENT,
        payload: comment
      });
    }).catch((err)=>console.log(err))
  }
}

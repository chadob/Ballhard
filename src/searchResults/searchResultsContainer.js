import React from 'react';
import './searchResults.css'
import { SearchResults } from './searchResults';
import { search, fetchAllVideosAndSearch, searchByPreset } from "../actions";
import { push } from 'connected-react-router'
import { connect } from 'react-redux';

class SearchResultsContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  //Check to see if this component was created by the preset searches on the main page
  //Function exists because update isn't getting called on reroute to /search
  componentDidMount () {
    if (this.props.match.params.type === "preset"){
      if (this.props.match.params.query === "recommended" && !this.props.recommendedVideos) {
        this.props.push('/');
      }
      if (this.props.match.params.query === "top rated" && !this.props.topRatedVideos) {
        this.props.push('/');
      }
    }
    else if (this.props.allVideos) {
      this.props.search(this.props.match.params.query, this.props.match.params.type, this.props.allVideos);
    } else {
      this.props.fetchAllVideosAndSearch(this.props.match.params.query, this.props.match.params.type)
    }
  }
  //First check to see if this component was created by the preset searches on the main page
  //next check if the new props being received are all there and are different then what we already have
  componentDidUpdate(prevProps) {
    console.log(prevProps);
    console.log(this.props)
    console.log(this.props.match.params)
    if (this.props.match.params.type === "preset"){
      if (this.props.match.params.query === "recommended" && !this.props.recommendedVideos) {
        this.props.push('/');
      } else if (this.props.match.params.query === "recommended") {
        this.props.searchByPreset(this.props.match.params.query, this.props.recommendedVideos)
      }
      if (this.props.match.params.query === "top rated" && !this.props.topRatedVideos) {
        this.props.push('/');
      } else if (this.props.match.params.query === "top rated") {
        this.props.searchByPreset(this.props.match.params.query, this.props.topRatedVideos)
      }
    }
    if (this.props.allVideos && ((prevProps.type !== this.props.type) || (prevProps.query !== this.props.query))) {
      console.log('update ran')
      this.props.search(this.props.match.params.query, this.props.match.params.type, this.props.allVideos);
    }
    if (this.props.allVideos && ((this.props.match.params.type !== this.props.type) || (this.props.match.params.query !== this.props.query))) {
      console.log('update ran')
      this.props.search(this.props.match.params.query, this.props.match.params.type, this.props.allVideos);
    }
  }
  render() {
    console.log(this.props)
    return (
      <SearchResults currentSearch={this.props.search} search={this.props.searchResults} />
    );
  }
}
function mapStateToProps ( state ) {
  console.log(state)
  return {
    searchResults: state.data.search && state.data.search.searchResults,
    query: state.data.search && state.data.search.query.toLowerCase(),
    type: state.data.search && state.data.search.type.toLowerCase(),
    allVideos: state.data.allVideos,
    recommendedVideos: state.data.recommendedVideos,
    topRatedVideos: state.data.topRatedVideos
  }
}

const mapDispatchToProps = dispatch => ({
  search: (query, type, videos) => dispatch(search(query, type, videos)),
  searchByPreset: (query, results) => dispatch(searchByPreset(query, results)),
  fetchAllVideosAndSearch: (query, type) => dispatch(fetchAllVideosAndSearch(query, type)),
  push: (route) => dispatch(push(route))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultsContainer)

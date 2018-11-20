import React from 'react';
import './mainContent.css'
import { MainContent } from './mainContent';
import { fetchUserRatings, generateRecommendedContent } from '../../actions';

import { connect } from 'react-redux';

class MainContentContainer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      promoArray: [{title: "Check Out ILoveBasketballTV's Youtube Channel", subtitle: "A great channel for finding a variety of videos", href: "https://www.youtube.com/user/ILoveBasketballTV", src: require("../../Assets/ilovebasketballtv.jpg"), button: "VISIT ILOVEBASKETBALLTV"}],
    }
  }
  componentWillMount() {
  }
  componentWillReceiveProps(newProps) {
    if ((newProps.recentSearches && newProps.allVideos) && (this.props.recentSearches !== newProps.recentSearches || this.props.allVideos !== newProps.allVideos)) {
      this.props.generateRecommendedContent(newProps.recentSearches, newProps.allVideos);
    }
  }
  render() {
    return (
      <MainContent recommendedVideos={this.props.recommendedVideos} topRatedVideos={this.props.topRatedVideos} videosSections={this.props.videosSections} searchesArray={this.state.searchesArray} promoArray={this.state.promoArray}/>
    );
  }
}
function mapStateToProps ( state ) {
  return {
    recommendedVideos: state.data.recommendedVideos,
    topRatedVideos: state.data.topRatedVideos,
    videosSections: state.data.videosSections,
    recentSearches: state.data.user && state.data.user.recentSearches,
    allVideos: state.data.allVideos,
    recommendedVideos: state.data.recommendedVideos,
  }
}
const mapDispatchToProps = dispatch => ({
  generateRecommendedContent: (userSearches, allVideos) => dispatch(generateRecommendedContent(userSearches, allVideos)),
});
export default connect(mapStateToProps, mapDispatchToProps)(MainContentContainer)

import React from 'react';
import ExploreContainer from '../explore/exploreContainer';
import { PromoContainer } from '../promo/promoContainer';
import DisplaySearchContainer from '../displaySearch/displaySearchContainer';

export class MainContent extends React.Component {
  render() {
    return (
      <div className="main-content" style={{}}>
        <ExploreContainer />
        <PromoContainer promo={this.props.promoArray[0]}/>
        {this.props.recommendedVideos && this.props.recommendedVideos["Recommended"].length > 0 && <DisplaySearchContainer searchDone={true} search={this.props.recommendedVideos}/>}
        {this.props.topRatedVideos && this.props.topRatedVideos["Top Rated"].length > 0 && <DisplaySearchContainer searchDone={true} search={this.props.topRatedVideos}/>}
        {this.props.videosSections && this.props.videosSections.filter((array, index) => {
          this.props.videosSections[array] && this.props.videosSections[array].length > 0
          }).map((array) => {
            <DisplaySearchContainer searchDone={true} search={array}/>
          })
        }
      </div>
    );
  }
}

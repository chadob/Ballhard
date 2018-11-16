import React from 'react';
import BannerContainer from '../banner/bannerContainer';
import MainContentContainer from '../mainContent/mainContentContainer';

export class Home extends React.Component {
  render() {
    return (
      <div className="home" style={{}}>
        <BannerContainer />
        <MainContentContainer />
      </div>
    );
  }
}

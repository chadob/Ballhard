import React from 'react'
import { Route, Switch } from 'react-router'
import NavbarContainer from '../navbar/navbarContainer';
import HomeContainer from '../home/home/homeContainer';
import SearchResultsContainer from '../searchResults/searchResultsContainer';
import MainContentContainer from '../home/mainContent/mainContentContainer';
import VideoPageContainer from '../videopage/videopageContainer';

const routes = (
  <div>
    <NavbarContainer />
    <Switch>
      <Route exact path="/" component={HomeContainer} />
      <Route path="/search/:type/:query" key={this.type} component={SearchResultsContainer} />
      <Route path="/video/:id" component={VideoPageContainer} />
    </Switch>
  </div>
)

export default routes

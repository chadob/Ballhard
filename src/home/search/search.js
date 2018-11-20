import React from 'react';
import { Link } from "react-router-dom";
export class Search extends React.Component {
  render() {
    return (
      <div
        className={"search search-" + this.props.searchDisplay + " search-" + this.props.parent}
        onFocus={() => this.props.onFocus()}
        >
        <div className="search-content-wrapper">
          <div className="search-content">
            <div className="search-icon-wrapper">
              <Link to={'/search/query/' + this.props.currentSearch.toLowerCase()} onClick={(e) => {
                this.props.searchByQuery(this.props.currentSearch);
                this.props.updateSearches(this.props.currentSearch, this.props.userId)
              }}
              >
                <span aria-hidden="true" data-icon="e986;" className="icon-search"></span>
              </Link>
            </div>
            <input
              placeholder={this.props.currentPlaceholder}
              onChange={(e) => this.props.onChange(e)}
            >
            </input>
          </div>
        </div>

        <div className={"search-parameters " + this.props.searchParameters}>
          <p className="search-par-title"> EXPLORE BALLHARD BY SECTION</p>
          <div className="search-buttons">
            {this.props.catsArray && this.props.catsArray.map((category, index) =>
              <Link to={"/search/type/" + category.toLowerCase()} onClick={(e) => {
                this.props.searchByType(category)
              }}>
                {category}
              </Link>
            )}
          </div>
          <p className="search-par-title"> RECENT SEARCHES</p>

          <div className="recent-searches">
            {this.props.userSearches && this.props.userSearches.map((search, index) =>
              <Link to={"/search/query/" + search.toLowerCase()} onClick={(e) => {
                this.props.searchByQuery(search);
                this.props.updateSearches(search, this.props.userId)
            }}>
                <div className="recent-search icon-stopwatch">
                  <span> {search} </span>
                </div>
              </Link>
            )}
          </div>
        </div>

        <div className={"search-matches " + this.props.searchMatches}>
          <div className="common-searches">
            {this.props.searchMatchesList && this.props.searchMatchesList.map((commonSearch, index) =>
              <Link to={"/search/query/" + commonSearch.toLowerCase()} onClick={(e) => {
                this.props.searchByQuery(commonSearch);
              }}>
                <div className="common-search icon-stopwatch">
                  <span> {commonSearch} </span>
                </div>
              </Link>
            )}
          </div>
        </div>

      </div>
    );
  }
}

/**
*
* Search
*
*/

import React from 'react';
// import styled from 'styled-components';


class Searchbar extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = { term: '' }
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onTermChange(term);
  }

  render() {
    return (
      <div>
        search:
        <input onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }
}

Searchbar.propTypes = {

};

export default Searchbar;

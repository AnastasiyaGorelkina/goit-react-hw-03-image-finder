import React, { Component } from 'react';
import { Header, SearchForm, SearchFormBtn, Input } from './Searchbar.styled';
import PropTypes from 'prop-types';

export class Searchbar extends Component {
  state = {
    newQuery: '',
  };

  onSubmitBtn = e => {
    const { newQuery } = this.state;
    e.preventDefault();
    this.props.onSubmit(newQuery);
    if (this.state.newQuery === '') {
      alert('Введіть бажаєме значення');
    }
    this.setState({ newQuery: '' });
  };

  onChangeInput = e => {
    this.setState({
      newQuery: e.target.value,
    });
  };

  render() {
    return (
      <Header className="searchbar">
        <SearchForm className="form" onSubmit={this.onSubmitBtn}>
          <SearchFormBtn type="submit" className="button">
            <span className="button-label">Search</span>
          </SearchFormBtn>

          <Input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.newQuery}
            onChange={this.onChangeInput}
          />
        </SearchForm>
      </Header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,  
}
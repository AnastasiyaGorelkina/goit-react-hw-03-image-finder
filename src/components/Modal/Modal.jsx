import React, { Component } from 'react';
import { Overlay, ModalImg } from './Modal.styled';


export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };
  render() {
    const {largeImageURL, alt} = this.props
    return (
      <Overlay onClick={this.handleBackdropClick}>
        <ModalImg>
          <img src={largeImageURL} alt={alt} />
        </ModalImg>
      </Overlay>
    );
  }
}

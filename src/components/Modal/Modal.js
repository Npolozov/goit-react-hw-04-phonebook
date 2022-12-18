import { Modal, BackDrop } from './Modal.styled';
import { createPortal } from 'react-dom';
import { Component } from 'react';

const modalRoot = document.querySelector('#modal-root');

export class OpenModal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeydown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
  }

  handleKeydown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdrop = event => {
    console.log(event.currentTarget);
    console.log(event.target);
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };
  render() {
    return createPortal(
      <BackDrop onClick={this.handleBackdrop}>
        <Modal>{this.props.children}</Modal>
      </BackDrop>,
      modalRoot
    );
  }
}

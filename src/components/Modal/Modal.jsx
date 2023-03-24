import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { ModalStyled } from './Modal.styled';
import { TfiClose } from 'react-icons/tfi';
import { Component } from 'react';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  state = {
    modalOpened: false,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);

    setTimeout(() => {
      this.setState({ modalOpened: true });
    }, 150);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.handleCloseModal(e);
    }
  };

  handleCloseModal = e => {
    if (
      e.code === 'Escape' ||
      e.target === e.currentTarget ||
      e.currentTarget.classList.contains('close')
    ) {
      this.setState({ modalOpened: false });
      setTimeout(() => {
        this.props.onCloseModal(e);
      }, 150);
    }
  };

  render() {
    return createPortal(
      <ModalStyled
        onClick={this.handleCloseModal}
        className={!this.state.modalOpened ? 'is-hidden' : ''}
      >
        <div className="window">
          <div className="inner">
            <div className="container">
              <div className="text">{this.props.children}</div>
            </div>
          </div>
        </div>
        <TfiClose onClick={this.handleCloseModal} className="close" />
      </ModalStyled>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  onCloseModal: PropTypes.func.isRequired,
};

export default Modal;

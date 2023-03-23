import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { ModalStyled } from './Modal.styled';
import { TfiClose } from 'react-icons/tfi';
import { Component } from 'react';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', e => {
      if (e.code === 'Escape' && this.props.modalOpened) {
        this.props.onCloseModal(e);
      }
    });
  }

  render() {
    const { onCloseModal, modalOpened, children } = this.props;

    return createPortal(
      <ModalStyled
        onClick={onCloseModal}
        className={!modalOpened ? 'is-hidden' : ''}
      >
        <div className="window">
          <div className="inner">
            <div className="container">
              <div className="text">{children}</div>
            </div>
          </div>
        </div>
        <TfiClose onClick={onCloseModal} className="close" />
      </ModalStyled>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  onCloseModal: PropTypes.func.isRequired,
  modalOpened: PropTypes.bool.isRequired,
};

export default Modal;

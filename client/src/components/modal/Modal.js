import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { connect } from 'react-redux';
import { hideModal } from '../../redux/actions/ui';
import { getModalVisibility } from '../../redux/selectors/ui';
import { Wrapper, Container, CloseButton } from './ModalStyle';


const mapStateToProps = state => ({
	modalVisible: getModalVisibility(state),
});

const mapDispatchToProps = dispatch => ({
	modalHide: () => dispatch(hideModal()),
});

class Modal extends Component {
  constructor(props) {
    super(props);

    this.keyPressed = this.keyPressed.bind(this);
  }

  componentDidMount() {
    window.addEventListener('keydown', this.keyPressed);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.keyPressed);
  }

  keyPressed(e) {
    const { modalHide } = this.props;
    if (e.keyCode === 27) {
      modalHide();
    }
  }

  render() {
    const { children, modalVisible, closeModal } = this.props;
    const overflow = modalVisible ? 'hidden' : 'inherit';

    document.body.style.overflow = overflow;

    if (!modalVisible) {
      return null;
    }

    return createPortal(
      <Wrapper>
        <Container>
          <CloseButton onClick={ closeModal }>
            <img alt="" src="/images/close.svg" />
          </CloseButton>

          { children }
        </Container>
      </Wrapper>,
      document.querySelector('#modal')
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);

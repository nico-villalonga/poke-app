import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { connect } from 'react-redux';
import { hideModal } from '../../redux/actions/ui';
import { Wrapper } from './ModalStyle';


const mapDispatchToProps = dispatch => ({
	modalHide: () => dispatch(hideModal()),
});

class Modal extends Component {
  constructor(props) {
    super(props);

    this.keyPressed = this.keyPressed.bind(this);
  }

  componentDidMount() {
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', this.keyPressed);
  }

  componentWillUnmount() {
    document.body.style.overflow = 'inherit';
    window.removeEventListener('keydown', this.keyPressed);
  }

  keyPressed(e) {
    const { modalHide } = this.props;
    if (e.keyCode === 27) {
      modalHide();
    }
  }

  render() {
    const { children } = this.props;

    return createPortal(
      <Wrapper>
        { children }
      </Wrapper>,
      document.querySelector('#modal')
    );
  }
}

export default connect(null, mapDispatchToProps)(Modal);

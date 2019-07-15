import React, { Component } from 'react';
import { connect } from 'react-redux';
import { unselectGym } from '../../redux/actions/gym';
import { getSelectedGym } from '../../redux/reducers/gym';
import { getSelectedGymBadge, getSelectedGymLeader } from '../../redux/selectors/gym';
import {
	Wrapper, CloseButton, Container, ImageContainer,
  InfoContainer, ThumbsContainer,
} from './DetailViewStyle';


const mapStateToProps = state => ({
  selectedGym: getSelectedGym(state),
  badge: getSelectedGymBadge(state),
  leader: getSelectedGymLeader(state),
});

const mapDispatchToProps = dispatch => ({
  close: () => dispatch(unselectGym()),
});

class GymDetail extends Component {
  render() {
    const { selectedGym, close, badge, leader } = this.props;
    const {
      name, sprites,
      type, region, location,
    } = selectedGym;

    return (
      <Wrapper>
        <CloseButton onClick={ close }>[ CLOSE ]</CloseButton>

        <Container>
          <ImageContainer>
            { sprites && <img alt="" src={ sprites.front_default } /> }
            <h2>{ name }</h2>
          </ImageContainer>

          <InfoContainer>
            <p><strong>Location:</strong> { location }</p>
            <p><strong>Region:</strong> { region }</p>
            <p><strong>Type:</strong> { type }</p>

            <ThumbsContainer>
              <p><strong>Leader:</strong></p>

              <img
                alt=""
                src={ leader.sprites.front_default }
                title={ leader.name }
                className="small-image"
              />
            </ThumbsContainer>

            <ThumbsContainer>
              <p><strong>Badge:</strong></p>

              <img
                alt=""
                src={ badge.sprites.front_default }
                title={ badge.name }
                className="small-image"
              />
            </ThumbsContainer>
          </InfoContainer>
        </Container>
      </Wrapper>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GymDetail);

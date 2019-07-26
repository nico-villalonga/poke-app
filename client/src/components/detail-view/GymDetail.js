import React, { Component } from 'react';
import { connect } from 'react-redux';
import { notEmpty } from '../../utils/array';
import { cacheOrFetchTrainers } from '../../redux/actions/trainer';
import { getSelectedGym } from '../../redux/selectors/gym';
import { getSelectedGymBadge, getSelectedGymLeader } from '../../redux/selectors/gym';
import { Wrapper, ImageContainer, InfoContainer, ThumbsContainer } from './DetailViewStyle';


const mapStateToProps = state => ({
  selectedGym: getSelectedGym(state),
  badge: getSelectedGymBadge(state),
  leader: getSelectedGymLeader(state),
});

const mapDispatchToProps = dispatch => ({
  getTrainer: ids => dispatch(cacheOrFetchTrainers({ ids })),
});

class GymDetail extends Component {
  componentDidMount() {
    const { getTrainer, selectedGym } = this.props;
    getTrainer([selectedGym.leaderId]);
  }

  render() {
    const { selectedGym, badge, leader } = this.props;
    const {
      name, sprites,
      type, region, location,
    } = selectedGym;

    return (
      <Wrapper>
        <ImageContainer>
          { sprites && <img alt="" src={ sprites.front_default } /> }
          <h2>{ name }</h2>
        </ImageContainer>

        <InfoContainer>
          <p><strong>Location:</strong> { location }</p>
          <p><strong>Region:</strong> { region }</p>
          <p><strong>Type:</strong> { type }</p>

          {
            notEmpty(leader)
            && (
              <ThumbsContainer>
                <p><strong>Leader:</strong></p>

                <img
                  alt=""
                  src={ leader.sprites.front_default }
                  title={ leader.name }
                  className="small-image"
                />
              </ThumbsContainer>
            )
          }

          {
            notEmpty(badge)
            && (
              <ThumbsContainer>
                <p><strong>Badge:</strong></p>

                <img
                  alt=""
                  src={ badge.sprites.front_default }
                  title={ badge.name }
                  className="small-image"
                />
              </ThumbsContainer>
            )
          }
        </InfoContainer>
      </Wrapper>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GymDetail);

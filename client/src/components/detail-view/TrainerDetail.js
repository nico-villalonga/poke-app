import React, { Component } from 'react';
import { connect } from 'react-redux';
import { notEmpty } from '../../utils/array';
import { cacheOrFetchPokemons } from '../../redux/actions/pokemon';
import { getSelectedTrainer } from '../../redux/selectors/trainer';
import { getTrainerPokemons } from '../../redux/selectors/trainer';
import {
  Wrapper, ImageContainer, InfoContainer,
  ThumbsContainer, ThumbsList,
} from './DetailViewStyle';


const mapStateToProps = state => ({
  selectedTrainer: getSelectedTrainer(state),
  pokemons: getTrainerPokemons(state),
});

const mapDispatchToProps = dispatch => ({
  getPokemons: ids => dispatch(cacheOrFetchPokemons({ ids })),
});

class TrainerDetail extends Component {
  componentDidMount() {
    const { getPokemons, selectedTrainer } = this.props;
    getPokemons(selectedTrainer.pokemons);
  }

  render() {
    const { selectedTrainer, pokemons } = this.props;
    const {
      name, sprites, gender,
      homeTown, region,
    } = selectedTrainer;

    return (
      <Wrapper data-testid="trainer-detail">
        <ImageContainer>
          {
            sprites
            && (
              <img
                data-testid={`${name}-img`}
                alt=""
                src={ sprites.front_default }
              />
            )
          }
          <h2>{ name }</h2>
        </ImageContainer>

        <InfoContainer>
          <p><strong>HomeTown:</strong> { homeTown }</p>
          <p><strong>Region:</strong> { region }</p>
          <p><strong>Gender:</strong> { gender }</p>

          {
            notEmpty(pokemons)
            && (
              <ThumbsContainer>
                <p><strong>Pokemons:</strong></p>

                <ThumbsList>
                  {
                    pokemons.map(poke => (
                      <li key={ poke.id }>
                        <img
                          data-testid={`${poke.name}-img`}
                          alt={ poke.name }
                          title={ poke.name }
                          src={ poke.sprites.front_default }
                        />
                      </li>
                    ))
                  }
                </ThumbsList>
              </ThumbsContainer>
            )
          }
        </InfoContainer>
      </Wrapper>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TrainerDetail);

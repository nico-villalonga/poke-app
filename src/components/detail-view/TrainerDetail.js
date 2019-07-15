import React, { Component } from 'react';
import { connect } from 'react-redux';
import { unselectTrainer } from '../../redux/actions/trainer';
import { checkOrFetchPokemon } from '../../redux/actions/pokemon';
import { getSelectedTrainer } from '../../redux/reducers/trainer';
import { getTrainerPokemons } from '../../redux/selectors/trainer';
import {
	Wrapper, CloseButton, Container, ImageContainer,
  InfoContainer, ThumbsContainer, ThumbsList,
} from './DetailViewStyle';


const mapStateToProps = state => ({
  selectedTrainer: getSelectedTrainer(state),
  pokemons: getTrainerPokemons(state),
});

const mapDispatchToProps = dispatch => ({
  close: () => dispatch(unselectTrainer()),
  getPokemons: ids => dispatch(checkOrFetchPokemon({ ids })),
});

class TrainerDetail extends Component {
  componentDidMount() {
    const { getPokemons, selectedTrainer } = this.props;
    getPokemons(selectedTrainer.pokemons);
  }

  render() {
    const { selectedTrainer, close, pokemons } = this.props;
    const {
      name, sprites, gender,
      homeTown, region,
    } = selectedTrainer;

    return (
      <Wrapper>
        <CloseButton onClick={ close }>[ CLOSE ]</CloseButton>

        <Container>
          <ImageContainer>
            { sprites && <img alt="" src={ sprites.front_default } /> }
            <h2>{ name }</h2>
          </ImageContainer>

          <InfoContainer>
            <p><strong>HomeTown:</strong> { homeTown }</p>
            <p><strong>Region:</strong> { region }</p>
            <p><strong>Gender:</strong> { gender }</p>

            <ThumbsContainer>
              <p><strong>Pokemons:</strong></p>
              <ThumbsList>
                {
                  pokemons.map(poke => (
                    <li key={ poke.id }>
                      <img
                        alt={ poke.name }
                        title={ poke.name }
                        src={ poke.sprites.front_default }
                      />
                    </li>
                  ))
                }
              </ThumbsList>
            </ThumbsContainer>
          </InfoContainer>
        </Container>
      </Wrapper>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TrainerDetail);

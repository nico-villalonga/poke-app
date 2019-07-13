import React, { Component } from 'react';
import { connect } from 'react-redux';
import { unselectTrainer } from '../../redux/actions/trainer';
import { checkOrFetchPokemon } from '../../redux/actions/pokemon';
import { getSelectedTrainerId, getSelectedTrainer } from '../../redux/reducers/trainer';
import {
	Wrapper, CloseButton, Container,
	ImageContainer, InfoContainer,
} from './DetailViewStyle';


const mapStateToProps = state => ({
	selectedId: getSelectedTrainerId(state),
  selectedTrainer: getSelectedTrainer(state),
  pokemons: [],
});

const mapDispatchToProps = dispatch => ({
  close: () => dispatch(unselectTrainer()),
  getPokemons: ids => dispatch(checkOrFetchPokemon({ ids })),
});

class TrainerDetail extends Component {
  render() {
    const { selectedId, selectedTrainer, getPokemons, close } = this.props;

    if (selectedId === null) {
      return null;
    }

    getPokemons(selectedTrainer.pokemons);


    const {
      name, sprites, gender,
      homeTown, region, pokemons,
    } = selectedTrainer;

    return (
      <Wrapper>
        <CloseButton onClick={ close }>[ CLOSE ]</CloseButton>

        <Container>
          <ImageContainer>
            { sprites && <img alt="" src={sprites.front_default} /> }
            <h2>{ name }</h2>
          </ImageContainer>

          <InfoContainer>
            <p><strong>HomeTown:</strong> { homeTown }</p>
            <p><strong>Region:</strong> { region }</p>
            <p><strong>Gender:</strong> { gender }</p>

            <div>
              <p><strong>Pokemons:</strong></p>
              <ul>
                {/* { types.map((type, i) => <li key={ i }>{type.type.name}</li>) } */}
              </ul>
            </div>

            <div>
              <p><strong>Abilities:</strong></p>
              <ul>
                {/* { abilities.map((ability, i) => <li key={ i }>{ability.ability.name}</li>) } */}
              </ul>
            </div>
          </InfoContainer>
        </Container>
      </Wrapper>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TrainerDetail);

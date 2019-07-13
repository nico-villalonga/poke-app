import React from 'react';
import { connect } from 'react-redux';
import { unselectPokemon } from '../../redux/actions/pokemon';
import { getSelectedPokemonId, getSelectedPokemon } from '../../redux/reducers/pokemon';
import {
	Wrapper, CloseButton, Container,
	ImageContainer, InfoContainer,
} from './DetailViewStyle';


const mapStateToProps = state => ({
	selectedId: getSelectedPokemonId(state),
	selectedPokemon: getSelectedPokemon(state),
});

const mapDispatchToProps = dispatch => ({
	close: () => dispatch(unselectPokemon()),
});

const PokemonDetail = props => {
  const { selectedId, selectedPokemon, close } = props;

  if (selectedId === null) {
    return null;
  }

  const {
    name, sprites, height,
    weight, types, abilities,
  } = selectedPokemon;

  return (
    <Wrapper>
      <CloseButton onClick={ close }>[ CLOSE ]</CloseButton>

      <Container>
        <ImageContainer>
          { sprites && <img alt="" src={sprites.front_default} /> }
          <h2>{ name }</h2>
        </ImageContainer>

        <InfoContainer>
          <p><strong>Height:</strong> { height }</p>
          <p><strong>Weight:</strong> { weight }</p>

          <div>
            <p><strong>Types:</strong></p>
            <ul>
              { types.map((type, i) => <li key={ i }>{type.type.name}</li>) }
            </ul>
          </div>

          <div>
            <p><strong>Abilities:</strong></p>
            <ul>
              { abilities.map((ability, i) => <li key={ i }>{ability.ability.name}</li>) }
            </ul>
          </div>
        </InfoContainer>
      </Container>
    </Wrapper>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);

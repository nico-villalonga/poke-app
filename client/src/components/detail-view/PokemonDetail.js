import React from 'react';
import { connect } from 'react-redux';
import { getSelectedPokemon } from '../../redux/selectors/pokemon';
import { Wrapper, ImageContainer, InfoContainer } from './DetailViewStyle';


const mapStateToProps = state => ({
	selectedPokemon: getSelectedPokemon(state),
});

const PokemonDetail = props => {
  const { selectedPokemon } = props;
  const {
    name, sprites, height,
    weight, types, abilities,
  } = selectedPokemon;

  return (
    <Wrapper>
      <ImageContainer>
        { sprites && <img alt="" src={ sprites.front_default } /> }
        <h2>{ name }</h2>
      </ImageContainer>

      <InfoContainer>
        <p><strong>Height:</strong> { height }</p>
        <p><strong>Weight:</strong> { weight }</p>

        <div>
          <p><strong>Types:</strong></p>
          <ul>
            { types.map((type, i) => <li key={ i }>{ type.type.name }</li>) }
          </ul>
        </div>

        <div>
          <p><strong>Abilities:</strong></p>
          <ul>
            { abilities.map((ability, i) => <li key={ i }>{ ability.ability.name }</li>) }
          </ul>
        </div>
      </InfoContainer>
    </Wrapper>
  );
}

export default connect(mapStateToProps)(PokemonDetail);

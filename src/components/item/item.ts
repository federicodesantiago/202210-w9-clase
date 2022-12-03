import { ItemPokemon } from '../../model/itemModel.js';

export class ItemHTML {
    constructor(public pokemonArray: ItemPokemon) {}

    createTemplate() {
        return `<li class="card">
                    <img
                        class="pokemon_img"
                        src=${this.pokemonArray.picture}
                        alt="${this.pokemonArray.name} picture"
                    />
                    <div class="card_text">
                        <div class="name">
                            <h4 class="pokemon_label">Name:</h4>
                            <p class="pokemon_name">${this.pokemonArray.name}</p>
                        </div>
                        <div class="number">
                            <p class="pokemon_label">Number:</p>
                            <p class="pokemon_number">${this.pokemonArray.number}</p>
                        </div>
                    </div>
                </li>`;
    }
}

import { PokemonType } from '../../model/itemModel.js';
import { Component } from '../component/component.js';

export class ItemHTML extends Component {
    constructor(private selector: string, private item: PokemonType) {
        super();
        this.template = this.createTemplate(item);
        this.addRender(selector);
    }

    createTemplate(item: PokemonType) {
        return `<li class="card">
                    <img
                        class="pokemon_img"
                        src=${item.picture}
                        alt="${item.name} picture"
                    />
                    <div class="card_text">
                        <div class="name">
                            <h4 class="pokemon_label">Name:</h4>
                            <p class="pokemon_name">${item.name}</p>
                        </div>
                        <div class="number">
                            <p class="pokemon_label">Number:</p>
                            <p class="pokemon_number">${item.id}</p>
                        </div>
                    </div>
                </li>`;
    }
}

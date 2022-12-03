import { ItemPokemon, PokemonType } from '../../model/itemModel.js';
import { ItemHTML } from '../item/item.js';
import { Component } from '../component/component.js';

export class itemList extends Component {
    constructor(selector: string, public pokemonArray: Array<PokemonType>) {
        super();
        this.template = ' ';
        this.renderAllCards();
        this.outRender(selector);
    }
    renderAllCards() {
        this.pokemonArray.forEach((pokemon: ItemPokemon) => {
            this.template += new ItemHTML(pokemon).createTemplate();
        });
        return this.template;
    }
}

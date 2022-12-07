import { PokemonType } from '../../model/itemModel.js';
import { ItemHTML } from '../item/item.js';
import { Component } from '../component/component.js';
import { PokeRepo } from '../../repository/pokeRepo.js';

export class itemList extends Component {
    pokemon: Array<PokemonType>;
    repo = new PokeRepo();
    counter: number;
    constructor(private selector: string) {
        super();
        this.counter = 0;
        this.pokemon = [];
        this.template = this.createTemplate();
        this.outRender(selector);
        this.loadPoke();
    }

    // manageComponent() {
    //     this.template = this.createTemplate();
    //     this.render();
    //     return
    // }

    render() {
        super.cleanHtml(this.selector);
        return super.outRender(this.selector);
    }

    async loadPoke() {
        const jSONArray = await this.repo.load();
        this.pokemon = jSONArray[1];
        !this.counter ? (this.counter = this.pokemon.length) : this.counter;
        this.pokemon.forEach((item) => {
            fetch(item.url)
                .then((response) => response.json())
                .then(() => {
                    new ItemHTML('.itemCard', item);
                });
        });
    }

    createTemplate() {
        return `
        <section class="pokemons">
            <h3>Lista de Pokemons</h3>
            <ul class="class="cardList">
                <slot name="itemCard" class="itemCard"></slot>
            </ul>
        </section>
        `;
    }
}

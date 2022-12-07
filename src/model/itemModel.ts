export type PokemonType = {
    id: string;
    name: string;
    number: number;
    picture: string;
    isFavourite: boolean;
    url: string;
};
export class ItemPokemon implements PokemonType {
    isFavourite: boolean;
    url: string;
    constructor(
        public id: string,
        public number: number,
        public name: string,
        public picture: string
    ) {
        this.isFavourite = false;
        this.url = 'https://pokeapi.co/api/v2/pokemon/';
    }
}

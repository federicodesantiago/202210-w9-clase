export type PokemonType = {
    id: string;
    name: string;
    number: number;
    picture: string;
};

export class ItemPokemon implements PokemonType {
    static generateId() {
        const aNumbers = new Uint32Array(1);
        crypto.getRandomValues(aNumbers);
        return ('000000' + aNumbers[0]).slice(-6);
    }
    id: string;
    constructor(
        public name: string,
        public number: number,
        public picture: string
    ) {
        this.id = ItemPokemon.generateId();
    }
}

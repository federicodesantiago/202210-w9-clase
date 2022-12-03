import { PokemonType, ItemPokemon } from '../model/itemModel.js';

export const pokemonArray: Array<PokemonType> = [
    new ItemPokemon(
        'Gyarados',
        130,
        'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/0/03/latest/20170617010358/Gyarados.png/200px-Gyarados.png'
    ),
    new ItemPokemon(
        'Ditto',
        132,
        'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/0/03/latest/20170617010358/Ditto.png/200px-Ditto.png'
    ),
    new ItemPokemon(
        'Beldum',
        374,
        'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/f/f5/latest/20141214182626/Beldum.png/200px-Beldum.png'
    ),
    new ItemPokemon(
        'Tentacruel',
        73,
        'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/7/78/latest/20080909115045/Tentacruel.png/200px-Tentacruel.png'
    ),
    new ItemPokemon(
        'Cubone',
        104,
        'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/6/65/latest/20170615210232/Cubone.png/200px-Cubone.png'
    ),
    new ItemPokemon(
        'Snorlak',
        143,
        'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/0/0b/latest/20160904204605/Snorlax.png/200px-Snorlax.png'
    ),
];

export const InitializePokemon = () => pokemonArray;

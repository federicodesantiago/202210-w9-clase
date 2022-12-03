import { Header } from './components/header/header.js';
import { itemList } from './components/itemList/itemList.js';
import { pokemonArray } from './mocks/itemMock.js';

(() => {
    document.addEventListener('DOMContentLoaded', () => {
        new Header('.header');
        new itemList('.itemCard', pokemonArray);

        const buttonBack = document.querySelector('.arrowBack');
        if (buttonBack != null) {
            buttonBack.addEventListener('click', () => {
                console.log('buttonBack pressed');
            });
        }

        const buttonNext = document.querySelector('.arrowNext');
        if (buttonNext != null) {
            buttonNext.addEventListener('click', () => {
                console.log('buttonNext pressed');
            });
        }
    });
})();

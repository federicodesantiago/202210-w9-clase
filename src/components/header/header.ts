import { Component } from '../component/component.js';

export class Header extends Component {
    constructor(private selector: string) {
        super();
        this.template = this.createTemplate();
        this.outRender(selector);
    }

    render() {
        return super.outRender(this.selector);
    }

    private createTemplate() {
        return `
                <header>
            <div class="title-box">
                <img
                    class="title"
                    src="../dist/assets/pokedex_title.webp"
                    alt="Pokedex title"
                />
            </div>
        </header>
        `;
    }
}

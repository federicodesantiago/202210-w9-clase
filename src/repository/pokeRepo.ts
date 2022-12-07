export class PokeRepo {
    url = 'https://pokeapi.co/api/v2/pokemon/';

    load() {
        return fetch(this.url).then((resp) => {
            if (!resp.ok)
                throw new Error(`Error ${resp.status}: ${resp.statusText}`);
            const result = resp.json();
            return result.then((resp) => {
                return [resp, resp.results];
            });
        });
    }
    search(id: string) {
        // : Promise<Note[]>
        return fetch(this.url + id).then((resp) => {
            if (!resp.ok)
                throw new Error(
                    `Error query ${resp.status}: ${resp.statusText}`
                );
            return resp.json();
        });
    }
}

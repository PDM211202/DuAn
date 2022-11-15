export class ListFilm {
    constructor() {
        this.list_film = [];
    }
    addFilm(film) {
        this.list_film.push(film);
    }
    renderListFilm() {
        let content = '';
        content = this.list_film.reduce((fcontent, film) => {
            fcontent += `
                <div class="card mt-5 col-3 text-white">
                    <img class="card-img-top" src="${film.img}" alt="">
                    <div class="card-body">
                        <h4 class="card-title">${film.name}</h4>
                    </div>
                    <button class="list-film-btn" onclick="">Đặt vé</button>
                </div>
            `;
            return fcontent;
        },'');
        return content;
    }
}
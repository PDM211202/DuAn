'use strict';

import {Film} from './film.js';
import {ListFilm} from './listFilm.js';

let data = [
    {id: 1, name: '001', img: '../img/film-1.jpg'},
    {id: 2, name: '002', img: '../img/film-1.jpg'}
];

const getEle = (id) => {
    return document.getElementById(id);
}

let listFilm = new ListFilm();

const show = () => {
    let divListFilm = getEle('list-film');

    data.map(item => {
        let createFilm = new Film(item.id, item.img, item.name);
        listFilm.addFilm(createFilm);
    });
    
    divListFilm.innerHTML = listFilm.renderListFilm();
}

show();

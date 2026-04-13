
import { Serie } from './serie.js';

import { series } from './data.js';


const seriesTbody: HTMLElement = document.getElementById('Series')!;
const mediaSeasonsElm: HTMLElement = document.getElementById("media-seasons")!;

const cardImage = document.getElementById('card-image') as HTMLImageElement;
const cardTitle = document.getElementById('card-title')!;
const cardSinopsis = document.getElementById('card-description')!;
const cardLink = document.getElementById('card-link') as HTMLAnchorElement;

renderCoursesInTable(series);

mediaSeasonsElm.innerHTML = `${getMediaSeasons(series)}`



function renderCoursesInTable(series: Serie[]): void {
  console.log('Desplegando cursos');
  series.forEach((serie) => {
    let trElement = document.createElement("tr");
    trElement.style.cursor = "pointer";
    trElement.addEventListener('click', () => showSerieDetail(serie));
    trElement.innerHTML = `<td>${serie.id}</td>
                           <td><span class="text-primary" style="text-decoration: underline;">${serie.name}</span></td>
                           <td>${serie.channel}</td>
                           <td>${serie.seasons}</td>`;
    seriesTbody.appendChild(trElement);
  });
}

function showSerieDetail(serie: Serie): void {
    cardImage.src = serie.image;
    cardImage.alt = serie.name;
    cardTitle.textContent = serie.name;
    cardSinopsis.textContent = serie.sinopsis;
    cardLink.href = serie.link;
}


function getMediaSeasons(series: Serie[]): number {
  let totalSeasons: number =0
  series.forEach((serie) => totalSeasons = (totalSeasons + serie.seasons));
  return totalSeasons/series.length;
}


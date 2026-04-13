import { Serie } from './serie.js';
import { series } from './data.js';
var seriesTbody = document.getElementById('Series');
var mediaSeasonsElm = document.getElementById("media-seasons");
var cardImage = document.getElementById('card-image');
var cardTitle = document.getElementById('card-title');
var cardSinopsis = document.getElementById('card-description');
var cardLink = document.getElementById('card-link');
renderCoursesInTable(series);
mediaSeasonsElm.innerHTML = "".concat(getMediaSeasons(series));
function renderCoursesInTable(series) {
    console.log('Desplegando cursos');
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.style.cursor = "pointer";
        trElement.addEventListener('click', function () { return showSerieDetail(serie); });
        trElement.innerHTML = "<td>".concat(serie.id, "</td>\n                           <td><span class=\"text-primary\" style=\"text-decoration: underline;\">").concat(serie.name, "</span></td>\n                           <td>").concat(serie.channel, "</td>\n                           <td>").concat(serie.seasons, "</td>");
        seriesTbody.appendChild(trElement);
    });
}
function showSerieDetail(serie) {
    cardImage.src = serie.image;
    cardImage.alt = serie.name;
    cardTitle.textContent = serie.name;
    cardSinopsis.textContent = serie.sinopsis;
    cardLink.href = serie.link;
}
function getMediaSeasons(series) {
    var totalSeasons = 0;
    series.forEach(function (serie) { return totalSeasons = (totalSeasons + serie.seasons); });
    return totalSeasons / series.length;
}
//# sourceMappingURL=main.js.map
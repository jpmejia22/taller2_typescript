import { Serie } from './serie.js';
import { series } from './data.js';
var seriesTbody = document.getElementById('Series');
//const btnfilterByName: HTMLElement = document.getElementById("button-filterByName")!;
//const inputSearchBox: HTMLInputElement = <HTMLInputElement> document.getElementById("search-box")!;
var mediaSeasonsElm = document.getElementById("media-seasons");
//btnfilterByName.onclick = () => applyFilterByName();
renderCoursesInTable(series);
mediaSeasonsElm.innerHTML = "".concat(getMediaSeasons(series));
function renderCoursesInTable(series) {
    console.log('Desplegando cursos');
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.id, "</td>\n                           <td>").concat(serie.name, "</td>\n                           <td>").concat(serie.channel, "</td>\n                           <td>").concat(serie.seasons, "</td>");
        seriesTbody.appendChild(trElement);
    });
}
//function applyFilterByName() { 
//let text = inputSearchBox.value;
//text = (text == null) ? '' : text;
//clearCoursesInTable();
//let coursesFiltered: Course[] = searchCourseByName(text, dataCourses);
//renderCoursesInTable(coursesFiltered);
//}
//function searchCourseByName(nameKey: string, courses: Course[]) {
//return nameKey === '' ? dataCourses : courses.filter( c => 
//c.name.match(nameKey));
//}
function getMediaSeasons(series) {
    var totalSeasons = 0;
    series.forEach(function (serie) { return totalSeasons = (totalSeasons + serie.seasons); });
    return totalSeasons / series.length;
}
//function clearCoursesInTable() {
//while (coursesTbody.hasChildNodes()) {
//if (coursesTbody.firstChild != null) {
//  coursesTbody.removeChild(coursesTbody.firstChild);
//}
//}
//}
//# sourceMappingURL=main.js.map
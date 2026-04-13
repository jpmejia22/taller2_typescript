
import { Serie } from './serie.js';

import { series } from './data.js';


const seriesTbody: HTMLElement = document.getElementById('Series')!;
//const btnfilterByName: HTMLElement = document.getElementById("button-filterByName")!;
//const inputSearchBox: HTMLInputElement = <HTMLInputElement> document.getElementById("search-box")!;
const mediaSeasonsElm: HTMLElement = document.getElementById("media-seasons")!;


//btnfilterByName.onclick = () => applyFilterByName();

renderCoursesInTable(series);

mediaSeasonsElm.innerHTML = `${getMediaSeasons(series)}`



function renderCoursesInTable(series: Serie[]): void {
  console.log('Desplegando cursos');
  series.forEach((serie) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${serie.id}</td>
                           <td>${serie.name}</td>
                           <td>${serie.channel}</td>
                           <td>${serie.seasons}</td>`;
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


function getMediaSeasons(series: Serie[]): number {
  let totalSeasons: number =0
  series.forEach((serie) => totalSeasons = (totalSeasons + serie.seasons));
  return totalSeasons/series.length;
}

//function clearCoursesInTable() {
  //while (coursesTbody.hasChildNodes()) {
    //if (coursesTbody.firstChild != null) {
    //  coursesTbody.removeChild(coursesTbody.firstChild);
     
    //}
  //}
//}
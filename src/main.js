// import {Bikes} from "./project.js"
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './styles.css';

function random(range){
  return Math.floor((Math.random()*range))+1
}

$(document).ready(function(){

  let h1;
  let h2;
  let p1;
  let p2;

  $("#start").click(function(){

    let stringHeader1 = "&paragraphs="+1+"&words="+random(6);
    let stringHeader2 = "&paragraphs="+1+"&words="+random(6);
    let stringParagraph1 = "&paragraphs=" + random(3) + "&words="+random(100);
    let stringParagraph2 = "&paragraphs=" + random(3) + "&words="+random(100);

    function getDinos(string){

    let promise1 = new Promise(function(resolve, reject){
      let request = new XMLHttpRequest();
      let url = `http://dinoipsum.herokuapp.com/api/?format=json${string}`
      // let urlH2 = `http://dinoipsum.herokuapp.com/api/?format=json${stringHeader2}`
      // let urlP1 = `http://dinoipsum.herokuapp.com/api/?format=json${stringParagraph1}`
      // let urlP2 = `http://dinoipsum.herokuapp.com/api/?format=json${stringParagraph2}`

      request.onload = function(){
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();

    });
    let dinoResponse;
    promise1.then(function(response){
      let dinoResponse = JSON.parse(response);
      console.log(dinoResponse);

    });
    return dinoResponse;
  }

  h1 = getDinos(stringHeader1);
  h2 = getDinos(stringHeader2);
  p1 = getDinos(stringParagraph1);
  p2 = getDinos(stringParagraph2);

  console.log(h1)

  })

});

// import {Bikes} from "./project.js"
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

function random(range){
  return Math.floor((Math.random()*range))+1
}

function imageRandomizer(){
  const imageNumber = random(8);
  const string = "<img src='images/"+imageNumber+".jpeg'>";
  return string;
}

$(document).ready(function(){


  $("#start").click(function(){
    $(".dinoProfile").show();

    let stringHeader1 = "&paragraphs="+1+"&words="+random(6);
    let stringHeader2 = "&paragraphs="+1+"&words="+random(6);
    let stringParagraph1 = "&paragraphs=" + random(3) + "&words="+random(100);
    let stringParagraph2 = "&paragraphs=" + random(3) + "&words="+random(100);

    function getDinos(string){
      let promise1 = new Promise(function(resolve, reject){
        let request = new XMLHttpRequest();
        let url = `http://dinoipsum.herokuapp.com/api/?format=json${string}`
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
      let output = "";
      promise1.then(function(response){
        let dinoResponse = JSON.parse(response);
        dinoResponse[0].forEach(function(dino){
          output = output + dino + " ";
        });
        $("#header1").text(output)
      });
    }

    function getDinos2(string){
      let promise1 = new Promise(function(resolve, reject){
        let request = new XMLHttpRequest();
        let url = `http://dinoipsum.herokuapp.com/api/?format=json${string}`
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
      let output = "";
      promise1.then(function(response){
        let dinoResponse = JSON.parse(response);
        dinoResponse[0].forEach(function(dino){
          output = output + dino + " ";
        });
        $("#header2").text(output)
      });
    }

    function getDinos3(string){
      let promise1 = new Promise(function(resolve, reject){
        let request = new XMLHttpRequest();
        let url = `http://dinoipsum.herokuapp.com/api/?format=json${string}`
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
      let output = "";
      promise1.then(function(response){
        let dinoResponse = JSON.parse(response);
        dinoResponse[0].forEach(function(dino){
          output = output + dino + " ";
        });
        $("#text1").text(output)
      });
    }

    function getDinos4(string){
      let promise1 = new Promise(function(resolve, reject){
        let request = new XMLHttpRequest();
        let url = `http://dinoipsum.herokuapp.com/api/?format=json${string}`
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
      let output = "";
      promise1.then(function(response){
        let dinoResponse = JSON.parse(response);
        dinoResponse[0].forEach(function(dino){
          output = output + dino + " ";
        });
        $("#text2").text(output);
        console.log(output)
      });
    }

    getDinos(stringHeader1);
    getDinos2(stringHeader2);
    getDinos3(stringParagraph1);
    getDinos4(stringParagraph2);

    let string1 = imageRandomizer();
    $("#picture1").text("")
    $("#picture1").append(string1)
    let string2 = imageRandomizer();
    $("#picture2").text("")
    $("#picture2").append(string2)

  })
});

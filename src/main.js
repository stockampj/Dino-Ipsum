// import {Bikes} from "./project.js"
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

function random(range){
  return Math.floor((Math.random()*range))+1
}

// function imageRandomizer(){
  //   const imageNumber = random(8);
  //   const string = "<img src='images/"+imageNumber+".jpeg'>";
  //   return string;
  // }



  $(document).ready(function(){


    $("#start").click(function(){
      $(".dinoProfile").show();

      let stringHeader1 = "&paragraphs="+1+"&words="+random(6);
      let stringHeader2 = "&paragraphs="+1+"&words="+random(6);
      let stringParagraph1 = "&paragraphs=" + random(3) + "&words="+random(100);
      let stringParagraph2 = "&paragraphs=" + random(3) + "&words="+random(100);

      function getDinos(string){
        // let output = "";
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


      //   async function firstAsync() {
      //     let promise = new Promise((res, rej) => {
      //       setTimeout(() => res("Now it's done!"), 1000)
      //     });
      //
      //     // wait until the promise returns us a value
      //     let result = await promise;
      //
      //     // "Now it's done!"
      //     alert(result);
      //   }
      // };
      // firstAsync();
      // 



      let output = promise1.then(function(response){
        let dinoResponse = JSON.parse(response);
        let temp= "";
        dinoResponse[0].forEach(function(dino){
          temp = temp + dino + " ";
        });
        console.log(temp);
        return temp;

      });
      console.log(output);
      return output;
    }



    let h1 = getDinos(stringHeader1);
    let h2 = getDinos(stringHeader2);
    let p1 = getDinos(stringParagraph1);
    let p2 =getDinos(stringParagraph2);

    console.log(h1.PromiseValue)

    // let string1 = imageRandomizer();
    // $("#picture1").text("")
    // $("#picture1").append(string1)
    // let string2 = imageRandomizer();
    // $("#picture2").text("")
    // $("#picture2").append(string2)

  })
});

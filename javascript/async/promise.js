function myDisplayer(value){
    document.getElementById("demo").innerHTML = value;
}


// CallBack
// function getFile(myCallback) {
//     let req = new XMLHttpRequest();
//     req.open('GET', "https://raw.githubusercontent.com/magrogovich/website/main/main.html");
//     req.onload = function() {
//       if (req.status == 200) {
//         myCallback(req.responseText);
//       } else {
//         myCallback("Error: " + req.status);
//       }
//     }
//     req.send();
//   }
  
//   getFile(myDisplayer);


// // Promise
// mypromise = new Promise(function(resolve,reject){
//     let req = new XMLHttpRequest()
//     req.open('GET','https://raw.githubusercontent.com/magrogovich/website/main/index.html')
//     req.onload = function(){
//         if(req.status == 200){
//             resolve(req.response)
//         }else{
//             reject("file not found")
//         }
//     }
//     req.send()
// })

// mypromise.then(
//     (value) => {myDisplayer(value)},
//     (error) => {myDisplayer(error)}
// )



async function getFile() {
    let myPromise = new Promise(function(resolve,reject) {
      let req = new XMLHttpRequest();
      req.open('GET', "https://raw.githubusercontent.com/magrogovich/website/main/main.html");
      req.onload = function() {
        if (req.status == 200) {
          resolve(req.response);
        } else {
          reject("File not Found");
        }
      };
      req.send();
    });
    document.getElementById("demo").innerHTML = await myPromise;
  }
  
  getFile();



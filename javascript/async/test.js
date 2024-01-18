// callback

// function fetchData(url, callback){
//     fetch(url)
//         .then(response => response.json())
//         .then(data => callback(data))
//         .catch(error => console.error("Error fetching data: " + error))
    
// }


// function printing(value){
//     console.log(value)
// }

// fetchData('http://www.boredapi.com/api/activity/',printing)


url = 'http://www.boredapi.com/api/activity/'
// fetchData = new Promise(function(resolve,reject){
//     fetch(url)
//         .then(response => response.json())
//         .then(data => resolve(data))
//         .catch(error => reject(error))
// })

// fetchData.then(
//     (value) => console.log(value),
//     (error) => console.log("this is the error: "+error)
// )



// await/async

async function fetchData(url){
    try{
        response = await fetch(url)
        data = await response.json()
        dataText = JSON.stringify(data)


        document.getElementById('demo').innerHTML = dataText
        console.log(data)
    }
    catch(error){
        console.error("this is an error "+error)
    }
}


fetchData(url)




// function fetchDataPromise(url) {
//     return new Promise((resolve, reject) => {
//         fetch(url)
//             .then(response => response.json())
//             .then(data => resolve(data))
//             .catch(error => reject("Error fetching data: " + error));
//     });
// }

//     // Usage
// fetchDataPromise("http://www.boredapi.com/api/activity/")
//     .then(data => {
//         // Process the data
//         console.log("Processed data: " + data);

//     })
//     .catch(error => console.error(error));














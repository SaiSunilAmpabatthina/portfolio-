// var num = 4.9
// var x=Math.floor(num)
// console.log(x);

// var num = 4.1
// var y=Math.cell(num)
// console.log(y);

// console.log(Math.pow(4,4));

// console.log(Math.sqrt(100));

// setInterval(() =>{
//     console.log(Math.random());
// },1000)




// function getotp(){
//     var num = Math.floor(Math.random()*10000)
//     console.log(num)
// }
// setInterval(getotp,1000)


function generate(){
    let arr = [0,,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"]
    let randomColor = "#"
    for (var i =1;i<=6;i++){
        let index =Math.floor(Math.random()*16)
        randomColor = randomColor + arr[index]
    }
    console.log(randomColor)
    document.querySelector("body").style.backgroundColor = randomColor
}
setInterval(generate,200)
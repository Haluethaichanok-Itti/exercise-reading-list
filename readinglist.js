// const gJavascript = document.querySelector('#reading-list li:nth-child(2) .name');
// console.log(gJavascript);
// gJavascript.innerHTML = 'Advanced JAVASCRIPT!!!';





// 


// const readingList = document.querySelectorAll('#reading-list li .name');
// readingList.forEach(function(list){
//     list.textContent += 'book title: ' ;
// }
// )



const readingList = document.querySelectorAll('#reading-list li .name');
readingList.forEach(function(list){
    list.textContent = 'book title: ' + list.textContent;
})
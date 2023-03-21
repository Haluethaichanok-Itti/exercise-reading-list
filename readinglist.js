//better way for element.addEventListener()
const list = document.querySelector('#reading-list ul');
list.addEventListener('click', function(e){
    if (e.target.className == 'delete'){
        const li = e.target.parentNode;
        list.removeChild(li);
     }
})

// //Interacting with Form -- add readinglist
const addForm = document.forms['add-list'];
addForm.addEventListener('submit',function(e){
    e.preventDefault(); // prevent from refresh
    const value = addForm.querySelector('input[type="text"]').value; //add new reading list in the text box
   // console.log(value);

// //create element
 const li = document.createElement('li');
 list.appendChild(li);
  
 
 const newName = document.createElement('span');
 // //add content
 newName.textContent =value;
 li.appendChild(newName);

  const deleteBut = document.createElement('span');

  // //add content
  deleteBut.textContent = 'delete';
  li.appendChild(deleteBut);


  // //add classes
newName.classList.add('name');
deleteBut.classList.add('delete');

// //append to DOM

document.getElementsByTagName("ul").appendChild(li);
document.getElementsByTagName("li").appendChild(newName);
document.getElementsByTagName("li").appendChild(deleteBut);


// li.appendChild(newName);
// li.appendChild(deleteBut);
// list.appendChild(li);

});

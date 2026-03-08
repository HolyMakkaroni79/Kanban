let items = document.getElementsByClassName('item'); //all items (some kind of list)
let leftBox = document.querySelector('.left');   //one element (no list)
let rightBox = document.querySelector('.right'); //.for class name bc you can serach for more than only for classes (.name is a class)

for(items of items){ //for each element of the (list) "items"
    items.addEventListener("dragstart", (e) => //attaching event listener to the object
    {selected = e.target}); //e is the event object
}; //for each wants a tiny simicolon :)

rightBox.addEventListener("dragover", (e) =>{ //dragover fires while element is dragged
    e.preventDefault(); //tells the browser he have to chill even if an item gets dragged away
}); //events for normal too

rightBox.addEventListener('drop', (e) => { //define eventnames as string (there is no difference between 'drop' and "drop")
    if(selected){
        rightBox.appendChild(selected);
        selected = null;
    } //well js say´s that a for each is a statement and need a semicolon but a if(statement) don´t need one, bc its a "control structure"
});

leftBox.addEventListener("dragover", (e) =>{
    e.preventDefault();
}) //but if there have none simicolon, js will add one where it expect one to be

leftBox.addEventListener('drop', (e) => {
    if(selected){
        leftBox.appendChild(selected);
        selected = null;
    }
}); //but I will be consistent with the semicolon 

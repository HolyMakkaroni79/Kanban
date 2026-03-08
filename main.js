let items = document.getElementsByClassName('item'); //all items (some kind of list)
let Box1 = document.querySelector('.section1');   //one element (no list)
let Box2 = document.querySelector('.section2');   //.for class name bc you can serach for more than only for classes (.name is a class)
let Box3 = document.querySelector('.section3');
let Box4 = document.querySelector('.section4');
let Box5 = document.querySelector('.section5');

for(items of items){ //for each element of the (list) "items"
    items.addEventListener("dragstart", (e) => //attaching event listener to the object
    {selected = e.target}); //e is the event object
}; //for each wants a tiny simicolon :)

Box1.addEventListener("dragover", (e) =>{ //dragover fires while element is dragged
    e.preventDefault(); //tells the browser he have to chill even if an item gets dragged away
}); //events for normal too

Box1.addEventListener('drop', (e) => { //define eventnames as string (there is no difference between 'drop' and "drop")
    if(selected){
        Box1.appendChild(selected);
        selected = null;
    } //well js say´s that a for each is a statement and need a semicolon but a if(statement) don´t need one, bc its a "control structure"
});

Box2.addEventListener("dragover", (e) =>{
    e.preventDefault();
}) //but if there have none simicolon, js will add one where it expect one to be

Box2.addEventListener('drop', (e) => {
    if(selected){
        Box2.appendChild(selected);
        selected = null;
    }
}); //but I will be consistent with the semicolon 

Box3.addEventListener("dragover", (e) =>{
    e.preventDefault();
});

Box3.addEventListener('drop', (e) => {
    if(selected){
        Box3.appendChild(selected);
        selected = null;
    }
});

Box4.addEventListener("dragover", (e) =>{
    e.preventDefault();
});

Box4.addEventListener('drop', (e) => {
    if(selected){
        Box4.appendChild(selected);
        selected = null;
    }
});

Box5.addEventListener("dragover", (e) =>{
    e.preventDefault();
});

Box5.addEventListener('drop', (e) => {
    if(selected){
        Box5.appendChild(selected);
        selected = null;
    }
});

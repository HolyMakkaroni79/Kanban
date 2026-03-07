let items = document.getElementsByClassName('item');
let leftBox = document.querySelector('.left');
let rightBox = document.querySelector('.right');

for(items of items){
    items.addEventListener("dragstart", (e) =>
    {selected = e.targed});
}

rightBox.addEventListener("dragover", (e) =>{
    e.preventDefault();
})

rightBox.addEventListener('drop', (e) => {
    if(selected){
        rightBox.appendChild(selected);
        selected = null;
    }
});

leftBox.addEventListener("dragover", (e) =>{
    e.preventDefault();
})

leftBox.addEventListener('drop', (e) => {
    if(selected){
        leftBox.appendChild(selected);
        selected = null;
    }
});

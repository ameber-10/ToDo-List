(() => {
  const textbox = document.getElementById('input');
  const outputButton = document.getElementById('output');
  const ulElement = document.getElementById('ul-list');

  outputButton.addEventListener('click',(event) => {
    const list =document.createElement('li');
    const remove =document.createElement('input');
    remove.setAttribute('type','submit');
    remove.setAttribute('value','削除');
    remove.setAttribute('id','removeButton');

    remove.addEventListener('click',(event) =>{
      list.parentNode.removeChild(list);
    });

    list.innerHTML = textbox.value;
    list.appendChild(remove);

    ulElement.appendChild(list);

    textbox.value='';
  });

})();

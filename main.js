//1
//створити 2і кнопки:
    //- 1а з класом "button-create" / з текстом create-flexbox
    //- 2а з класом "button-delete" / з текстом delete-flexbox
//створити div з класом flex-box
//створити div з класом flex-block

let root = document.querySelector('.root');

let properties = ['display:flex',
    'justify-content:space-between',
    'justify-content:center',
    'justify-content:space-around',
    'justify-content:space-evenly',
    'justify-content:flex-start',
    'justify-content:flex-end',
    'flex-wrap:nowrap',
    'flex-wrap:wrap',
    'flex-wrap:wrap-reverse',
    'align-items:center',
    'align-items:flex-start',
    'align-items:flex-end',
    'align-content:center',
    'align-content:flex-start',
    'align-content:flex-end',
    'align-content:space-between',
    'flex-direction:column',
    'flex-direction:column-reverse',
    'flex-direction:row',
    'flex-direction:row-reverse']


let createBtn = document.createElement('button');
createBtn.className = 'button-create';
createBtn.textContent = 'create-flexbox';

let deleteBtn = document.createElement('button');
deleteBtn.className = 'button-delete';
deleteBtn.textContent = 'delete-flexbox';

let flexBox = document.createElement('div');
flexBox.className = 'flex-box';

let flexBlock = document.createElement('div');
flexBlock.className = 'flex-block';

root.append(createBtn,deleteBtn,flexBox,flexBlock);

//2
//при натисканні на кнопку button-create
//створити всередині блоку з класом flex-box кнопки для наших команд З класом flex і дати в тексті їм їх команду
//створити всередині блок з класом flex-block - 3 div з класом box і з модифікаторами box1, box2, box3

createBtn.addEventListener('click', ()=> {
    //4
    // якщо у нас вже є наші кнопки і 3 box, то при наисканні на btn-create додати 3 div з класом box у наш flex-block | flex-box не чіпаємо

    if(flexBox.children.length === 0){
        properties.forEach((item)=>{
            let flex = document.createElement('button');
            flex.className = 'flex';
            flex.style.margin = 10+'px';
            flex.textContent = item;
            flex.style.backgroundColor = 'grey';
            flexBox.append(flex);

        //6
        // при натисканні на кнопку з класом flex додати цій кнопці текст :active
        // при повторному натисканні видаляємо текст :active
            flex.addEventListener('click',()=>{
                if(!flex.textContent.includes('active')){
                    flexBlock.classList.add(flex.textContent+';');
                    document.querySelectorAll('.flex').forEach((btn)=>{
                        if(btn.textContent.includes(flex.textContent.split(':')[0])&& btn.textContent.includes('active')){
                            btn.style.backgroundColor = 'grey';
                            btn.textContent = btn.textContent.slice(0,btn.textContent.length-7)
                            flexBlock.classList.remove(btn.textContent + ';')
                        }
                    });
                    flex.textContent += ':active'
                    flex.style.backgroundColor = 'blue';

                }else{
                    flex.textContent = flex.textContent.slice(0,flex.textContent.length-7)
                    flex.style.backgroundColor = 'grey';
                    flexBlock.classList.remove(flex.textContent + ';');
                }
                flexBlock.style.cssText = flexBlock.className.slice(11);
            }) 
        })
  
    }

    for(let i = 1; i<4; i++){
        let box = document.createElement('div');
        box.className = `box box${i}`;
        flexBlock.append(box)
    }
})

//3
// при натисканні на кнопку button-delete
// видалити всі дані з flex-box і всі дані з flex-block

deleteBtn.addEventListener('click', ()=> {
     //5
    // якщо у нас div елементів з класом box більше 3, то при натисканні на кнопку button-delete, видаляємо тільки 3 останніх box
    if(flexBlock.children.length > 3){
        Array.from(flexBlock.children).forEach((item,idx,array)=>{
            if(idx > array.length-4){
                item.remove();
            }
        })
    }else{
        Array.from(flexBox.children).forEach((item)=>{
            item.remove();
        })
        Array.from(flexBlock.children).forEach((item)=>{
            item.remove();
        })
    }

})

//7
// при натисканні на одну кнопку із класом flex - то для блока з класом flex-block виконати команду натиснутої кнопки

//8
// justify-content align-item: center















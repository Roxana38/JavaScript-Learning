//.46 The Query Selector

//const para = document.querySelector('p');
//const para = document.querySelector('.error');
//const para = document.querySelector('div.error');
//const para = document.querySelector('body > div:nth-child(12) > p:nth-child(2)')

//console.log(para);

//const paras =document.querySelectorAll('p');

/*paras.forEach(para =>{
    console.log(para);
});*/

//const errors= document.querySelectorAll('.error');

//console.log(paras[2])
//console.log(errors);

//.47 Other ways to query the DOM

//

//const title = document.getElementById('page-title');
//console.log(title);

// get elements by their class name

//const errors = document.getElementsByClassName('errors');
//console.log(errors);
//console.log(errors[0]);

// get elements by their tag name

/*const paras = document.getElementsByTagName('p');
console.log(paras);
console.log(paras[1]);
*/

//48. Adding & Changing Page content

//const para = document.querySelector('p');

//console.log(para.innerText);
//para.innerText ='ninja are awesome!';
//para.innerText += 'ninja are awesome!';
//const paras = document.querySelectorAll('p');

/*paras.forEach(para =>{
    console.log(para.innerText);
    para.innerText += '  new text';
})*/

/*const content =document.querySelector('.content');
//console.log(content.innerHTML)
//content.innerHTML +='<h2> this is a new H2</h2>'

const people =['mario','luigi','yoshi'];

people.forEach(person =>{
    content.innerHTML += `<p>${person}</p>`;
});*/

//49. Getting & Setting Attributes

/*const link = document.querySelector('a');

console.log(link.getAttribute('href'))

link.setAttribute('href','https://www.thenetninja.co.uk');
link.innerText = 'TheNet Ninja Website';

const mssg = document.querySelector('body > p');

console.log(mssg.getAttribute('class'));
mssg.setAttribute('class','success');
mssg.setAttribute('style','color:green');*/

//50. Changing Css Style

/*const title = document.querySelector('h1');

//title.setAttribute('style','margin :50 px;');


console.log(title.style);
console.log(title.style.color);

title.style.margin = '50px';
title.style.color = 'crimson';
title.style.fontSize = '60px';
title.style.margin ='';
*/

//51.Adding & removing classes

/*const content = document.querySelector('body > p.error1');
console.log(content.classList);

content.classList.add('error1');
content.classList.remove('error1');
content.classList.add('succes1');*/

/*const paras = document.querySelectorAll('p');

paras.forEach(p => {
//console.log(p.textContent);
  //console.log(p.innerText);

  if(p.textContent.includes('error')){
    p.classList.add('error')
  }
  if(p.innerText.includes('succes')){
    p.classList.add('success');
  }
});

const title = document.querySelector('.title');

title.classList.toggle('test');
title.classList.toggle('test');
*/

//52. Parent,Children & Sibling

//const article =document.querySelector('article');

//console.log(article.children);
//onsole.log(Array.from(article.children));
/*Array.from(article.children).forEach(child=>
{
child.classList.add('article-elemnt')
});*/

/*const title = document.querySelector('body > article > h1');
//console.log(title.parentElement);
//console.log(title.parentElement.parentElement);
console.log(title.nextElementSibling);
console.log(title.previousElementSibling);
// chaining
console.log(title.nextElementSibling.parentElement.children)
*/

//53.Event Basics(click events)

/*const button =document.querySelector('button');

button.addEventListener('click', () => {
  console.log('you click me');
})*/

/*const items = document.querySelectorAll('li');
 
items.forEach(item =>{
  item.addEventListener('click', e=> {
    //console.log('item clicked');
    //console.log(e);
    //console.log(e.target);
   // console.log(item)
   e.target.style.textDecoration= 'line-through'
  })
})*/

//54. Creating & Removing Elements

/*const ul = document.querySelector('ul');
//ul.remove();

const button = document.querySelector('button');

button.addEventListener('click', () => {
  //ul.innerHTML += '<li>something new</li>';
const li =document.createElement('li');
li.textContent ='something new to do';
ul.append(li)
//ul.prepend(li);
});

const items = document.querySelectorAll('li');

items.forEach(item => {
  item.addEventListener('click', (e) => {
    e.target.remove();
  });
});*/

//.55. Event Bubblig (and delegation)
/*const ul = document.querySelector('ul');
const button = document.querySelector('button');

button.addEventListener('click', () => {
  //ul.innerHTML += '<li>something new</li>';
const li =document.createElement('li');
li.textContent ='something new to do';
ul.append(li)
//ul.prepend(li);
});

/*const items = document.querySelectorAll('li');

items.forEach(item => {
  item.addEventListener('click', (e) => {
    console.log('event in LI');
    e.stopPropagation();
    e.target.remove();
  });
});*/

/*ul.addEventListener('click', e=>{
  //console.log('event in UL');
  console.log(e);
  if(e.target.tagName ==='LI'){
    e.target.remove();
  }
})
*/

// 56.More DOM Events

/*const copy = document.querySelector('.copy-me');

copy.addEventListener('copy', ()=>{
  console.log('OI! my content is copyright')
});

const box = document.querySelector('.box');

box.addEventListener('mousemove',e =>{
  //onsole.log(e);
  //console.log(e.offsetX,e.offsetY);
  box.textContent =`x pos -${e.offsetX} y pos- ${e.offsetY}`;
});

document.addEventListener('wheel', e => {
  console.log(e.pageX,e.pageY);
})*/


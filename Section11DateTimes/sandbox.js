//82.Date & Times in JavaScript

/*const now = new Date();

console.log(now);
console.log(typeof now);

// year, months , day , times
console.log('getFullYear:',now.getFullYear());
console.log('getMonth:',now.getMonth());
console.log('getDate:',now.getDate());
console.log('getDay:',now.getDay());
console.log('getHours:',now.getHours());
console.log('getMinutes:', now.getMinutes());
console.log('getSeconds:', now.getSeconds());

//timestamps

console.log('timestamp:', now.getTime());

// date strings
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleString());*/

//83. Timestamps & Comparations
/*
//const before = new Date('02/01/2019 7:30:59');
const before = new Date('February 1 2019 7:30:59');
const now = new Date();

//console.log(now.getTime(),before.getTime());

const diff = now.getTime() - before.getTime();
console.log(diff);

const mins = Math.round(diff / 1000 / 60);
//console.log(mins);

const hours = Math.round(mins / 60);
//console.log(hours);

const days = Math.round(hours / 24);
console.log(mins,hours,days);

console.log(`the before date was ${mins} mins ago`);
console.log(`the before date was ${hours} hours ago`);
console.log(`the before date was ${days} days ago`);


// converting timestamps to dates
const timestamp = 1675938474990;
console.log(new Date(timestamp))*/

//.84 Builing a digital Clock

/*const clock = document.querySelector('.clock');

const tick = () => {
    const now = new Date();
    
    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();

    const html=`
    <span>${h}</span> :
    <span>${m}</span> :
    <span>${s}</span>
    `;
    clock.innerHTML = html;
};

setInterval(tick, 1000);*/

//85.Date-fns Librrary

const now = new Date();

console.log(dateFns.isToday(now));

// formatting options
console.log(dateFns.format(now, 'YYYY'));
console.log(dateFns.format(now, 'MMMM'));
console.log(dateFns.format(now, 'dddd'));
console.log(dateFns.format(now, 'Do'));
console.log(dateFns.format(now, 'dddd, Do MMMM, YYYY'));

// comparing dates
const before = new Date('February 1 2019 12:00:00');

console.log(dateFns.distanceInWords(now, before, {addSuffix: true}));
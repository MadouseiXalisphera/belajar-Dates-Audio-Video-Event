// const now = new Date();
// const specificDate = new Date("July 4, 1776 12:00:00");
// const date = now.getDate();
// const month = now.getMonth()+1;
// const year = now.getFullYear();
// const timestamp = Date.now()/86400000;
// const start = Date.now();
// // ... run some code ...
// const end = Date.now();
// console.log(timestamp);

const date = new Date();
console.log(date.toISOString());
const options = {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric'
};
const tanggal = new Date();

// 1. Cara default (Output: ISO/UTC - yang Z tadi)
console.log(tanggal); 

// 2. Cara biar kayak Browser (Output: Local String)
console.log(tanggal.toString()); 

// 3. Cara lebih rapi buat orang Indo
console.log(tanggal.toLocaleString('id-ID'));

console.log(tanggal.toLocaleTimeString());
console.log(new Date(2003, 6, 27).getMonth());
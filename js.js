let today = new Date();

let year = today.getFullYear();
let month = today.getMonth();
let day = today.getDate();

let maasGunu;

if (day < 15) {
    maasGunu = new Date(year, month, 15);
} else {
    maasGunu = new Date(year, month + 1, 15);
}

let hefteSonu = maasGunu.getDay();

if (hefteSonu === 6) {
    maasGunu.setDate(maasGunu.getDate() - 1);
} else if (hefteSonu === 0) {
    maasGunu.setDate(maasGunu.getDate() - 2);
}

let yekunDay = String(maasGunu.getDate()).padStart(2, "0");
let yekunMonth = String(maasGunu.getMonth() + 1).padStart(2, "0");
let yekunYear = maasGunu.getFullYear();

console.log(`${yekunDay}.${yekunMonth}.${yekunYear}`);
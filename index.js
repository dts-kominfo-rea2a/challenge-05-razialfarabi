const names = ["Halo", "Angel", "Nyoman", "Ketut", "Aisyah"];

// TODO: Fungsi utama
// Menerima 2 parameter: list nama dan callback sort
// Mengembalikan array of string dengan format:
// "1. Nama"
// "2. Nama"
// ...
const sorter = (param1, param2) => {
  const dataNama = [];
  if (param1 === null || param2 === undefined) {
    for (counter = 0; counter < names.length; counter++) {
      dataNama.push(counter + 1 + '. ' + names.sort()[counter]);
    }
  } else {
    for (counter = 0; counter < param1.length; counter++) {
      // dataNama.push(param2(param1)[counter]);
      dataNama.push(counter + 1 + '. ' + param2(param1)[counter]);
    }
  }
  return dataNama;
};

// TODO: Fungsi untuk mengurutkan array of string secara ascending
// mengembalikan array yang sudah diurutkan
const sortAscending = (param1) => {
  return param1.sort();
};

// TODO: Fungsi untuk mengurutkan array of string secara descending
// mengembalikan array yang sudah diurutkan
const sortDescending = (param1) => {
  return param1.sort().reverse();
};

// ! JANGAN DIMODIFIKASI
(function main() {
  // console.log(sorter?.());
  console.log(sorter?.(names, sortAscending)?.join('\n'));
  console.log(sorter?.(names, sortDescending)?.join('\n'));
})();

module.exports = {
  sorter,
  sortAscending,
  sortDescending,
  names,
};
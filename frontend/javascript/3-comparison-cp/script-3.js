// Menggunakan switch case, petakan nilai ujian di bawah ini ke dalam Nilai A B C D E
// A = 91-100
// B = 71-90
// C = 61-70
// D = 51-60
// E = <= 50

// Masukan suatu angka
const score = parseInt(prompt("Masukan nilai: "));

// TODO: answer here
switch(true){
    case score >= 91 && grade <= 100;
        console.log('A');
    break;
    case score >= 71 && grade <= 90;
        console.log('B');
    break;
    case score >= 61 && grade <=70;
        console.log('C');
    break;
    case score >= 51 && grade <= 60;
        console.log('D');
    break;
    case score <= 50;
        console.log('E');
    break;
    
    default:
        console.log('nilai tidak valid');
}
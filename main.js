
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout});

let score = 0;
let correctAns = 0;
let wrongAns = 0;
let point_per_soal = 1;


let q1=
`siapa dosen DDP pagi 2?
A.Pak budasuyasa
B.Pak helmy
C.Pak Made Artana
D.Papa Zola
jawaban  = `;

let q2=
`Dimana alamat saya ?
A.Bumi
B.Mars
C.Pluto
D.Cekomaria
jawaban = `;

let q3=
`Berapakah 1+1=....?
A. Jendela,
B. 11
C. 2
D. Segitiga
jawaban = `;

let q4=
`Yang merupakan member JKT 48?
A. Jokowi
B. Freya
C. Nadin Amizah
D. Igun Mama Takut
jawaban = `;

let q5=
`Nama kakak Upin dan Ipin adalah...

A. Kak Rose
B. Kak Jeane
C. Monkey D. Luffy
D. Igun Mama Takut
jawaban = `;

rl.question('Masukkan nama Anda: ', (input) => {
    rl.question(q1, (ans1) => {
      if (ans1 == 'A') {
        score++
        correctAns++
      } else {
        wrongAns++
      }

        rl.question(q2, (ans1) => {
          if (ans1 == 'D') {
            score++
            correctAns++
          } else {
            wrongAns++
          }

            rl.question(q3, (ans1) => {
              if (ans1 == 'C') {
                score++
                correctAns++
              } else {
                wrongAns++
              }

            rl.question(q4, (ans1) => {
                if (ans1 == 'B') {
                  score++
                  correctAns++
                } else {
                  wrongAns++
                }
      
            rl.question(q5, (ans1) => {
                    if (ans1 == 'A') {
                      score++
                      correctAns++
                    } else {
                      wrongAns++
                    }

console.log('Kuis Selesai');
console.log('-----');
console.log('Statistik Kuis');
console.log(`Nama: ${input}`);
console.log(`Nilai: ${score}`);
console.log(`Jawaban Benar: ${correctAns}`);
console.log(`Jawaban Salah: ${wrongAns}`);
rl.close();

})})})})})})

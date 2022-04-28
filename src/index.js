import _, { delay } from "lodash";

// function generateCardboard(name) {
//   for (let i = 0; i < 15; i++) {
//     const number = i + 1;
//     const div = document.createElement("div");
//     div.classList.add("number");
//     div.textContent = number;
//     name.appendChild(div);
//   }
// }

// function playerNumbers() {
//   const player = document.querySelectorAll(".number");
//   const drum_player = _.shuffle(_.range(1, 91));
//   // player.forEach((element, index) => {
//   //   element.textContent = drum_player[index];
//   // });
//   for (let i = 0; i < 15; i++) {
//     player[i].textContent = drum_player[i];
//   }
// }

// function cpuNumbers() {
//   const cpu = document.querySelectorAll(".number");
//   const drum_cpu = _.shuffle(_.range(1, 91));
//   // player.forEach((element, index) => {
//   //   element.textContent = drum_cpu[index];
//   // });
//   for (let i = 15; i < cpu.length; i++) {
//     cpu[i].textContent = drum_cpu[i];
//   }
// }

// function drumNumber(drumDrum) {
//   screen.textContent = drumDrum[0];
//   checkNumbers();
// }

// function checkNumbers() {
//   const all = document.querySelectorAll(".number");
//   for (let i = 0; i < all.length; i++) {
//     if (all[i].textContent == screen.textContent) {
//       all[i].classList.add("number-check");
//       break;
//     }
//   }
// }

// const player = document.querySelector(".cardboard-player");
// const cpu = document.querySelector(".cardboard-cpu");
// const screen = document.querySelector(".screen");
// const btn = document.querySelector(".btn");
// const drumDrum = _.shuffle(_.range(1, 91));

// btn.addEventListener("click", () => {
//   console.log("click");
//   drumNumber(drumDrum);
//   drumDrum.shift();
// });

// generateCardboard(cpu);
// generateCardboard(player);
// playerNumbers();
// cpuNumbers();

function createStructure() {
  for (let i = 0; i < 15; i++) {
    const playerDiv = document.createElement("div");
    const cpuDiv = document.createElement("div");
    playerDiv.classList.add("number-player");
    playerDiv.classList.add("number");
    cpuDiv.classList.add("number-cpu");
    cpuDiv.classList.add("number");
    cardboardPlayer.appendChild(playerDiv);
    cardboardCpu.appendChild(cpuDiv);
  }
}

function insertNumbers() {
  const playerArray = document.querySelectorAll(".number-player");
  const cpuArray = document.querySelectorAll(".number-cpu");
  const arrayRandom1 = _.shuffle(_.range(1, 91));
  const arrayRandom2 = _.shuffle(_.range(1, 91));
  for (let i = 0; i < playerArray.length; i++) {
    playerArray[i].textContent = arrayRandom1[i];
    cpuArray[i].textContent = arrayRandom2[i];
  }
}

function checkCardboards(number) {
  const playerArray = document.querySelectorAll(".number-player");
  const cpuArray = document.querySelectorAll(".number-cpu");
  let count1 = 0;
  let count2 = 0;

  for (let i = 0; i < playerArray.length || i < cpuArray.length; i++) {
    if (playerArray[i].textContent == number) {
      playerArray[i].classList.add("number-check");
    }

    if (cpuArray[i].textContent == number) {
      cpuArray[i].classList.add("number-check");
    }
  }

  for (let i = 0; i < playerArray.length || i < cpuArray.length; i++) {
    if (playerArray[i].classList[2] != undefined && playerArray[i].classList[2] == "number-check") {
      count1++;
    }

    if (cpuArray[i].classList[2] != undefined && cpuArray[i].classList[2] == "number-check") {
      count2++;
    }
  }

  if (count1 === 15 && count2 != 15) {
    alert("Player is the Winner");
  } else if (count2 === 15) {
    alert("CPU is the winner");
  } else if (count1 === 15 && count2 === 15) {
    alert("DRAW!!!");
  }
}

// function test() {
//   const playerArray = document.querySelectorAll(".number-player");
//   console.log(playerArray[0].classList);
// }

function pushButton() {
  music.play();
  const screen = document.querySelector(".screen");
  if (drumNumbers[0] != null) {
    screen.textContent = drumNumbers[0];
    checkCardboards(drumNumbers[0]);
    drumNumbers.shift(); // Delete de first element in the array.
  }
}

const cardboardPlayer = document.querySelector(".cardboard-player");
const cardboardCpu = document.querySelector(".cardboard-cpu");
const drumNumbers = _.shuffle(_.range(1, 91));
const btn = document.querySelector(".btn");
btn.addEventListener("click", pushButton);
const music = document.createElement("audio");
music.src = "./assets/X2Download.com_-_BINGO_Sound_Effect_128_kbps.mp3";
music.volume = 0.5;
music.playbackRate = 2;

createStructure();
insertNumbers();
// test();

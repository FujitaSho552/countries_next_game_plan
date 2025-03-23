'use strict'
// 1行目に記載している 'use strict' は削除しないでください

/////average 打率
/**
 * @param {string} name - 結果を表示したい人の名前
 * @param {number} num - 表示したい試合数
 * @returns {number} 打率を計算する
 */
function avg(name, num) {
  let average = 0;
  let sumHit = 0;
  let sumAtBat = 0;

  for (let i = 0; i <= num - 1; i++) {
    for (const personalData of record[i]) {   
      if (personalData[name]) {
        sumHit = sumHit + personalData[name]["single"] + personalData[name]["double"] + personalData[name]["triple"] + personalData[name]["HR"];
        sumAtBat = sumAtBat + personalData[name]["atBat"];
      }
    }
  }
  average = sumHit / sumAtBat;
  return `${average.toFixed(3)} (${sumAtBat} - ${sumHit})`;
}

// test(avg("Fujita", 2), 0.143);
// test(avg("Fujita", 1), 0.250);
// console.log(avg("BBB"));

/////On Base Percentage 出塁率
/**
 * @param {string} name - 結果を表示したい人の名前
 * @param {number} num - 計算したい試合数
 * @returns {number} 出塁率を計算する
 */
function obp(name, num) {
  let onBasePercent = 0;
  let onBase = 0;
  let denominator = 0;

  for (let i = 0; i <= num -1; i++) {
    for (const personalData of record[i]) {
      if (personalData[name]) {
        onBase = onBase + personalData[name]["single"] + personalData[name]["double"] + personalData[name]["triple"] + personalData[name]["HR"] + personalData[name]["BB"];
        denominator = denominator + personalData[name]["atBat"] + personalData[name]["BB"] + personalData[name]["sucrificefly"];
      }
    }
  }
  onBasePercent = onBase / denominator;
  return onBasePercent.toFixed(3);
}

/////Slugging Percentage 長打率
/**
 * @param {string} name - 結果を表示したい人の名前
 * @param {number} num - 計算したい試合数
 * @returns {number} 長打率を計算する
 */
function slg(name, num) {
  let slugging = 0;
  let numberOfBase = 0;
  let sumAtBat = 0;

  for (let i = 0; i <= num - 1; i++) {
    for (const personalData of record[i]) {
      if (personalData[name]) {
        numberOfBase = numberOfBase + personalData[name]["single"] + (personalData[name]["double"] * 2) + (personalData[name]["triple"] * 3) + (personalData[name]["HR"] * 4);
        sumAtBat = sumAtBat + personalData[name]["atBat"];
      }
    }
  }
  slugging = numberOfBase / sumAtBat;
  return slugging.toFixed(3);
}

/////Home Run
/**
 * @param {string} name - 結果を表示したい人の名前
 * @param {number} num - 計算したい試合数
 * @returns {number} ホームラン数を合計する
 */
function hr(name, num) {
  let numberOfHr = 0;

  for (let i = 0; i <= num - 1; i++) {
    for (const personalData of record[i]) {
      if (personalData[name]) {
        numberOfHr = numberOfHr + personalData[name]["HR"];
      }
    }
  }
  return numberOfHr;
}

/////Stolen Base 盗塁
/**
 * @param {string} name - 結果を表示したい人の名前
 * @param {number} num - 計算したい試合数
 * @returns {number} 盗塁数を合計する
 */
function sb(name, num) {
  let numberOfSb = 0;

  for (let i = 0; i <= num - 1; i++) {
    for (const personalData of record[i]) {
      if (personalData[name]) {
        numberOfSb = numberOfSb + personalData[name]["SB"];
      }
    }
  }
  return numberOfSb;
}

/////守備位置へ名前転記
/**
 * @param {string} name - 入力されている人の名前
 * @param {string} position - 選ばれたポジション名
 */
function moveField(name, position) {
  const fieldPositionP = document.getElementById("pitcher");
  const fieldPositionC = document.getElementById("catcher");
  const fieldPosition1B = document.getElementById("firstBaseMan");
  const fieldPosition2B = document.getElementById("secondBaseMan");
  const fieldPosition3B = document.getElementById("thirdBaseMan");
  const fieldPositionSS = document.getElementById("shortStop");
  const fieldPositionLF = document.getElementById("left");
  const fieldPositionCF = document.getElementById("center");
  const fieldPositionRF = document.getElementById("right");

  if (position === "P") {
    fieldPositionP.innerText = name;
  } else if (position === "C") {
    fieldPositionC.innerText = name;
  } else if (position === "1B") {
    fieldPosition1B.innerText = name;
  } else if (position === "2B") {
    fieldPosition2B.innerText = name;
  } else if (position === "3B") {
    fieldPosition3B.innerText = name;
  } else if (position === "SS") {
    fieldPositionSS.innerText = name;
  } else if (position === "LF") {
    fieldPositionLF.innerText =name;
  } else if (position === "CF") {
    fieldPositionCF.innerText = name;
  } else if (position === "RF") {
    fieldPositionRF.innerText = name;
  }
}

/////Member リスト表示
/**
 * @param {string} name - メンバーに追加したい人の名前
 * @returns ドロップダウンのoption要素を作成する
 */
function member() {
  let elements = document.getElementsByName("member");
  let length = elements.length;
  let checkValue = "";
  
  for (let i = 0; i < length; i++) {
    if (elements[i].checked) {
      let option = document.createElement("option");
      checkValue = elements[i].value;
      option.value = checkValue;
      option.textContent = checkValue;
      nameOne.appendChild(option);
    }
  }
  for (let i = 0; i < length; i++) {
    if (elements[i].checked) {
      let option = document.createElement("option");
      checkValue = elements[i].value;
      option.value = checkValue;
      option.textContent = checkValue;
      nameTwo.appendChild(option);
    }
  }for (let i = 0; i < length; i++) {
    if (elements[i].checked) {
      let option = document.createElement("option");
      checkValue = elements[i].value;
      option.value = checkValue;
      option.textContent = checkValue;
      nameThree.appendChild(option);
    }
  }for (let i = 0; i < length; i++) {
    if (elements[i].checked) {
      let option = document.createElement("option");
      checkValue = elements[i].value;
      option.value = checkValue;
      option.textContent = checkValue;
      nameFour.appendChild(option);
    }
  }
  for (let i = 0; i < length; i++) {
    if (elements[i].checked) {
      let option = document.createElement("option");
      checkValue = elements[i].value;
      option.value = checkValue;
      option.textContent = checkValue;
      nameFive.appendChild(option);
    }
  }
  for (let i = 0; i < length; i++) {
    if (elements[i].checked) {
      let option = document.createElement("option");
      checkValue = elements[i].value;
      option.value = checkValue;
      option.textContent = checkValue;
      nameSix.appendChild(option);
    }
  }
  for (let i = 0; i < length; i++) {
    if (elements[i].checked) {
      let option = document.createElement("option");
      checkValue = elements[i].value;
      option.value = checkValue;
      option.textContent = checkValue;
      nameSeven.appendChild(option);
    }
  }
  for (let i = 0; i < length; i++) {
    if (elements[i].checked) {
      let option = document.createElement("option");
      checkValue = elements[i].value;
      option.value = checkValue;
      option.textContent = checkValue;
      nameEight.appendChild(option);
    }
  }
  for (let i = 0; i < length; i++) {
    if (elements[i].checked) {
      let option = document.createElement("option");
      checkValue = elements[i].value;
      option.value = checkValue;
      option.textContent = checkValue;
      nameNine.appendChild(option);
    }
  }
}

///// 1 枠目のイベント
function displayNumberOne() {
  const statsOneAvg = document.getElementById("avg1");
  const statsOneObp = document.getElementById("obp1");
  const statsOneSlg = document.getElementById("slg1");
  const statsOneHr = document.getElementById("hr1");
  const statsOneSb = document.getElementById("sb1");
  let personalName = document.getElementById("memberList1");
  let lastGameOne = document.getElementById("gameOne");
  statsOneAvg.innerText = avg(personalName.value, lastGameOne.value);
  statsOneObp.innerText = obp(personalName.value, lastGameOne.value);
  statsOneSlg.innerText = slg(personalName.value, lastGameOne.value);
  statsOneHr.innerText = hr(personalName.value, lastGameOne.value);
  statsOneSb.innerText = sb(personalName.value, lastGameOne.value);
}
const checkOne = document.getElementById("button1");
checkOne.addEventListener("click", displayNumberOne);

function displayPositionOne() {
  let personalName = document.getElementById("memberList1");
  const positionSelect = document.getElementById("positionOne");
  moveField(personalName.value, positionSelect.value);
}
const moveOne = document.getElementById("buttonP1");
moveOne.addEventListener("click", displayPositionOne);

const nameOne = document.getElementById("memberList1");
const createListOne = document.getElementById("buttonM1");
createListOne.addEventListener("click", member);

///// 2 枠目のイベント
function displayNumberTwo() {
  const statsOneAvg = document.getElementById("avg2");
  const statsOneObp = document.getElementById("obp2");
  const statsOneSlg = document.getElementById("slg2");
  const statsOneHr = document.getElementById("hr2");
  const statsOneSb = document.getElementById("sb2");
  let personalName = document.getElementById("memberList2");
  let lastGameOne = document.getElementById("gameTwo");
  statsOneAvg.innerText = avg(personalName.value, lastGameOne.value);
  statsOneObp.innerText = obp(personalName.value, lastGameOne.value);
  statsOneSlg.innerText = slg(personalName.value, lastGameOne.value);
  statsOneHr.innerText = hr(personalName.value, lastGameOne.value);
  statsOneSb.innerText = sb(personalName.value, lastGameOne.value);
}
const checkTwo = document.getElementById("button2");
checkTwo.addEventListener("click", displayNumberTwo);

function displayPositionTwo() {
  let personalName = document.getElementById("memberList2");
  const positionSelect = document.getElementById("positionTwo");
  moveField(personalName.value, positionSelect.value);
}
const moveTwo = document.getElementById("buttonP2");
moveTwo.addEventListener("click", displayPositionTwo);

const nameTwo = document.getElementById("memberList2");
const createListTwo = document.getElementById("buttonM1");
createListTwo.addEventListener("click", member);

///// 3 枠目のイベント
function displayNumberThree() {
  const statsOneAvg = document.getElementById("avg3");
  const statsOneObp = document.getElementById("obp3");
  const statsOneSlg = document.getElementById("slg3");
  const statsOneHr = document.getElementById("hr3");
  const statsOneSb = document.getElementById("sb3");
  let personalName = document.getElementById("memberList3");
  let lastGameOne = document.getElementById("gameThree");
  statsOneAvg.innerText = avg(personalName.value, lastGameOne.value);
  statsOneObp.innerText = obp(personalName.value, lastGameOne.value);
  statsOneSlg.innerText = slg(personalName.value, lastGameOne.value);
  statsOneHr.innerText = hr(personalName.value, lastGameOne.value);
  statsOneSb.innerText = sb(personalName.value, lastGameOne.value);
}
const checkThree = document.getElementById("button3");
checkThree.addEventListener("click", displayNumberThree);

function displayPositionThree() {
  let personalName = document.getElementById("memberList3");
  const positionSelect = document.getElementById("positionThree");
  moveField(personalName.value, positionSelect.value);
}
const moveThree = document.getElementById("buttonP3");
moveThree.addEventListener("click", displayPositionThree);

const nameThree = document.getElementById("memberList3");
const createListThree = document.getElementById("buttonM1");
createListThree.addEventListener("click", member);

///// 4 枠目のイベント
function displayNumberFour() {
  const statsOneAvg = document.getElementById("avg4");
  const statsOneObp = document.getElementById("obp4");
  const statsOneSlg = document.getElementById("slg4");
  const statsOneHr = document.getElementById("hr4");
  const statsOneSb = document.getElementById("sb4");
  let personalName = document.getElementById("memberList4");
  let lastGameOne = document.getElementById("gameFour");
  statsOneAvg.innerText = avg(personalName.value, lastGameOne.value);
  statsOneObp.innerText = obp(personalName.value, lastGameOne.value);
  statsOneSlg.innerText = slg(personalName.value, lastGameOne.value);
  statsOneHr.innerText = hr(personalName.value, lastGameOne.value);
  statsOneSb.innerText = sb(personalName.value, lastGameOne.value);
}
const checkFour = document.getElementById("button4");
checkFour.addEventListener("click", displayNumberFour);

function displayPositionFour() {
  let personalName = document.getElementById("memberList4");
  const positionSelect = document.getElementById("positionFour");
  moveField(personalName.value, positionSelect.value);
}
const moveFour = document.getElementById("buttonP4");
moveFour.addEventListener("click", displayPositionFour);

const nameFour = document.getElementById("memberList4");
const createListFour = document.getElementById("buttonM1");
createListFour.addEventListener("click", member);

///// 5 枠目のイベント
function displayNumberFive() {
  const statsOneAvg = document.getElementById("avg5");
  const statsOneObp = document.getElementById("obp5");
  const statsOneSlg = document.getElementById("slg5");
  const statsOneHr = document.getElementById("hr5");
  const statsOneSb = document.getElementById("sb5");
  let personalName = document.getElementById("memberList5");
  let lastGameOne = document.getElementById("gameFive");
  statsOneAvg.innerText = avg(personalName.value, lastGameOne.value);
  statsOneObp.innerText = obp(personalName.value, lastGameOne.value);
  statsOneSlg.innerText = slg(personalName.value, lastGameOne.value);
  statsOneHr.innerText = hr(personalName.value, lastGameOne.value);
  statsOneSb.innerText = sb(personalName.value, lastGameOne.value);
}
const checkFive = document.getElementById("button5");
checkFive.addEventListener("click", displayNumberFive);

function displayPositionFive() {
  let personalName = document.getElementById("memberList5");
  const positionSelect = document.getElementById("positionFive");
  moveField(personalName.value, positionSelect.value);
}
const moveFive = document.getElementById("buttonP5");
moveFive.addEventListener("click", displayPositionFive);

const nameFive = document.getElementById("memberList5");
const createListFive = document.getElementById("buttonM1");
createListFive.addEventListener("click", member);

///// 6 枠目のイベント
function displayNumberSix() {
  const statsOneAvg = document.getElementById("avg6");
  const statsOneObp = document.getElementById("obp6");
  const statsOneSlg = document.getElementById("slg6");
  const statsOneHr = document.getElementById("hr6");
  const statsOneSb = document.getElementById("sb6");
  let personalName = document.getElementById("memberList6");
  let lastGameOne = document.getElementById("gameSix");
  statsOneAvg.innerText = avg(personalName.value, lastGameOne.value);
  statsOneObp.innerText = obp(personalName.value, lastGameOne.value);
  statsOneSlg.innerText = slg(personalName.value, lastGameOne.value);
  statsOneHr.innerText = hr(personalName.value, lastGameOne.value);
  statsOneSb.innerText = sb(personalName.value, lastGameOne.value);
}
const checkSix = document.getElementById("button6");
checkSix.addEventListener("click", displayNumberSix);

function displayPositionSix() {
  let personalName = document.getElementById("memberList6");
  const positionSelect = document.getElementById("positionSix");
  moveField(personalName.value, positionSelect.value);
}
const moveSix = document.getElementById("buttonP6");
moveSix.addEventListener("click", displayPositionSix);

const nameSix = document.getElementById("memberList6");
const createListSix = document.getElementById("buttonM1");
createListSix.addEventListener("click", member);

///// 7 枠目のイベント
function displayNumberSeven() {
  const statsOneAvg = document.getElementById("avg7");
  const statsOneObp = document.getElementById("obp7");
  const statsOneSlg = document.getElementById("slg7");
  const statsOneHr = document.getElementById("hr7");
  const statsOneSb = document.getElementById("sb7");
  let personalName = document.getElementById("memberList7");
  let lastGameOne = document.getElementById("gameSeven");
  statsOneAvg.innerText = avg(personalName.value, lastGameOne.value);
  statsOneObp.innerText = obp(personalName.value, lastGameOne.value);
  statsOneSlg.innerText = slg(personalName.value, lastGameOne.value);
  statsOneHr.innerText = hr(personalName.value, lastGameOne.value);
  statsOneSb.innerText = sb(personalName.value, lastGameOne.value);
}
const checkSeven = document.getElementById("button7");
checkSeven.addEventListener("click", displayNumberSeven);

function displayPositionSeven() {
  let personalName = document.getElementById("memberList7");
  const positionSelect = document.getElementById("positionSeven");
  moveField(personalName.value, positionSelect.value);
}
const moveSeven = document.getElementById("buttonP7");
moveSeven.addEventListener("click", displayPositionSeven);

const nameSeven = document.getElementById("memberList7");
const createListSeven = document.getElementById("buttonM1");
createListSeven.addEventListener("click", member);

///// 8 枠目のイベント
function displayNumberEight() {
  const statsOneAvg = document.getElementById("avg8");
  const statsOneObp = document.getElementById("obp8");
  const statsOneSlg = document.getElementById("slg8");
  const statsOneHr = document.getElementById("hr8");
  const statsOneSb = document.getElementById("sb8");
  let personalName = document.getElementById("memberList8");
  let lastGameOne = document.getElementById("gameEight");
  statsOneAvg.innerText = avg(personalName.value, lastGameOne.value);
  statsOneObp.innerText = obp(personalName.value, lastGameOne.value);
  statsOneSlg.innerText = slg(personalName.value, lastGameOne.value);
  statsOneHr.innerText = hr(personalName.value, lastGameOne.value);
  statsOneSb.innerText = sb(personalName.value, lastGameOne.value);
}
const checkEight = document.getElementById("button8");
checkEight.addEventListener("click", displayNumberEight);

function displayPositionEight() {
  let personalName = document.getElementById("memberList8");
  const positionSelect = document.getElementById("positionEight");
  moveField(personalName.value, positionSelect.value);
}
const moveEight = document.getElementById("buttonP8");
moveEight.addEventListener("click", displayPositionEight);

const nameEight = document.getElementById("memberList8");
const createListEight = document.getElementById("buttonM1");
createListEight.addEventListener("click", member);

///// 9 枠目のイベント
function displayNumberNine() {
  const statsOneAvg = document.getElementById("avg9");
  const statsOneObp = document.getElementById("obp9");
  const statsOneSlg = document.getElementById("slg9");
  const statsOneHr = document.getElementById("hr9");
  const statsOneSb = document.getElementById("sb9");
  let personalName = document.getElementById("memberList9");
  let lastGameOne = document.getElementById("gameNine");
  statsOneAvg.innerText = avg(personalName.value, lastGameOne.value);
  statsOneObp.innerText = obp(personalName.value, lastGameOne.value);
  statsOneSlg.innerText = slg(personalName.value, lastGameOne.value);
  statsOneHr.innerText = hr(personalName.value, lastGameOne.value);
  statsOneSb.innerText = sb(personalName.value, lastGameOne.value);
}
const checkNine = document.getElementById("button9");
checkNine.addEventListener("click", displayNumberNine);

function displayPositionNine() {
  let personalName = document.getElementById("memberList9");
  const positionSelect = document.getElementById("positionNine");
  moveField(personalName.value, positionSelect.value);
}
const moveNine = document.getElementById("buttonP9");
moveNine.addEventListener("click", displayPositionNine);

const nameNine = document.getElementById("memberList9");
const createListNine = document.getElementById("buttonM1");
createListNine.addEventListener("click", member);

/////全枠に数字を入れるイベント
function inputAll() {
  const inputAllNumber = document.getElementById("statsCheckAll");
  const lastGameOne = document.getElementById("gameOne");
  const lastGameTwo = document.getElementById("gameTwo");
  const lastGameThree = document.getElementById("gameThree");
  const lastGameFour = document.getElementById("gameFour");
  const lastGameFive = document.getElementById("gameFive");
  const lastGameSix = document.getElementById("gameSix");
  const lastGameSeven = document.getElementById("gameSeven");
  const lastGameEight = document.getElementById("gameEight");
  const lastGameNine = document.getElementById("gameNine");
  lastGameOne.value = inputAllNumber.value;
  lastGameTwo.value = inputAllNumber.value;
  lastGameThree.value = inputAllNumber.value;
  lastGameFour.value = inputAllNumber.value;
  lastGameFive.value = inputAllNumber.value;
  lastGameSix.value = inputAllNumber.value;
  lastGameSeven.value = inputAllNumber.value;
  lastGameEight.value = inputAllNumber.value;
  lastGameNine.value = inputAllNumber.value;
}

const inputNumber = document.getElementById("inputAll");
inputNumber.addEventListener("click", inputAll);

/////全枠の値を表示させるイベント
function checkAll() {
  displayNumberOne();
  displayNumberTwo();
  displayNumberThree();
  displayNumberFour();
  displayNumberFive();
  displayNumberSix();
  displayNumberSeven();
  displayNumberEight();
  displayNumberNine();
}

const checkAllButton = document.getElementById("checkAll");
checkAllButton.addEventListener("click", checkAll);

/////全枠の守備位置を移動させるイベント
function moveAll() {
  displayPositionOne();
  displayPositionTwo();
  displayPositionThree();
  displayPositionFour();
  displayPositionFive();
  displayPositionSix();
  displayPositionSeven();
  displayPositionEight();
  displayPositionNine();
}

const moveAllButton = document.getElementById("moveAll");
moveAllButton.addEventListener("click", moveAll);

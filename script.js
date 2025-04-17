'use strict'
// 1行目に記載している 'use strict' は削除しないでください

///// average 打率
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
  if (sumAtBat !== 0) {
    return `${average.toFixed(3)} (${sumAtBat} - ${sumHit})`;
  } else {
    return "No Data";
  }
}

// test(avg("Fujita", 2), 0.143);
// test(avg("Fujita", 1), 0.250);
// console.log(avg("BBB"));

///// select member average 選択メンバーの打率
/**
 * @returns {number} 打率を計算する
 */
function selectMemberAvg() {
  let elements = document.getElementsByName("member");
  let length = elements.length;
  let average = 0;
  let sumHit = 0;
  let sumAtBat = 0;
  const selectMember = [];
  
  for (let i = 0; i < length; i++) {
    if (elements[i].checked) {
      selectMember.push(elements[i].value);
    }
  }
  for (let j = 0; j < selectMember.length; j++) {
    for (const gameData of record) {
      for (const personalData of gameData) {
        if (personalData[selectMember[j]]) {
          sumHit = sumHit + personalData[selectMember[j]]["single"] + personalData[selectMember[j]]["double"] + personalData[selectMember[j]]["triple"] + personalData[selectMember[j]]["HR"];
          sumAtBat = sumAtBat + personalData[selectMember[j]]["atBat"];
        }
      }
    }
  }
  // console.log(sumAtBat); // 黒川 12 藤田 19
  // console.log(sumHit); // 黒川 3 藤田 6
  average = sumHit / sumAtBat;
  return `${average.toFixed(3)} (${sumAtBat} - ${sumHit})`
}

///// On Base Percentage 出塁率
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
  if (denominator !== 0) {
    return onBasePercent.toFixed(3);
  } else {
    return "No Data";
  }
}

///// Slugging Percentage 長打率
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
  if (sumAtBat !== 0) {
    return slugging.toFixed(3);
  } else {
    return "No Data";
  }
}

///// Home Run
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

///// Stolen Base 盗塁
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

///// Run batted in
/**
 * @param {string} name - 結果を表示したい人の名前
 * @param {number} num - 計算したい試合数
 * @returns {number} 三振数を合計する
 */
function rbi(name, num) {
  let numberOfRbi = 0;

  for (let i = 0; i <= num - 1; i++) {
    for (const personalData of record[i]) {
      if (personalData[name]) {
        numberOfRbi = numberOfRbi + personalData[name]["RBI"];
      }
    }
  }
  return numberOfRbi;
}

///// Strike out
/**
 * @param {string} name - 結果を表示したい人の名前
 * @param {number} num - 計算したい試合数
 * @returns {number} 三振数を合計する
 */
function k(name, num) {
  let numberOfK = 0;

  for (let i = 0; i <= num - 1; i++) {
    for (const personalData of record[i]) {
      if (personalData[name]) {
        numberOfK = numberOfK + personalData[name]["K"];
      }
    }
  }
  return numberOfK;
}

///// 守備位置へ名前転記
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

///// Member リスト表示
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

///// 選択メンバーの打率を表示するイベント
function displaySelectMemberAvg() {
  const displayAvg = document.getElementById("memberAvg");
  displayAvg.innerText = selectMemberAvg();
}
const okButton = document.getElementById("buttonM1");
okButton.addEventListener("click", displaySelectMemberAvg);

///// 守備位置の初期値 defaultPosition の関数で参照
const personalPosition = {"黒川": "P", "藤田": "C", "杉浦": "3B", "米田": "LF", "久木田": "CF", "西": "SS", "田前": "SS", "鬼塚": "1B", "下町": "2B", "枝元": "RF", "比嘉": "2B", "前野": "SS", "後潟": "CF",};

///// 打率３割以上、出塁率３割５分以上は赤字に変える
/**
 * @param {number} num - 取得する avg エレメントの番号
 * 基準値以上は赤文字に変更、それ以外は黒文字にする
 */
function fontColor(num) {
  const getAvg = document.getElementById(`avg${num}`);
  const getObp = document.getElementById(`obp${num}`);
  const getSlg = document.getElementById(`slg${num}`);
  const getHr = document.getElementById(`hr${num}`);
  const changeColorAvg = getAvg.innerText.substring(0, 5);
  if (changeColorAvg >= 0.300) {
    getAvg.style.color = "red";
  } else if (changeColorAvg === "No Da") {
    getAvg.style.color = "gray";
  } else {
    getAvg.style.color = "black";
  }

  if (getObp.innerText >= 0.350) {
    getObp.style.color = "red";
  } else if (getObp.innerText === "No Data") {
    getObp.style.color = "gray";
  } else {
    getObp.style.color = "black";
  }

  if (getSlg.innerText === "No Data") {
    getSlg.style.color = "gray";
  } else {
    getSlg.style.color = "black";
  }

  if (getHr.innerText > 0) {
    getHr.style.color = "red";
  } else {
    getHr.style.color = "black";
  }
}

///// 1 枠目のイベント
function displayNumberOne() {
  const statsOneAvg = document.getElementById("avg1");
  const statsOneObp = document.getElementById("obp1");
  const statsOneSlg = document.getElementById("slg1");
  const statsOneRbi = document.getElementById("rbi1");
  const statsOneHr = document.getElementById("hr1");
  const statsOneSb = document.getElementById("sb1");
  const statsOneK = document.getElementById("K1");
  let personalName = document.getElementById("memberList1");
  let lastGameOne = document.getElementById("gameOne");
  statsOneAvg.innerText = avg(personalName.value, lastGameOne.value);
  statsOneObp.innerText = obp(personalName.value, lastGameOne.value);
  statsOneSlg.innerText = slg(personalName.value, lastGameOne.value);
  statsOneRbi.innerText = rbi(personalName.value, lastGameOne.value);
  statsOneHr.innerText = hr(personalName.value, lastGameOne.value);
  statsOneSb.innerText = sb(personalName.value, lastGameOne.value);
  statsOneK.innerText = k(personalName.value, lastGameOne.value);
  fontColor(1);
}
const checkOne = document.getElementById("button1");
checkOne.addEventListener("click", displayNumberOne);

// メンバーリストのオプション作成
const nameOne = document.getElementById("memberList1");
okButton.addEventListener("click", member);

// 守備位置の初期値
function defaultPositionOne() {
  const position = document.getElementById("position1");
  position.value = personalPosition[nameOne.value];
}
nameOne.addEventListener("change", defaultPositionOne);

///// 2 枠目のイベント
function displayNumberTwo() {
  const statsOneAvg = document.getElementById("avg2");
  const statsOneObp = document.getElementById("obp2");
  const statsOneSlg = document.getElementById("slg2");
  const statsOneRbi = document.getElementById("rbi2");
  const statsOneHr = document.getElementById("hr2");
  const statsOneSb = document.getElementById("sb2");
  const statsOneK = document.getElementById("K2");
  let personalName = document.getElementById("memberList2");
  let lastGameOne = document.getElementById("gameTwo");
  statsOneAvg.innerText = avg(personalName.value, lastGameOne.value);
  statsOneObp.innerText = obp(personalName.value, lastGameOne.value);
  statsOneSlg.innerText = slg(personalName.value, lastGameOne.value);
  statsOneRbi.innerText = rbi(personalName.value, lastGameOne.value);
  statsOneHr.innerText = hr(personalName.value, lastGameOne.value);
  statsOneSb.innerText = sb(personalName.value, lastGameOne.value);
  statsOneK.innerText = k(personalName.value, lastGameOne.value);
  fontColor(2);
}
const checkTwo = document.getElementById("button2");
checkTwo.addEventListener("click", displayNumberTwo);

// メンバーリストのオプション作成
const nameTwo = document.getElementById("memberList2");
okButton.addEventListener("click", member);

// 守備位置の初期値
function defaultPositionTwo() {
  const position = document.getElementById("position2");
  position.value = personalPosition[nameTwo.value];
}
nameTwo.addEventListener("change", defaultPositionTwo);

///// 3 枠目のイベント
function displayNumberThree() {
  const statsOneAvg = document.getElementById("avg3");
  const statsOneObp = document.getElementById("obp3");
  const statsOneSlg = document.getElementById("slg3");
  const statsOneRbi = document.getElementById("rbi3");
  const statsOneHr = document.getElementById("hr3");
  const statsOneSb = document.getElementById("sb3");
  const statsOneK = document.getElementById("K3");
  let personalName = document.getElementById("memberList3");
  let lastGameOne = document.getElementById("gameThree");
  statsOneAvg.innerText = avg(personalName.value, lastGameOne.value);
  statsOneObp.innerText = obp(personalName.value, lastGameOne.value);
  statsOneSlg.innerText = slg(personalName.value, lastGameOne.value);
  statsOneRbi.innerText = rbi(personalName.value, lastGameOne.value);
  statsOneHr.innerText = hr(personalName.value, lastGameOne.value);
  statsOneSb.innerText = sb(personalName.value, lastGameOne.value);
  statsOneK.innerText = k(personalName.value, lastGameOne.value);
  fontColor(3);
}
const checkThree = document.getElementById("button3");
checkThree.addEventListener("click", displayNumberThree);

// メンバーリストのオプション作成
const nameThree = document.getElementById("memberList3");
okButton.addEventListener("click", member);

// 守備位置の初期値
function defaultPositionThree() {
  const position = document.getElementById("position3");
  position.value = personalPosition[nameThree.value];
}
nameThree.addEventListener("change", defaultPositionThree);

///// 4 枠目のイベント
function displayNumberFour() {
  const statsOneAvg = document.getElementById("avg4");
  const statsOneObp = document.getElementById("obp4");
  const statsOneSlg = document.getElementById("slg4");
  const statsOneRbi = document.getElementById("rbi4");
  const statsOneHr = document.getElementById("hr4");
  const statsOneSb = document.getElementById("sb4");
  const statsOneK = document.getElementById("K4");
  let personalName = document.getElementById("memberList4");
  let lastGameOne = document.getElementById("gameFour");
  statsOneAvg.innerText = avg(personalName.value, lastGameOne.value);
  statsOneObp.innerText = obp(personalName.value, lastGameOne.value);
  statsOneSlg.innerText = slg(personalName.value, lastGameOne.value);
  statsOneRbi.innerText = rbi(personalName.value, lastGameOne.value);
  statsOneHr.innerText = hr(personalName.value, lastGameOne.value);
  statsOneSb.innerText = sb(personalName.value, lastGameOne.value);
  statsOneK.innerText = k(personalName.value, lastGameOne.value);
  fontColor(4);
}
const checkFour = document.getElementById("button4");
checkFour.addEventListener("click", displayNumberFour);

// メンバーリストのオプション作成
const nameFour = document.getElementById("memberList4");
okButton.addEventListener("click", member);

// 守備位置の初期値
function defaultPositionFour() {
  const position = document.getElementById("position4");
  position.value = personalPosition[nameFour.value];
}
nameFour.addEventListener("change", defaultPositionFour);

///// 5 枠目のイベント
function displayNumberFive() {
  const statsOneAvg = document.getElementById("avg5");
  const statsOneObp = document.getElementById("obp5");
  const statsOneSlg = document.getElementById("slg5");
  const statsOneRbi = document.getElementById("rbi5");
  const statsOneHr = document.getElementById("hr5");
  const statsOneSb = document.getElementById("sb5");
  const statsOneK = document.getElementById("K5");
  let personalName = document.getElementById("memberList5");
  let lastGameOne = document.getElementById("gameFive");
  statsOneAvg.innerText = avg(personalName.value, lastGameOne.value);
  statsOneObp.innerText = obp(personalName.value, lastGameOne.value);
  statsOneSlg.innerText = slg(personalName.value, lastGameOne.value);
  statsOneRbi.innerText = rbi(personalName.value, lastGameOne.value);
  statsOneHr.innerText = hr(personalName.value, lastGameOne.value);
  statsOneSb.innerText = sb(personalName.value, lastGameOne.value);
  statsOneK.innerText = k(personalName.value, lastGameOne.value);
  fontColor(5);
}
const checkFive = document.getElementById("button5");
checkFive.addEventListener("click", displayNumberFive);

// メンバーリストのオプション作成
const nameFive = document.getElementById("memberList5");
okButton.addEventListener("click", member);

// 守備位置の初期値
function defaultPositionFive() {
  const position = document.getElementById("position5");
  position.value = personalPosition[nameFive.value];
}
nameFive.addEventListener("change", defaultPositionFive);

///// 6 枠目のイベント
function displayNumberSix() {
  const statsOneAvg = document.getElementById("avg6");
  const statsOneObp = document.getElementById("obp6");
  const statsOneSlg = document.getElementById("slg6");
  const statsOneRbi = document.getElementById("rbi6");
  const statsOneHr = document.getElementById("hr6");
  const statsOneSb = document.getElementById("sb6");
  const statsOneK = document.getElementById("K6");
  let personalName = document.getElementById("memberList6");
  let lastGameOne = document.getElementById("gameSix");
  statsOneAvg.innerText = avg(personalName.value, lastGameOne.value);
  statsOneObp.innerText = obp(personalName.value, lastGameOne.value);
  statsOneSlg.innerText = slg(personalName.value, lastGameOne.value);
  statsOneRbi.innerText = rbi(personalName.value, lastGameOne.value);
  statsOneHr.innerText = hr(personalName.value, lastGameOne.value);
  statsOneSb.innerText = sb(personalName.value, lastGameOne.value);
  statsOneK.innerText = k(personalName.value, lastGameOne.value);
  fontColor(6);
}
const checkSix = document.getElementById("button6");
checkSix.addEventListener("click", displayNumberSix);

// メンバーリストのオプション作成
const nameSix = document.getElementById("memberList6");
okButton.addEventListener("click", member);

// 守備位置の初期値
function defaultPositionSix() {
  const position = document.getElementById("position6");
  position.value = personalPosition[nameSix.value];
}
nameSix.addEventListener("change", defaultPositionSix);

///// 7 枠目のイベント
function displayNumberSeven() {
  const statsOneAvg = document.getElementById("avg7");
  const statsOneObp = document.getElementById("obp7");
  const statsOneSlg = document.getElementById("slg7");
  const statsOneRbi = document.getElementById("rbi7");
  const statsOneHr = document.getElementById("hr7");
  const statsOneSb = document.getElementById("sb7");
  const statsOneK = document.getElementById("K7");
  let personalName = document.getElementById("memberList7");
  let lastGameOne = document.getElementById("gameSeven");
  statsOneAvg.innerText = avg(personalName.value, lastGameOne.value);
  statsOneObp.innerText = obp(personalName.value, lastGameOne.value);
  statsOneSlg.innerText = slg(personalName.value, lastGameOne.value);
  statsOneRbi.innerText = rbi(personalName.value, lastGameOne.value);
  statsOneHr.innerText = hr(personalName.value, lastGameOne.value);
  statsOneSb.innerText = sb(personalName.value, lastGameOne.value);
  statsOneK.innerText = k(personalName.value, lastGameOne.value);
  fontColor(7);
}
const checkSeven = document.getElementById("button7");
checkSeven.addEventListener("click", displayNumberSeven);

// メンバーリストのオプション作成
const nameSeven = document.getElementById("memberList7");
okButton.addEventListener("click", member);

// 守備位置の初期値
function defaultPositionSeven() {
  const position = document.getElementById("position7");
  position.value = personalPosition[nameSeven.value];
}
nameSeven.addEventListener("change", defaultPositionSeven);

///// 8 枠目のイベント
function displayNumberEight() {
  const statsOneAvg = document.getElementById("avg8");
  const statsOneObp = document.getElementById("obp8");
  const statsOneSlg = document.getElementById("slg8");
  const statsOneRbi = document.getElementById("rbi8");
  const statsOneHr = document.getElementById("hr8");
  const statsOneSb = document.getElementById("sb8");
  const statsOneK = document.getElementById("K8");
  let personalName = document.getElementById("memberList8");
  let lastGameOne = document.getElementById("gameEight");
  statsOneAvg.innerText = avg(personalName.value, lastGameOne.value);
  statsOneObp.innerText = obp(personalName.value, lastGameOne.value);
  statsOneSlg.innerText = slg(personalName.value, lastGameOne.value);
  statsOneRbi.innerText = rbi(personalName.value, lastGameOne.value);
  statsOneHr.innerText = hr(personalName.value, lastGameOne.value);
  statsOneSb.innerText = sb(personalName.value, lastGameOne.value);
  statsOneK.innerText = k(personalName.value, lastGameOne.value);
  fontColor(8);
}
const checkEight = document.getElementById("button8");
checkEight.addEventListener("click", displayNumberEight);

// メンバーリストのオプション作成
const nameEight = document.getElementById("memberList8");
okButton.addEventListener("click", member);

// 守備位置の初期値
function defaultPositionEight() {
  const position = document.getElementById("position8");
  position.value = personalPosition[nameEight.value];
}
nameEight.addEventListener("change", defaultPositionEight);

///// 9 枠目のイベント
function displayNumberNine() {
  const statsOneAvg = document.getElementById("avg9");
  const statsOneObp = document.getElementById("obp9");
  const statsOneSlg = document.getElementById("slg9");
  const statsOneRbi = document.getElementById("rbi9");
  const statsOneHr = document.getElementById("hr9");
  const statsOneSb = document.getElementById("sb9");
  const statsOneK = document.getElementById("K9");
  let personalName = document.getElementById("memberList9");
  let lastGameOne = document.getElementById("gameNine");
  statsOneAvg.innerText = avg(personalName.value, lastGameOne.value);
  statsOneObp.innerText = obp(personalName.value, lastGameOne.value);
  statsOneSlg.innerText = slg(personalName.value, lastGameOne.value);
  statsOneRbi.innerText = rbi(personalName.value, lastGameOne.value);
  statsOneHr.innerText = hr(personalName.value, lastGameOne.value);
  statsOneSb.innerText = sb(personalName.value, lastGameOne.value);
  statsOneK.innerText = k(personalName.value, lastGameOne.value);
  fontColor(9);
}
const checkNine = document.getElementById("button9");
checkNine.addEventListener("click", displayNumberNine);

// メンバーリストのオプション作成
const nameNine = document.getElementById("memberList9");
okButton.addEventListener("click", member);

// 守備位置の初期値
function defaultPositionNine() {
  const position = document.getElementById("position9");
  position.value = personalPosition[nameNine.value];
}
nameNine.addEventListener("change", defaultPositionNine);

///// 全枠に数字を入れるイベント
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

///// 全枠の値を表示させるイベント
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

///// 全枠の守備位置を移動させるイベント
function moveAll() {
  for (let i = 1; i < 10; i++) {
    const personalName = document.getElementById(`memberList${i}`);
    const positionSelect = document.getElementById(`position${i}`);
    moveField(personalName.value, positionSelect.value);
  }
}

const moveAllButton = document.getElementById("moveAll");
moveAllButton.addEventListener("click", moveAll);

///// modal window
const modal = document.querySelector(".js-modal"),
open = document.querySelector(".js-modal-open"),
close = document.querySelector(".js-modal-close");

function modalOpen() {
  modal.classList.add("is-active");
}
open.addEventListener("click",modalOpen);

function modalClose() {
  modal.classList.remove("is-active");
}
close.addEventListener("click", modalClose);

function modalOut(e) {
  if (e.target == modal) {
    modal.classList.remove("is-active");
  }
}
addEventListener("click", modalOut);

///// モーダルウィンドウの中に表示させる名前
function firstPlanSelect() {
  let elements = document.getElementsByName("member");
  const selectMemberNames = [];
  
  for (let i = 0; i < elements.length; i++) {
    if (elements[i].checked) {
      selectMemberNames.push(elements[i].value);
    }
  }

  for (let j = 0; j < selectMemberNames.length; j++) {
    const nameText = document.getElementById(`member${j + 1}`);
    const radioBox = document.getElementById(`radio${j + 1}`);
    radioBox.style.display = "inline-block";
    nameText.innerText = selectMemberNames[j];
  }
}

okButton.addEventListener("click", firstPlanSelect);

///// 初期のオーダー配置
function firstSetOrder() {
  let checkValue = "";
  
  for (let j = 1; j < 10; j++) {
    const modalOrder = document.getElementsByName(`order${j}`);
    const modalOrderName = document.getElementById(`member${j}`);
    let length = modalOrder.length;
    for (let i = 0; i < length; i++) {
      if (modalOrder.item(i).checked) {
        checkValue = modalOrder.item(i).value;
        const orderPosition = document.getElementById(`memberList${checkValue}`);
        orderPosition.value = modalOrderName.innerText;
      }
    }
  }
}

function defaultPosition() {
  defaultPositionOne();
  defaultPositionTwo();
  defaultPositionThree();
  defaultPositionFour();
  defaultPositionFive();
  defaultPositionSix();
  defaultPositionSeven();
  defaultPositionEight();
  defaultPositionNine();
}

const modalOk = document.getElementById("inModalButton");
modalOk.addEventListener("click", firstSetOrder);
modalOk.addEventListener("click", defaultPosition);
modalOk.addEventListener("click", modalClose);

///// 印刷
function output() {
  const h1Hidden = document.getElementsByTagName("h1")[0];
  const h2Hidden = document.getElementsByTagName("h2")[0];
  const selectHidden = document.getElementById("counter");
  const selectedHidden = document.getElementById("counterValue");
  const nameHidden = document.getElementsByClassName("memberName");
  const okButtonHidden = document.getElementById("buttonM1");
  const memberAvgHidden = document.getElementsByClassName("memberAverage")[0];
  const memberAverageTextHidden = document.getElementsByClassName("teamAvg")[0];
  const maxNum = document.getElementById("maxStatsNumber");

  h1Hidden.style.display = "none";
  h2Hidden.style.display = "none";
  selectHidden.style.display = "none";
  selectedHidden.style.display = "none";
  okButtonHidden.style.display = "none";
  memberAvgHidden.style.display = "none";
  memberAverageTextHidden.style.display = "none";
  maxNum.style.display = "none";
  for (const name of nameHidden) {
    name.style.display = "none";
  }
  
  print();

  h1Hidden.style.display = "";
  h2Hidden.style.display = "";
  selectHidden.style.display = "";
  selectedHidden.style.display = "";
  okButtonHidden.style.display = "";
  memberAvgHidden.style.display = "";
  memberAverageTextHidden.style.display = "";
  maxNum.style.display = "";
  for (const name of nameHidden) {
    name.style.display = "";
  }
}

const printButton = document.getElementById("output");
printButton.addEventListener("click", output);

///// メンバー選択数を表示する
function selectNumber() {
  const selected = document.getElementById("counterValue");
  let elements = document.getElementsByName("member");
  let counter = 0;
  for (let i = 0; i < elements.length; i++) {
    if (elements[i].checked) {
      counter += 1;
    }
  }
  selected.innerText = counter;
}

for (let j = 0; j < 15; j++) {
const checkedMember = document.getElementsByClassName("memberName")[j];
checkedMember.addEventListener("change", selectNumber);
}

///// 最大試合数表示
function maxGameNumber() {
  const maxNum = document.getElementById("maxStatsNumber");
  maxNum.innerText = `max: ${record.length}`;
}
maxGameNumber();

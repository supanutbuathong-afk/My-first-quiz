console.log('%c🎮 Gamer Personality Quiz', 'font-size: 16px; font-weight: bold; color: #8b5cf6;');
console.log('%cMade by [ศุภณัฐ บัวทอง] | github.com/supanutbuathong-afk |)', 'font-size: 12px; color: #6b7280;');
const questions = [
{
    question: "คุณชอบเล่นเกมที่เน้นการวางเเผน (เช่น RTS, Strategy) มากกว่าเกมที่ใช้ความเร็วในการตอบสนอง (เช่น FPS, Fighting) ใช่หรือไม่?",
    answers: [
        { text: "ใช่", scoreType: "W", points: 1 },
        { text: "ไม่ใช่", scoreType: "R", points: 1 }
    ]   
},
{
    question: "คุณใช้เวลาดูวิดีโอ 'สอนการเล่น' หรือ 'Meta' ของเกมก่อนที่จะเริ่มเล่นเกมใหม่ใช่หรือไม่?",
    answers: [
        { text: "ใช่", scoreType: "W", points: 1 },
        { text: "ไม่", scoreType: "R", points: 1 }
    ]
},
{
    question: "คุณมักจะเล่นเกมไปเรื่อยๆ โดยไม่สนใจการกลับมาทำ Challenge หรือเก็บAchievement ทั้งหมดใช่หรือไม่?",
    answers: [
        { text: "ใช่", scoreType: "C", points: 1 },
        { text: "ไม่", scoreType: "D", points: 1 }
    ]
},
{
    question: "คุณใช้เวลาส่วนใหญ่ไปกับการปรับแต่ง Interface, ตัวละคร, หรือการสร้างบ้าน/ฐาน ในเกมใช่หรือไม่?",
    answers: [
        { text: "ใช่", scoreType: "C", points: 1 },
        { text: "ไม่", scoreType: "D", points: 1 }
    ]
},
{
    question: "ในเกมที่ต้องทำงานเป็นทีม คุณมักจะเป็นคนออกคำสั่งหรือวางแผนเส้นทางการเล่นหลักใช่หรือไม่?",
    answers: [
        { text: "ใช่", scoreType: "W", points: 1 },
        { text: "ไม่", scoreType: "R", points: 1 }
    ]
},
{
    question:"เมื่อแพ้ คุณจะยอมรับมันเเละเดินหน้าต่อ โดยไม่วิเคราะห์ความผิดพลาดอย่างละเอียดเเละวิธีปรับปรุงใช่หรือไม่?",
    answers: [
        { text: "ใช่", scoreType: "C", points: 1 },
        { text: "ไม่", scoreType: "D", points: 1 }
    ]
},
{
    question: "คุณใช้เวลาทำความเข้าใจTutorial หรือคู่มือการเล่นก่อนกระโดดเข้าสู่เกมใหม่ใช่หรือไม่?",
    answers: [
        { text: "ใช่", scoreType: "W", points: 1 },
        { text: "ไม่", scoreType: "R", points: 1 }
    ]
},
{
    question: "คุณให้ความสำคัญกับ 'ความสนุกและประสบการณ์ที่ไม่เหมือนใคร' มากกว่า 'การเป็นผู้เล่นที่เก่งที่สุด' ใช่หรือไม่?",
    answers: [
        { text: "ใช่", scoreType: "C", points: 1 },
        { text: "ไม่", scoreType: "D", points: 1 }
    ]
},
{
    question: " คุณ หลีกเลี่ยง การฟาร์มของหรือทำGrindingซ้ำๆ เพราะรู้สึกว่าน่าเบื่อใช่หรือไม่?",
    answers: [
        { text: "ใช่", scoreType: "C", points: 1 },
        { text: "ไม่", scoreType: "D", points: 1 }
    ]
},
{
    question: "เมื่อเกิด Bug ในเกม คุณมักจะหาทางใช้ประโยชน์จาก Bug นั้นเพื่อให้ได้เปรียบใช่หรือไม่?",
    answers: [
        { text: "ใช่", scoreType: "W", points: 1 },
        { text: "ไม่", scoreType: "R", points: 1 }
    ]
}
];
console.log('script.js loaded');
let currentQuestionIndex = 0;
let personalityScores = { W: 0, R: 0, C: 0, D: 0 };
const quizContainer=document.getElementById("quiz-container");
const quizContent=document.getElementById("quiz-content");
const questionElement=document.getElementById("question-text");
const startScreen=document.getElementById("start-screen");
const questionArea=document.getElementById("question-area");
const answerButtonsElement=document.getElementById("answer-buttons");
const startButton=document.getElementById("ปุ่มเริ่ม");
const resultDisplay=document.getElementById("result-display");
const resultTypeElement=document.getElementById("result-type");
const resultMessageElement=document.getElementById("result-message");
const restartBtn = document.getElementById("restart-btn");
const resultImg = document.getElementById("result-img");
const resultData = {    
    "WD": {   // object ที่เก็บข้อมูล หลายตัวได้ คือresultData  ส่วนพวกWD เป็น key ที่ใช้เรียกข้อมูลใน object นั้นๆละในแต่ละ key ก็จะมีข้อมูลย่อยๆอีกที เช่น title description image
        title: "WD: The Strategist 🧠",  //: "WD: The Strategist 🧠" คือvalue
        description: "คุณคือผู้ที่วางแผนทุกอย่างอย่างรอบคอบและมุ่งสู่ประสิทธิภาพสูงสุด!...",
        image: "img/Copilot_20260422_092553.png" // รูปตัวละครม่วง
    },
    "RC": {
        title: "RC: The Adventurer ✨",
        description: "คุณคือผู้ที่ชอบการผจญภัย ลงมือทำทันที และสร้างประสบการณ์ที่ไม่เหมือนใคร!...",
        image: "img/Copilot_20260422_092555.png" // รูปตัวละครสีเขียว
    },
    "WC": {
        title: "WC: The Visionary 🔮",
        description: "คุณมีทั้งการวางแผนที่ชาญฉลาดและความคิดสร้างสรรค์ที่ไร้ขีดจำกัด!...",
        image: "img/Copilot_20260422_092722.png" // รูปตัวละครสีน้ำเงิน
    },
    "RD": {
        title: "RD: The Master 🛠️",
        description: "คุณคือผู้ที่เก่งกาจในการตอบสนองอย่างรวดเร็ว และฝึกฝนทักษะจนเชี่ยวชาญเพื่อพิชิตทุกเป้าหมาย!...",
         image: "img/Copilot_20260422_092847.png" // รูปตัวละครเหลือง
    }
};

// 🏁 เริ่มเกมเมื่อคลิกปุ่มเริ่ม
function startGame() {startScreen.classList.add("hidden");
console.log('startGame called');

quizContent.classList.remove("hidden");
currentQuestionIndex=0;// รีเซ็ตลำดับคำถามเมื่อเริ่มเกมใหม่
personalityScores = { W: 0, R: 0, C: 0, D: 0 };// รีเซ็ตคะแนนเมื่อเริ่มเกมใหม่
showQuestion()}
startButton.addEventListener("click",startGame);
if (restartBtn) { restartBtn.addEventListener("click", restartQuiz); }



function showQuestion() {answerButtonsElement.innerHTML="";
console.log('showQuestion', currentQuestionIndex);
const currentQuestion= questions[currentQuestionIndex];
questionElement.innerText=currentQuestion.question;
currentQuestion.answers.forEach(answer=> {
const button = document.createElement("button");
button.innerText = answer.text;
button.classList.add("quiz-btn");

if (answer.scoreType === "W" || answer.scoreType === "C") {
    button.classList.add("btn-agree");
} else {
    button.classList.add("btn-disagree");
}
button.dataset.scoreType = answer.scoreType;
button.dataset.points = answer.points;
button.addEventListener("click",selectAnswer);
answerButtonsElement.appendChild(button);})
 void questionArea.offsetWidth;   /*  void แปลว่า "ทำแล้วทิ้งผลลัพธ์ ซึ่งก็คือการทิ้งค่าความกว้างที่ได้มาเพราะเป้าหมายคือรีเซตอนิเมชั่น"  รีเซ็ตการทำงานของแอนิเมชันโดยการเข้าถึง offsetWidth  บราวเซอจะคำนวณความกว้าง จะทำให้แอนิเมชันรีเซตใหม่จนสามารถเล่นซ้ำได้ทุกครั้งที่แสดงคำถามใหม่*/
    questionArea.classList.add("anim-slideFromRight");
;}



function selectAnswer(e) {const selectedButton = e.target; //เหตุการณ์คลิกที่ปุ่มคำตอบ
console.log('selectAnswer', selectedButton.dataset.scoreType, selectedButton.dataset.points);
const scoreType = selectedButton.dataset.scoreType;
const points = parseInt(selectedButton.dataset.points);
if(personalityScores[scoreType] !== undefined) {personalityScores[scoreType] += points;}


//ทำให้ปุ่มที่ถูกเลือกมีสีที่ชัดเจนขึ้น และปิดการใช้งานปุ่มอื่นๆ
Array.from(answerButtonsElement.children).forEach(button => { //HTMLCollection → forEach ไม่ได้ ❌ ตรงๆ ไม่ได้ Array.from() เลยแปลงให้เป็น Array ธรรมดาก่อน ถึงจะ forEach ได้
    button.disabled = true;
    button.classList.remove("btn-agree", "btn-disagree");
    if (button === selectedButton) {
        button.classList.add("btn-selected");
    } else {
        button.classList.add("btn-disabled");
    }
});
questionArea.classList.add("anim-slideToLeft");

setTimeout(()=>{
    questionArea.classList.remove("anim-slideToLeft");
    currentQuestionIndex++;
if(currentQuestionIndex < questions.length) { // ถ้ายังมีคำถามเหลืออยู่ ให้แสดงคำถามถัดไป
showQuestion();}
else {showResult();}},300);
}




function showResult() {
  quizContent.classList.add("hidden");
  resultDisplay.classList.remove("hidden");
  resultDisplay.classList.add("anim-slideDown");
  let finalType = "";  // เริ่มต้นเป็นสตริงว่างสำหรับเก็บผลลัพธ์สุดท้าย

    // 🏆 Step 1: เปรียบเทียบคู่ที่ 1 (W vs R)
    if (personalityScores.W >= personalityScores.R) {
        finalType += "W"; // W ชนะ
    } else {
        finalType += "R"; // R ชนะ (หรือเสมอกัน)
    }

    // 🏆 Step 2: เปรียบเทียบคู่ที่ 2 (D vs C)
    if (personalityScores.D >= personalityScores.C) {
        finalType += "D"; // D ชนะ
    } else {
        finalType += "C"; }
const result=resultData[finalType]; // ดึงข้อมูลผลลัพธ์จาก resultData ตาม finalType ที่ได้
    resultTypeElement.innerText = result.title;
    resultMessageElement.innerText = result.description;
    resultImg.src = result.image; // แสดงรูปภาพตามผลลัพธ์
    resultImg.style.display = "block";
     }


//let เปลี่ยนค่าได้ ส่วน const เปลี่ยนค่าไม่ได้ (ค่าคงที่) แต่ถ้าเป็น object หรือ array ที่ประกาศด้วย const เราสามารถเปลี่ยนแปลงค่าภายใน object หรือ array นั้นได้ แต่ไม่สามารถเปลี่ยนตัวแปรให้ชี้ไปยัง object หรือ array ใหม่ได้ 



function restartQuiz() {resultDisplay.classList.add("hidden");
console.log('restartQuiz called');
quizContent.classList.add("hidden");
startScreen.classList.remove("hidden");
   
}

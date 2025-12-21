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
const whiteOverlay=document.getElementById("white-overlay");
const questionArea=document.getElementById("question-area");
const answerButtonsElement=document.getElementById("answer-buttons");
const startButton=document.getElementById("ปุ่มเริ่ม");
const resultDisplay=document.getElementById("result-display");
const resultTypeElement=document.getElementById("result-type");
const resultMessageElement=document.getElementById("result-message");
const restartBtn = document.getElementById("restart-btn");
const resultData = {
    "WD": {
        title: "WD: The Strategist 🧠",
        description: "คุณคือผู้ที่วางแผนทุกอย่างอย่างรอบคอบและมุ่งสู่ประสิทธิภาพสูงสุด!..."
    },
    "RC": {
        title: "RC: The Adventurer ✨",
        description: "คุณคือผู้ที่ชอบการผจญภัย ลงมือทำทันที และสร้างประสบการณ์ที่ไม่เหมือนใคร!..."
    },
    "WC": {
        title: "WC: The Visionary 🔮",
        description: "คุณมีทั้งการวางแผนที่ชาญฉลาดและความคิดสร้างสรรค์ที่ไร้ขีดจำกัด!..."
    },
    "RD": {
        title: "RD: The Master 🛠️",
        description: "คุณคือผู้ที่เก่งกาจในการตอบสนองอย่างรวดเร็ว และฝึกฝนทักษะจนเชี่ยวชาญเพื่อพิชิตทุกเป้าหมาย!..."
    }
};

function startGame() {startScreen.classList.add("hidden");
console.log('startGame called');
whiteOverlay.classList.add("opacity-50");
setTimeout(()=>{quizContent.classList.remove("hidden");
questionArea.classList.remove("hidden");
currentQuestionIndex=0;
personalityScores = { W: 0, R: 0, C: 0, D: 0 };
showQuestion()},500);
}
startButton.addEventListener("click",startGame);
if (restartBtn) { restartBtn.addEventListener("click", restartQuiz); }

function showQuestion() {answerButtonsElement.innerHTML="";
console.log('showQuestion', currentQuestionIndex);
const currentQuestion= questions[currentQuestionIndex];
questionElement.innerText=currentQuestion.question;
currentQuestion.answers.forEach(answer=> {
const button = document.createElement("button");
button.innerText = answer.text;
let buttoncolor= "";
let hovercolor= "";
if(answer.scoreType=== "W" || answer.scoreType=== "C"){
buttoncolor= "bg-green-500";
hovercolor= "hover:bg-green-600";}
else if(answer.scoreType==="R" ||answer.scoreType==="D"){
  buttoncolor= "bg-red-500";
  hovercolor= "hover:bg-red-600";
}
button.classList.add(
  buttoncolor,hovercolor,"text-white",
  "p-3","rounded-lg","font-semibold","transition-colors","w-full","text-left"
);
button.dataset.scoreType = answer.scoreType;
button.dataset.points = answer.points;
button.addEventListener("click",selectAnswer);
answerButtonsElement.appendChild(button);});}
function selectAnswer(e) {const selectedButton = e.target;
console.log('selectAnswer', selectedButton.dataset.scoreType, selectedButton.dataset.points);
const scoreType = selectedButton.dataset.scoreType;
const points = parseInt(selectedButton.dataset.points);
if(personalityScores[scoreType] !== undefined) {personalityScores[scoreType] += points;}
const greenClasses = ["bg-green-500","hover:bg-green-600"];
const redClasses = ["bg-red-500","hover:bg-red-600"];
let highlightColorClass = (scoreType=== "W" || scoreType==="C")?"bg-green-700" : "bg-red-700";
Array.from(answerButtonsElement.children).forEach(button => {
    button.disabled = true; 
button.classList.remove(...greenClasses,...redClasses);
if(button===selectedButton){
  button.classList.add(highlightColorClass);}
  else{button.classList.add("bg-gray-400");}
});
currentQuestionIndex++;
setTimeout(()=>{if(currentQuestionIndex < questions.length) {
showQuestion();}
else {showResult();}},500);
}

function showResult() {
  quizContent.classList.add("hidden");
  resultDisplay.classList.remove("hidden");
  let finalType = "";
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
const result=resultData[finalType];
    resultTypeElement.innerText = result.title;
    resultMessageElement.innerText = result.description;
    if (restartBtn) { restartBtn.classList.remove("hidden"); }
}
function restartQuiz() {resultDisplay.classList.add("hidden");
console.log('restartQuiz called');
quizContent.classList.add("hidden");
startScreen.classList.remove("hidden");
    if (restartBtn) { restartBtn.classList.add("hidden"); }
}

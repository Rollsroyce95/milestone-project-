
let startGame = document.querySelector("gameBegin");
let startGaming = document.getElementById("gameBegin")
let hideButton= document.getElementById("hideButton");
let gameIntro = document.getElementById("gameIntro");
let quiz= document.querySelector(".quiz");
let questions = document.querySelector("#questions");
let submitQ1 = document.querySelector("#submit1");
let submitQ2 = document.querySelector("#submit2");
let submitQ3 = document.querySelector("#submit3");
let submitQ4 = document.querySelector("#submit4");
let submitQ5 = document.querySelector("#submit5");
let optionA = document.querySelector("#optionA");
let optionB = document.querySelector("#optionB");
let optionC = document.querySelector("#optionC");
let optionD = document.querySelector("#optionD");
let qnChoice = "";
let points = 0;
let winner= 4-5;
let looser = 0-3;




let arrayNumber = 0 ;
quiz.style.display= "none";
submitQ1.style.display = "none";
submitQ2.style.display = "none";
submitQ3.style.display = "none";
submitQ4.style.display = "none";
submitQ5.style.display = "none";

const questionList =[

   "Which one is not a type of galaxy?",
   "The last layer of the suns atmosphere is the",
   "When the moon is unilluminated it is called the ______ moon.",
   "What process fuels the sun?",
   "What galaxy is made of old stars?",
]

   let answer1 = ["orbital", "spiral", "elliptical", "irregular"]
   let answer2 = ["chromosphere", "core", "corona", "prominence"]
   let answer3 = ["gibbous", "new", "full", "quarter"]
   let answer4 = ["condensation", "nuclear fusion", "photsynthesis", "precipitation"]
   let answer5 = ["lenticular", "spiral", "elliptical", "irregular"]

function option1(){
   optionA.style.color = "rgb(153, 0, 255)";
   optionB.style.color = "rgb(0, 102, 255)";
   optionC.style.color = "rgb(0, 102, 255)";
   optionD.style.color = "rgb(0, 102, 255)";
   qnChoice = "a";

}   
function option2(){
   optionA.style.color = "rgb(0, 102, 255)";
   optionB.style.color = "rgb(153, 0, 255)";
   optionC.style.color = "rgb(0, 102, 255)";
   optionD.style.color = "rgb(0, 102, 255)";
   qnChoice = "b";

}
function option3(){
   optionA.style.color = "rgb(0, 102, 255)";
   optionB.style.color = "rgb(0, 102, 255)";
   optionC.style.color = "rgb(153, 0, 255)";
   optionD.style.color = "rgb(0, 102, 255)";
   qnChoice = "c";
}   
function option4(){
   optionA.style.color = "rgb(0, 102, 255)";
   optionB.style.color = "rgb(0, 102, 255)";
   optionC.style.color = "rgb(0, 102, 255)";
   optionD.style.color = "rgb(153, 0, 255)";
   qnChoice = "d";

}

setTimeout(function beginGame(){
 (startGaming.style.display ="none");},0);


 setTimeout(function beginGame(){
 (startGaming.style.display ="block");},4400);


function start(){
 
   questions.innerHTML = questionList[0];
   quiz.style.display = "block";
   gameBegin.style.display = "none";
   submitQ1.style.display = "block";
   optionA.innerHTML = answer1[0];
   optionB.innerHTML = answer1[1];
   optionC.innerHTML = answer1[2];
   optionD.innerHTML = answer1[3];
}

 
function submit1(){
   if (qnChoice == "a"){
      points = points +=1;
   }
   arrayNumber += 1;
   questions.innerHTML = questionList[1];
   submitQ1.style.display = "none";
   submitQ2.style.display = "block";
   optionA.innerHTML = answer2[0];
   optionB.innerHTML = answer2[1];
   optionC.innerHTML = answer2[2];
   optionD.innerHTML = answer2[3];
   optionA.style.color = "rgb(0, 102, 255)";
   optionB.style.color = "rgb(0, 102, 255)";
   optionC.style.color = "rgb(0, 102, 255)";
   optionD.style.color = "rgb(0, 102, 255)";
}

function submit2(){
   if (qnChoice == "c"){
      points = points +=1;
   }
   arrayNumber += 1;
   questions.innerHTML = questionList[2];
   submitQ2.style.display = "none";
   submitQ3.style.display ="block";
   optionA.innerHTML = answer3[0];
   optionB.innerHTML = answer3[1];
   optionC.innerHTML = answer3[2];
   optionD.innerHTML = answer3[3];
   optionA.style.color = "rgb(0, 102, 255)";
   optionB.style.color = "rgb(0, 102, 255)";
   optionC.style.color = "rgb(0, 102, 255)";
   optionD.style.color = "rgb(0, 102, 255)";
 
}

function submit3(){
   if (qnChoice == "b"){
      points = points +=1;
   }
   arrayNumber += 1;
   questions.innerHTML = questionList[3];
   submitQ3.style.display = "none";
   submitQ4.style.display ="block";
   optionA.innerHTML = answer4[0];
   optionB.innerHTML = answer4[1];
   optionC.innerHTML = answer4[2];
   optionD.innerHTML = answer4[3];
   optionA.style.color = "rgb(0, 102, 255)";
   optionB.style.color = "rgb(0, 102, 255)";
   optionC.style.color = "rgb(0, 102, 255)";
   optionD.style.color = "rgb(0, 102, 255)";
 
}
function submit4(){
   if (qnChoice == "b"){
      points = points +=1;
   }
   arrayNumber += 1;
   questions.innerHTML = questionList[4];
   submitQ4.style.display = "none";
   submitQ5.style.display ="block";
   optionA.innerHTML = answer5[0];
   optionB.innerHTML = answer5[1];
   optionC.innerHTML = answer5[2];
   optionD.innerHTML = answer5[3];
   optionA.style.color = "rgb(0, 102, 255)";
   optionB.style.color = "rgb(0, 102, 255)";
   optionC.style.color = "rgb(0, 102, 255)";
   optionD.style.color = "rgb(0, 102, 255)";
  
}


function submit5(){
   if (qnChoice == "c"){
      points = points +=1;
   }
   questions.innerHTML = questionList[5];
   optionA.innerHTML = answer5[0];
   optionB.innerHTML = answer5[1];
   optionC.innerHTML = answer5[2];
   optionD.innerHTML = answer5[3];
   gameIntro.innerHTML=  points;
   if (points >= 4){
      gameIntro.innerHTML= "Winner";
      gameIntro.style.color = "green"; 
      gameIntro.style.fontSize = "200px;"
      submitQ5.style.display ="none";
         setTimeout(async function readyPredatorOne()
            {await predatorInMotion.moveWest (200);},0);

         setTimeout(async function readyPredatorOne()
            {await predatorInMotion.moveSouth (670);},1000);

         setTimeout(async function readyAlienOne()
            {await alienInMotion.flyNorth (1080);},0);

         setTimeout(async function readyAlienOne()
            {await alienInMotion.flyWest (50);},1200);

         setTimeout(async function readyAlienOne()
            {await alienInMotion.flyEast (800);},2000);

         setTimeout(async function readyShipOne()
            {await shipInMotion.flyEast (800);},2000);
   }
   if (points <= 3){
      gameIntro.innerHTML= "Loser";
      gameIntro.style.color = "red";
      gameIntro.style.fontSize = "200px"
      submitQ5.style.display ="none"; 
         setTimeout(async function readyAlienOne()
            {await alienInMotion.flyNorth (1080);},0);

         setTimeout(async function readyPredatorOne()
            {await predatorInMotion.moveWest (300);},500);

         setTimeout(async function readyAlienOne()
            {await alienInMotion.flyEast (800);},2000);

         setTimeout(async function readyShipOne()
            {await shipInMotion.flyEast (800);},2000);

         setTimeout(async function readyPredatorOne()
            {await predatorInMotion.moveEast7 (800);},2000);
        
   }

      quiz.style.display= "none";
      gameBegin.style.display = "block";
      gameIntro.style.display= "block";
      hideButton.style.display = "none";


}


  


  


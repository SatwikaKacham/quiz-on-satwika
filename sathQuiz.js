var rls = require("readline-sync");
 var name = rls.question(" please enter your name: ");
 console.log("hello!!" + name + ", let us see how much u know about SATWIKA\n");
var score=0;
var queAns = [{
   question: "what is my initial full form ? ",
   answer: "Kacham",
 },{
   question: "where did i born? ",
   answer: "Kamareddy",
 },{
   question: "my college name? ",
   answer : "Narayanamma",
 },
 {
  question: "Where do i live ",
  answer : "Banswada",
},
{
  question: "What is my birthday month ",
  answer : "October",
}]
 {
   for (i=0;i<queAns.length;i++)
   {
     var ans = rls.question(queAns[i].question);
     if( ans ===queAns[i].answer)
     {
       score++;
       console.log("right!\n");
     }
     else
     console.log("wrong!!\n");
   }

 }
 console.log("yah!! ur score is  "+ score);
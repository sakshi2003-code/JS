#Basically the summary of the video is : 

 <!-- 1) If you want that a method should be accessible or present in all objects in javascript (for ex: arrays, strings, functions,etc) then you can set your own method in the top level Object (because everything is an object in javascript) by using | Object.prototype.{method name} = function(){} | , after doing this you will have the access of your {method.name} from all objects for ex: every array that you declare, every string that you declare and so on.  -->
<!-- 
2) But lets say if you want a certain method that should be accessible only on a certain object ( for example : (this is used in the video) you want a trueLength(){this method returns the true length of an array by trimming all the whitespaces} method to accessed on all String declarations , then you can be like | String.prototype.trueLength = function(){ code that does trimming and return length } | and this will be accessible on all strings .  -->
<!-- 
3) this keyword in javascript refers to the current context of who is calling . matlab this boleto jisne bulaya . example: if you say  | "hemant   ".trueLength() | then how will the trueLength() method knows that on whom it have to perform . so we use this in the trueLength() function definition so it will automatically take the context of by whom the method is callled , boleto jisne bulaya uska kaam hoga.....

if any one feels that i have included some wrong info in this comment then feel free to reply about the same. -->
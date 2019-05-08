var story = {
  "start": "#phrases#",
  "adj": ["amazing", "fantastic", "kind", "great", "compassionate", "considerate", "generous", "delightful", "reliable", "admirable", "sincere", "loyal", "respectful", "brilliant", "encouraging", "funny", "crazy", "serious", "horrible", "awful", "terrible", "cool", "nice", "friendly"],
  "phrases": ["Thank you for being so #adj#!", "Few are as #adj# as you!", "I appreciate how #adj# you are!", "You are #adj#!"]
}

var storyPtTwo = {
  "paragraph": "#structure#",
  "paragraphtwo": "#structuretwo#",
  "structuretwo": ["May #things# that brings you #noun# be #contentadj# this #time#. #dothis# #verb# #adverb# #time2#!", "Hope your #time# is filled with #noun#! #dothis# #verb# #time2#!"],
  "structure": ["Hope #people# are #state#. Are you #state#? I sincerely hope so!", "I pray #people# are #verb#ing #adverb#. I also hope for your #noun#, and that you are #verb#ing #adverb#!"],
  "state": ["having #adj.a# #time#", "#verb#ing #adverb#", "#adj#"],
  "verb": ["do", "suffer", "sing", "eat", "go", "cry", "exist", "dream", "learn", "fail", "succeed" ,"sleep", "laugh", "hurt", "heal"],
  "adverb": ["well", "horribly", "intensely", "majestically", "oddly", "painfully", "optimistically", "wonderfully", "beautifully", "strongly", "pleasantly", "badly", "happily", "sadly", "seriously", "fancily", "sweetly", "cheerfully", "silently", "loudly", "greatly", "effiently"],
  "adj": ["amazing", "great", "fanastic", "good", "pleasant", "jolly", "great", "delightful", "cool", "lovely", "efficient", "horrible", "bad", "unpleasant", "sub-par", "unlucky", "crazy", "funny", "wonderful", "rough", "adequate", "okay", "nice", "fun"],
  "people": ["your friends", "your enemies", "you", "you and your friends"],
  "time": ["night", "evening", "morning", "afternoon", "day"],
  "time2": ["tonight", "today", "tomorrow", "this year", "every day", "every night", "every year"],
  "noun": ["happiness", "contempt", "dissapointment", "joy", "contentment", "misfortune", "fortune"],
  "things": ["everything", "nothing", "the thing", "something"],
  "contentadj": ["unavailable", "prevalent", "available", "destroyed", "enriched", "ubiquitous", "around", "near", "far away", "created", "taken away"],
  "dothis": ["Don't forget to", "Remember to", "Always", "Do not", "Please", "Do NOT", "Don't"]
}

var storyEnd = {
  "end": "#endslates#!",
  "endslates": ["Good Bye", "Farewell", "Peace Out", "Thinking of You", "Bye"]
}

var grammarOne;
var grammarTwo;
var grammarThree;

function showStory() {

  grammarOne = tracery.createGrammar(story);
  grammarTwo = tracery.createGrammar(storyPtTwo);
  grammarThree = tracery.createGrammar(storyEnd);

  var result = grammarOne.flatten(story.start);
  var resultTwo = grammarTwo.flatten(storyPtTwo.paragraph);
  var resultThree = grammarThree.flatten(storyEnd.end);
  var resultFour = grammarTwo.flatten(storyPtTwo.paragraphtwo);
//  console.log(resultFour);
  document.getElementById("story").innerHTML = result;
  document.getElementById("storyPtTwo").innerHTML = resultTwo;
  document.getElementById("storyPtTwo").innerHTML += "<br>" + resultFour;
  document.getElementById("storyEnd").innerHTML = resultThree;
}

showStory();

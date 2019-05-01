var story = {
  "start": "This part of the page will have #adj# content. This content will soon be #adj# and #adj#",
  "adj": ["good", "bad", "great", "terrible", "interesting"],
}

var grammarOne;

function showStory() {

  grammarOne = tracery.createGrammar(story);

  var result = grammarOne.flatten(story.start);
  console.log(result);
  document.getElementById("story").innerHTML = result;
}

showStory();

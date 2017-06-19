/**
 * Created by Stoyan on 7.6.2017 г..
 */
function countOccurence (text, word) {
    text = text.toLowerCase();
    word = word.toLowerCase();
    let regex = new RegExp('[a-z0-9_\-]*' + word + '[a-z0-9_\-]+|[a-z0-9_\-]+' + word + '[a-z0-9_\-]+|[a-z0-9_\-]+' + word + '[a-z0-9_\-]?');
    let matches = text.match(regex);

    let index = 0;
    let count = -1;

  while (index > -1) {
      index = text.indexOf(word);
      text = text.replace(word, '');
      count++;
  }
  if (matches != null) {
      count -= matches.length;
  }


  return count;
}

console.log(countOccurence( 'How do you plan on achieving that? How? How can you even think of that?', 'how'));

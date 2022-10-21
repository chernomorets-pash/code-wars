// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!
// Here's the deal:
// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.

function generateHashtag (str) {
  let splitter = str.split(' ');
  const newArr = splitter.map(element => {
    return element.charAt(0).toUpperCase() + element.slice(1)
  })
  let res = '#' + newArr.join('');
//   return res.length <= 140 && str.length > 1 && str.trim().length != 0? res : false
  return res.length <= 140 && str.length > 1 && str.trim().length != 0? console.log(res) : console.log('FALSE')
}

generateHashtag("Hello there thanks for trying my Kata");
generateHashtag("    Hello     World        ");
generateHashtag("");


//  Best Practices :


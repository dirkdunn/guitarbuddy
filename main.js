const checksum = require('checksum'),
  fs = require('fs'),
  stringSimilarity = require('string-similarity');

function getString(note){
    return `strings/${note}.mp3`
}

fs.readFile(getString('D'), (err,data) => {
  var responseChecksum = checksum(data.toString('utf8'));
  var audioCompare = checksum(fs.readFileSync(getString('G')).toString('utf8'));

  var similarity = stringSimilarity.compareTwoStrings( audioCompare, responseChecksum );

  console.log(similarity)

  // console.log(checksum(data.toString('utf8')));
  // console.log('audioCompare: ', audioCompare);
})

/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(data = []) {
  // your implementation
  var count = 0;
  
  for (var i = 0; i < data.length; i++) {
    var firstSpichone = data[i] - 1;
    if(firstSpichone === i) continue;

    var secondSpichone = data[firstSpichone] - 1;
    if(secondSpichone === firstSpichone) continue;

    var thirdSpichone = data[secondSpichone] - 1;
    if(thirdSpichone === secondSpichone) continue;

    if(thirdSpichone === i) count++;
  }
  return count/3;
};

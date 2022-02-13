function MarchingDoubler(len, numOfSeries) {
    var orgainList = [];
    var finalResult = [];
    for (var i = 0; i < len; i++) {
        if (i == 0) {
            orgainList.push(1);
        }
        else {
            orgainList.push(i);
        }
    }
    for (var z = 0; z < orgainList.length - 1; z++) {
        if (z != 0) {
            if (finalResult.length === 0) {
                finalResult = recursive(orgainList, z);
                numOfSeries = numOfSeries - orgainList.length;
            }
            else {
                finalResult = recursive(finalResult, z);
                numOfSeries = numOfSeries - orgainList.length;
            }
        }
        else {
            console.log(orgainList);
            numOfSeries = numOfSeries - orgainList.length;
        }
    }
    console.log(orgainList);
    numOfSeries = numOfSeries - orgainList.length;
    console.log(numOfSeries);
}
function recursive(tempList, z) {
    var tempresult = [];
    for (var n = 0; n < tempList.length; n++) {
        if (n === z) {
            tempresult.push(tempList[n] + 1);
        }
        else {
            tempresult.push(tempList[n]);
        }
    }
    console.log(tempresult);
    return tempresult;
}
var result = MarchingDoubler(4, 16);

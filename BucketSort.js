function insertionSort(array){
    var length = array.length;

    for(var i = 1; i < length; i++) {
        var temp = array [i];
        for(var j = i - 1; j >= 0 && array[j] > temp; j--){
            array[j+1] = array[j];
        }
        array[j+1] = temp;
    }

    return array;
}


function bucketSort(highest, lowest, array, bucketSize){

    bucketSize = bucketSize || 5;
    if(array.length === 0){
        return array;
    }

    var bucketCount = Math.floor((highest - lowest) / bucketSize) + 1;
    var allBuckets = new Array(bucketCount);

    for(let i = 0; i < allBuckets.length; i++){
        allBuckets[i] = [];
    }

    array.forEach(function(currVal) {
        allBuckets[Math.floor((currVal - lowest) / bucketSize)].push(currVal);
    });

    array.length = 0;

    allBuckets.forEach(function(bucket) {
        insertionSort(bucket);
        bucket.forEach(function(element){
            array.push(element)
        });
    });

    return array;
}

let dataset = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5]


console.log(bucketSort(98, 1, dataset));
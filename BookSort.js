function swap(array, i, j) {
    const tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
};


function alphabetize(arr, start = 0, end = arr.length){
    if(start >= end) {
        return arr;
    }
    const middle = partition(arr, start, end);
    arr = alphabetize(arr, start, middle);
    arr = alphabetize(arr, middle + 1, end);
    return arr;
}

function partition(arr, start, end){
    const pivot = arr[end - 1];
    let j = start;
    for (let i = start; i < end - 1; i++){
        
        if (arr[i].charAt(0) <= pivot.charAt(0)){
            swap(arr, i, j);
            j++;
        }
    }
    swap(arr, end-1, j);
    return j;
};



let books = ['yellow dog', 'tiger cheese', 'ariana grande', 'sex is fire', 'aligators']

console.log(alphabetize(books));
/* runs test to see if expected argument is === to value returned by function2test argument */
function myFunctionTest(expected, function2test) {
    let result = function2test();

    if (Array.isArray(expected)) {
        expected = expected.toString();
    }
    if (Array.isArray(result)) {
        result = result.toString();
    }
    if (expected === result) {
        return "TEST SUCCEEDED";
    } else {
        return (
        "TEST FAILED.  Expected " + expected + " found " + function2test()
        );
    }
}

/* 2. Find the greater number of two */
function max(num1, num2) {
    return num1 > num2 ? num1 : num2;
}

console.log("Expected result output of max(1, 3) is 3 - " + myFunctionTest(3, function() {
    return max(1,3);
}));

/* 3. Find the greatest number of three*/
function maxThree(num1, num2, num3) {
    let max = num1 > num2 ? num1 : num2;;
    
    if (max > num3) {
        return max;
    } else {
        return num3;
    }
}
console.log("Expected result output of maxThree(1, 2, 3) is 3 - " + myFunctionTest(3, function() {
    return maxThree(1, 2, 3);
}));

/* 4. Check if char is a vowel*/
function isVowel(c) {
    const vowel = ['A', 'E', 'I', 'O', 'U'];
    if (vowel.indexOf(c.toUpperCase()) > -1) {
        return true;
    }
    return false;
}
console.log("Expected result output of isVowel('a') is true - " + myFunctionTest(true, function() {
    return isVowel('a');
}));

/* 5.1 Sum of array of numbers*/
function sum(numArr) {
    let sum = 0;
    for (let i = 0; i < numArr.length; i++) {
        sum += parseInt(numArr[i]);
    }
    return sum;

}
console.log("Expected result output of sum([1, 2, 3, 4]) is 10 - " + myFunctionTest(10, function(){
    return sum([1, 2, 3, 4]);
}));

/* 5.2 multiply of array of numbers */
function multiply(numArr) {
    let result = 1;
    for (let i = 0; i < numArr.length; i++) {
        result = result * parseInt(numArr[i]);
    }
    return result;
}
console.log("Expected result output of multiply([1, 2, 3, 4]) is 24 - " + myFunctionTest(24, function(){
    return multiply([1, 2, 3, 4]);
}));

/* 6. The reversal of a string*/
function reverse(str) {
    let result = '';
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    return result;
}
console.log("Expected result output of reverse('jag testar') is 'ratset gaj' - "  + myFunctionTest('ratset gaj', function(){
    return reverse('jag testar');
}));

/* 7. Find the longest word */
function findLongestWord(strArr) {
    let longest = strArr[0];
    for (let i = 1; i < strArr.length; i++){
        if (strArr[i].length > longest.length) {
            longest = strArr[i];
        }
    }
    return longest;
} 
console.log("Expected result output of findLongestWord(['Huu', 'Tam', 'Nguyen']) is 'Nguyen' - " + myFunctionTest('Nguyen', function() {
    return findLongestWord(['Huu', 'Tam', 'Nguyen']);
}));

/* 8. Find the words that have length greater than a given number */
function filterLongWords(strArr, num) {
    let result = [];
    let count = 0;
    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i].length > num) {
            result[count] = strArr[i];
            count++;
        }
    }
    return result;
}

console.log("Expected result output of filterLongWOrds(['Huu', 'Tam', 'Nguyen', '30'], 2) is ['Huu', 'Tam', 'Nguyen'] - " + myFunctionTest(['Huu', 'Tam', 'Nguyen'], function() {
    return filterLongWords(['Huu', 'Tam', 'Nguyen', '30'], 2);
}));

const a = [1,3,5,3,3];
/* 9.1 multiply each element by 10*/
function multiplyBy10() {
    return a.map(function(elem, i, array) {
        return elem * 10;
    });
}
console.log("Expected result output of multiplyBy10() is [10, 30, 50, 30, 30] - " + myFunctionTest([10, 30, 50, 30, 30], function() {
    return multiplyBy10();
}));

/* 9.2 return array with all elements equal to 3*/
function elemEqual3() {
    return a.filter(function(elem, i, array) {
        return elem == 3;
    });
}
console.log("Expected result output of elemEqual3() is [10, 20, 50, 30, 30] - " + myFunctionTest([3, 3, 3], function() {
    return elemEqual3();
}));

/* 9.3 return the product of all elements*/
function productOfElems() {
    let preValue = 1;
    return a.reduce(function(preValue, elem, i, array) {
        return preValue * elem;
    });
}
console.log("Expected result output of productOfElems() is 135 - " + myFunctionTest(135, function() {
    return productOfElems();
}));

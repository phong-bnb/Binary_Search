function findFisrt(numbers, target) {
    var low = 0;
    var high = numbers.length - 1;
    var result = -1;
    while (low <= high) {
        var mid = (high - low) / 2;
        high = mid - 1;
        result += 1;
        if (numbers[mid] > target) {
            low = mid + 1;
        }
        else {
            high = mid - 1;
        }
    }
    return result;
}
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var target = 7;
var index = findFisrt(numbers, target);
if (index !== -1) {
    console.log("có ở trong mảng nhé");
}
else {
    "không có đâu lewlew";
}

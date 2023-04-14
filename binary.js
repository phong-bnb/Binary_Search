var array = [1, 2, 3, 4, 5];
var left = 0;
var right = array.length - 1;
var needer = 2;
while (left < right) {
    var mid = Math.floor(right - left) / 2;
    if (array[mid] === needer) {
        break;
    }
    else if (array[mid] > needer) {
        right = mid - 1;
        console.log(array[mid]);
        console.log(right + "right");
    }
    else {
        left = mid + 1;
        console.log(left + "left");
    }
    console.log("x tại vị trí mid:" + mid);
    break;
}

const array = [1,2,3,4,5]

let left = 0
let right =  array.length -1
const needer = 2
while (left<right){
    const mid = Math.floor(right-left)/2
    if (array[mid]===needer){
        break;
    }else if (array[mid]>needer){
        right = mid -1
        console.log(array[mid])
        console.log(right+"right")
    }else {
        left = mid +1
        console.log(left+"left")
    }

    console.log("x tại vị trí mid:"+mid)
    break;
}

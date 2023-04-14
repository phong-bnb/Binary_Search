function findFisrt(numbers: number[],target: number){
    let low = 0
    let high = numbers.length-1
    let result = -1
    while (low <=high){
        let mid = (high-low)/2
        high = mid -1
        result +=1
        if(numbers[mid]>target){
            low = mid +1
        }else{
            high = mid -1
        }
    }
    return result
}
let numbers = [1,2,3,4,5,6,7,8,9]
let target = 7
let index = findFisrt(numbers,target)
if (index!==-1){
    console.log("có ở trong mảng nhé")

}else {
    "không có đâu lewlew"
}
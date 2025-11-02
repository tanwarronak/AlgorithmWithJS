// recursive way of binary search
function BinarySearch1(arr,target,start,end){
    let left = start;
    let right = end;

    // base condition
    if(left>right) return -1;

    const mid = Math.floor((left+right)/2);
    if(arr[mid]===target){
        return mid;
    }else if(arr[mid]<target){
        return BinarySearch1(arr,target,mid+1,right);
    }else{
        return BinarySearch1(arr,target,start,mid-1);
    }
}

// iterative way
function BinarySearch2(arr,target,start,end){
    let left = start;
    let right = end;

    while(left<=right){
        const mid = Math.floor((left+right)/2);
        if(arr[mid]===target){
            return mid;
        }else if(arr[mid]<target){
            left = mid+1;
        }else{
            right = mid-1;
        }

    }
    return -1;
}

const arr = [12,23,34,54,657,76587,436123,12341324];
const target = 233;
const start = 0;
const end = arr.length-1;

const result = BinarySearch2(arr,target,start,end);
console.log(result!==-1?`found at index ${result}`:`element not found`);



var twoSum = function(nums, target) {
    const solution = [];
    for(let i=0;i<nums.length;i++){
        if(i>0){
            const numsToCompare = nums.filter((value,index)=>index !==i);
            console.log(numsToCompare)
            for(j=0;j<numsToCompare.length;j++){
                if(target===nums[i]+numsToCompare[j]){
                    return [i,nums.indexOf(numsToCompare[j])];
                };
            }
        }
    }
};
var twoSum = function(nums, target) {
    const solution = [];
    for(let i=0;i<nums.length;i++){
            const numsToCompare = nums.filter((value,index)=>index !==i);
            for(j=0;j<numsToCompare.length;j++){
                if(target===nums[i]+numsToCompare[j])
                    return [i,nums.lastIndexOf(numsToCompare[j])];
                };
        }
};

/* console.log(twoSum([1,2,3,4,5],5));
console.log(twoSum([2,7,11,15],9));*/
console.log(twoSum([3,3],6)); 
/* console.log(twoSum([3,2,4],6)); */
/* console.log(twoSum([2,5,5,11],10)); */
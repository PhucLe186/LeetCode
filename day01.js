let nums=[2,7,11,15];
let target=20;

console.log(twoSum(nums, target))
// function twoSum(nums, target) {
//     let len=nums.length;
//     for(var i=0;i<len; i++) {
//         for(var j=i+1; j<len; j++) {
//             if( nums[i]+nums[j]===target) {
//                 return [i,j]
//             }
//         }
//     }
//     return []
// }
 function twoSum(nums, target) {
    let map={};
    let len=nums.length;
    for(var i=0; i<len; i++) {

        let result=target-nums[i];
        if(map[result]!==undefined) {
            return [map[result],i]
        }
        map[nums[i]]=i
    }
return []
}
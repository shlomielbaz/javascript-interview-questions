var findMedianSortedArrays = function(nums1, nums2) {
    const merged = [];
    let i = 0;
    let j = 0;
    let idx = 0;

    do {
        if(nums1[i] > nums2[j]) {
            merged.push(nums2[j]);
            j++;
        }
        else if(nums1[i] == nums2[j]) {
            merged.push(nums1[i]);
            merged.push(nums2[j]);
            i++;
            j++;
        }
        else {
            merged.push(nums1[i]);
            i++;
        }
    }
    while (i < nums1.length && j < nums2.length);

    while(i < nums1.length) {
        merged.push(nums1[i]);
        i++
    }
    while(j < nums2.length) {
        merged.push(nums2[j]);
        j++
    }

    const middle = parseInt(merged.length / 2);

    if(middle % 2 == 0) {
        console.log('EVEN', middle, (merged[middle-1] + merged[middle]) / 2)
    }
    else {
        console.log('ODD', middle, merged[middle])
    }

    return merged;
};


const nums1 = [1,2,3,4,5,6,7,8]
const nums2 = [1,2,3,4,5]

console.log(findMedianSortedArrays(nums1, nums2))



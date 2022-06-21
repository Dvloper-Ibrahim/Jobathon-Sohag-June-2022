/* JavaScript Task 2 */

function solution2(N) {
    if(N >= 1 && N <= 100) {
        for(let i = 0; i < (N - 1); i++) {
            console.log("L");
        }
        console.log("L".repeat(N))
    }else {
        console.log("Out Of Range");
    }
}

// Test
solution2(6);
/* JavaScript Task 1 */

function solution(A, B, X, Y) {
    const N = A.length;
    for(let i = 0; i < N; i++) {
        // Calculating the distance between tap & icon even if it's diagonal
        let check = Math.sqrt(Math.pow((X - A[i]), 2) + Math.pow((Y - B[i]), 2));

        // First checking the range of tap & icon 
        if (A[i] <= 1919 && A[i] >= 0 && B[i] <= 1079 && B[i] >= 0) {
            if(X >= 0 && X <= 1919 && Y >= 0 && Y <= 1079) {
                if(check <= 20) {
                    return i;
                }
            }else {
                console.log("Out Of Screen");
            }
        }else {
            return undefined;
        }
    }
    return -1;
}

// Test
let a = [100, 200, 100];
let b = [50, 100, 100];
let x = 100;
let y = 100;

console.log(solution(a,b,x,y));
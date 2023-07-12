/**
 * From a Chipotle interview.
 * encodeStr algo was also given in this interview (aaabbcdd => a3b2cd2).
 *
 * It ain't much, but it's honest work. A worker who measures water level fluctuations in a river is asked to find the
 * largest fluctuation in water levels during a day, but only for rises in water levels.
 */

const riverLevels1 = [15, 17, 30];
const expected1 = 15; // 30 - 15 = 15

const riverLevels2 = [15, 17, 30, 14, 5, 16, 25, 9, 3];
const expected2 = 20; // 25 - 5 = 20

const riverLevels3 = [15, 17, 30, 20, 50, 16, 25, 9, 3];
const expected3 = 30; // 50 - 20 = 30

const riverLevels4 = [21, 18, 10, 11, 14, 9, 5, 13, 15, 7, 1, 6, 12, 4];
const expected4 = 11; // 12 - 1 = 11

const riverLevels5 = [1, 5];
const expected5 = 4;

const riverLevels6 = [5, 1];
const expected6 = -1;

const riverLevels7 = [9, 7, 7, 7];
const expected7 = -1;

const riverLevels8 = [42];
const expected8 = -1;

/**
 * It ain't much, but it's honest work. A worker who measures water level fluctuations in a river is asked to find the
 * largest fluctuation in water levels during a day, but only for rises in water levels.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} waterLevels Non-empty .
 * @returns {number} The max water-level rise amount or -1 if none.
 */
//! *THIS 1st SOLUTION IS WRONG*
function measureWaterLevels(waterLevels) {

  //declare starting point for maxRise
  let maxRise = -1;
  //declare currentWaterLevel starting at index 0
  let currentWaterLevel = waterLevels[0];

  //iterate through each index of water level
  for (let i = 1; i < waterLevels.length; i++) {
    //if waterLevels is greater then current then...
    if (waterLevels[i] > currentWaterLevel) {
      //find the difference
      let rise = waterLevels[i] - currentWaterLevel;
      //if rise is greater than maxRise, then determine new maxRise
      if (rise > maxRise) {
        maxRise = Math.max(maxRise, rise);
        // maxRise = rise;
      }
    } else {
      currrentLevel = waterLevels[i];
    }
}
return maxRise;
}



console.log(measureWaterLevels(riverLevels1));
console.log("==============================\n");
console.log(measureWaterLevels(riverLevels2));
console.log("==============================\n");
console.log(measureWaterLevels(riverLevels3));
console.log("==============================\n");
console.log(measureWaterLevels(riverLevels4));
console.log("==============================\n");
console.log(measureWaterLevels(riverLevels5));
console.log("==============================\n");
console.log(measureWaterLevels(riverLevels6));
console.log("==============================\n");
console.log(measureWaterLevels(riverLevels7));
console.log("==============================\n");
console.log(measureWaterLevels(riverLevels8));
console.log("==============================\n");

/**********/
//! Alt solution:
function measureWaterLevels2(waterLevels) {
    if (waterLevels.length <= 1) return -1
    let maxIncrease = -1;
    let start = waterLevels[0];
    for (let i = 1; i < waterLevels.length; i++) {
        if (waterLevels[i] < waterLevels[i-1]){
            start = waterLevels[i];
        } else if (waterLevels[i] > start){
            let rise = waterLevels[i] - start;
            if (rise > maxIncrease) maxIncrease = rise
        }
    }
    return maxIncrease
}



console.log("************ALT SOLUTION****************\n");
console.log(measureWaterLevels2(riverLevels1));
console.log("==============================\n");
console.log(measureWaterLevels2(riverLevels2));
console.log("==============================\n");
console.log(measureWaterLevels2(riverLevels3));
console.log("==============================\n");
console.log(measureWaterLevels2(riverLevels4));
console.log("==============================\n");
console.log(measureWaterLevels2(riverLevels5));
console.log("==============================\n");
console.log(measureWaterLevels2(riverLevels6));
console.log("==============================\n");
console.log(measureWaterLevels2(riverLevels7));
console.log("==============================\n");
console.log(measureWaterLevels2(riverLevels8));
console.log("==============================\n");

/*****************************************************************************/

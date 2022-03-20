const arr = [2, 5, 5, 9];
let coes = false; // Совпадения
let objMass1;
let objMass2;
let nextMass = 0;
for (let i = 0; i < arr.length; i++) {
    objMass1 = arr[i];
//    console.log("Проверка " + objMass1);
    nextMass = nextMass + 1;
    for (let i = nextMass; i < arr.length; i++) {
        objMass2 = arr[i];
//        console.log(objMass2);
        if (objMass1 === objMass2) {
            coes = true
        }
    }
}
console.log(coes);

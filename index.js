function probandoSomeTrue() {
    const arr = [1, 2, 3, 4];
    const result = arr.some(x => x > 3)
    console.log(`resultado Some (true): ${result}`)
}
probandoSomeTrue()


function probandoSomeFalse() {
    const arr = [1, 2, 3, 4];
    const result = arr.some(x => x < 1)
    console.log(`resultado Some (false): ${result}`)
}
probandoSomeFalse()


function probandoMap () {
    const arr = [1, 2, 3, 4];
    const result = arr.map(x => x * 4)
    console.log(`resultado map: ${result}`)
}
probandoMap()


function probandoFindIndex() {
    const arr = [1, 2, 3, 4];
    const result = arr.findIndex(x => x == 4)
    console.log(`resultado FindIndex: ${result}`)
}
probandoFindIndex()


function probandoFilter() {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8];
    const result = arr.filter(x => x >= 2 )
    console.log(`resultado Filter: ${result}`)
}
probandoFilter()


function probandoEveryTrue() {
    const arr = [4, 5, 6, 7];
    const result = arr.every(x => x > 2 )
    console.log(`resultado Every (true): ${result}`)
}
probandoEveryTrue()


function probandoEveryFalse() {
    const arr = [1, 2, 3, 4];
    const result = arr.every(x => x > 2 )
    console.log(`resultado Every (false): ${result}`)
}
probandoEveryFalse()






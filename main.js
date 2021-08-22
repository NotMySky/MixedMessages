//This is a test with comments!
let games = ['League of Legends', 'Dota 2', 'Pokemon: Sword and Shield'];
let characters = ['Vi', 'Lux', 'Morgana', 'Invoker', 'Shadow Fiend', 'Sun Wokong', 'Squirtle', 'Charmander', 'Bulbasaur'];
let quotes = ['A little smash and grab.', 'Come on! Resist arrest already!', 'Vi, hah, stands for violence!',
'Take courage in the light!', 'For justice, and all things bright!', 'Never deny who you are.',
'I am bound, but I will not break.', 'Whether by chains or by wings, we are all bound.', 'Some call me evil. Shall I prove them right?',
'Fight me!', 'Enlightenment is mine!', 'Orbs light my path.',
'I\'ll take that soul if you\'re not using it.', 'Come along, little soul.', 'Another soul? Don\'t mind if I do', 
'The King has arrived.', 'Equal of Heaven, greater than gods.', 'Oh, there\'ll be stories about this fight.',
'squirtle, squirtle.', 'char, charmander.', 'Bulbasaur!'];


const randIndex = (arr) => {
    return Math.floor(Math.random() * arr.length-1)
}

const createMessage = (arr1, arr2, arr3) => {
    let randIndex1 = randIndex(arr1);
    let randIndex2 = randIndex(arr2);
    let randIndex3 = randIndex(arr3);

    console.log(`In the words of the great ${arr2[randINdex2]} from the ${arr1[randIndex1]} universe, ${arr3[randIndex3]}`)
}
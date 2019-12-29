


export const getRamdom = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
};


export default (max) => {
    const tirage = [];
    for(let i = 0; i < 4; i++){
        let nbRandom = getRamdom(max);
        while(tirage.includes(nbRandom)){
            nbRandom = getRamdom()
        }
        tirage.push(nbRandom);
    }
    return tirage
};
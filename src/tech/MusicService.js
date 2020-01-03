
const musics = {
    'intro': 'http://23.237.126.42/ost/pokemon-original-game-soundtrack/qukirqux/142%20-%20the%20final%20road.mp3',
    'wildVsPlayer': 'http://23.237.126.42/ost/pokemon-original-game-soundtrack/igkijttj/107%20-%20battle%20%28vs%20wild%20pokemon%29.mp3',
    'trainerVsPlayer': 'http://23.237.126.42/ost/pokemon-original-game-soundtrack/mckmelhq/115%20-%20battle%20%28vs%20trainer%29.mp3',
    'tutorial': 'http://23.237.126.42/ost/pokemon-original-game-soundtrack/wpujuzto/103%20-%20professor%20oak.mp3',
    'victoryVsTrainer': 'http://23.237.126.42/ost/pokemon-original-game-soundtrack/qxjdgirm/116%20-%20victory%20%28vs%20trainer%29.mp3',
    'victoryVsPokemon': 'http://23.237.126.42/ost/pokemon-original-game-soundtrack/acsnqdjp/108%20-%20victory%20%28vs%20wild%20pokemon%29.mp3',
    'healPokemonCenter' : 'http://23.237.126.42/ost/pokemon-original-game-soundtrack/faayhybd/111%20-%20pokemon%20recovery.mp3',
    'pokemonCenterMusic' : 'http://23.237.126.42/ost/pokemon-original-game-soundtrack/covgwqib/110%20-%20pokemon%20center.mp3'
};

let audioPlayer = new Audio();
let muted = true;
let currentlyPlaying = null;

export default {
    async play(id){
        if (currentlyPlaying !== id) {
            currentlyPlaying = id;
            audioPlayer.pause();
            audioPlayer = new Audio(musics[id]);
            audioPlayer.volume = muted ? 0 : 1;
            audioPlayer.addEventListener('canplaythrough', () => {
                audioPlayer.play();
            });
        } else if(audioPlayer.paused) {
            audioPlayer.play();
        }
    },

    unmute() {
        muted = false;
        audioPlayer.volume = 1;
    },

    mute() {
        muted = true;
        audioPlayer.volume = 0;
    },

    pause(){
        audioPlayer.pause();
    },

    isMuted() {
        return muted;
    }
}
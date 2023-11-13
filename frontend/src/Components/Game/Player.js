class Player  {

    static DEFAULT_GOLDS = 100;
    
    golds;

    constructor(){
        this.golds = Player.DEFAULT_GOLDS;
    }    

    addingGolds(amount) {
        this.golds += amount;
        return this.golds;
    }
}

export default Player;
class AppController {

    static constructor() {
        throw Error('Essa classe não pode ser instanciada');
    }

    static start() {
        this._playerController = new PlayerController();
        this._menuController = new MenuController();
        this._matrixController = new MatrixController();
        this._playerController.setEvents();
        this._menuController.setEvents();
        this._matrixController.setEvents();
    }

    static get playerController() {
        return this._playerController;
    }

    static set currentPlayer(player) {
        this._currentPlayer = player;
    }

    static get currentPlayer() {
        return this._currentPlayer;
    }

    static switchPlayer() {
        if(this._playerController.player1.isFlagged()) {
            this._playerController.player1.unflag();
            this._playerController.player2.flag();
            this.currentPlayer = this._playerController.player2;
        } else {
            this._playerController.player1.flag();
            this._playerController.player2.unflag();
            this.currentPlayer = this._playerController.player1;
        }
    }

}
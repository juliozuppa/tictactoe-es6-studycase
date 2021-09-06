class AppController {

    static constructor() {
        throw Error('Essa classe não pode ser instanciada');
    }

    static start() {
        this._combinations = [
            [1, 2, 3], [4, 5, 6], [7, 8, 9],
            [1, 4, 7], [2, 5, 8], [3, 6, 9],
            [1, 5, 9], [3, 5, 7],
        ];
        this._playerController = new PlayerController();
        this._menuController = new MenuController();
        this._matrixController = new MatrixController();
        this._menuController.setEvents();
        this._playerController.setEvents();
        this._matrixController.setEvents();
        this.newGame();
    }

    static get currentPlayer() {
        return this._currentPlayer;
    }

    static addPositionToCurrentPlayer(position) {
        this._currentPlayer.addPosition(position);
    }

    static switchPlayer() {
        if (this._playerController.player1.isFlagged()) {
            this._playerController.player1.unflag();
            this._playerController.player2.flag();
            this._currentPlayer = this._playerController.player2;
        } else if (this._playerController.player2.isFlagged()) {
            this._playerController.player1.flag();
            this._playerController.player2.unflag();
            this._currentPlayer = this._playerController.player1;
        } else {
            if ((Math.floor(Math.random() * 10) + 1) % 2 === 0) {
                this._playerController.player1.flag();
                this._currentPlayer = this._playerController.player1;
            } else {
                this._playerController.player2.flag();
                this._currentPlayer = this._playerController.player2;
            }
        }
    }

    static resetPlayerScores() {
        this._playerController.player1.resetScore();
        this._playerController.player2.resetScore();
    }

    static checkWinner() {
        let that = this;
        let response = {
            success: false,
            player: null,
            positions: null
        };
        $.each(this._combinations, function (idx, combination) {
            if (combination.every(position => that._currentPlayer.positions.includes(position))) {
                response.success = true;
                response.player = that._currentPlayer;
                response.positions = that._combinations[idx];
                return false;
            }
        });
        return response;
    }

    static newGame() {
        this._playerController.player1.clearPositions();
        this._playerController.player2.clearPositions();
        this._endGame = false;
        //this.switchPlayer();
    }

    static endGame() {
        this.clearFlags();
        this._endGame = true;
    }

    static isEndGame() {
        return this._endGame;
    }

    static clearFlags() {
        this._playerController.player1.unflag();
        this._playerController.player2.unflag();
    }

}
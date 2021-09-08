class GameController {

    constructor() {

        this._combinations = [
            [1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]
        ];

        this._currentPlayer = null;
        this._player1 = new PlayerModel('p1', 'x');
        this._player2 = new PlayerModel('p2', 'circle');
        this._players = [this._player1, this._player2];
        this._matrix = new MatrixModel();
        this._menu = new MenuModel();

        this._player1View = new PlayerView(this._player1);
        this._player2View = new PlayerView(this._player2);
        this._matrixView = new MatrixView(this._matrix);

        this._setMatrixClickEvent();
    }

    /**
     *
     * @returns PlayerModel|null
     */
    get currentPlayer() {
        return this._currentPlayer;
    }

    newGame() {
        this._step = 0;
        this._isEndGame = false;
        this._player1.clearPositions();
        this._player2.clearPositions();
        this._matrixView.resetMatrix();
        this._player2View.clearWinnerMessage();
        this.switchPlayer();
    }

    endGame() {
        this._step = 0;
        this._isEndGame = true;
        this._player1View.removeFlag();
        this._player2View.removeFlag();
    }

    switchPlayer() {

        if (!this._player1View.isFlagged() && !this._player2View.isFlagged()) {
            if ((Math.floor(Math.random() * 100) + 1) % 2) {
                this._player1View.flag();
                this._currentPlayer = this._player1;
            } else {
                this._player2View.flag();
                this._currentPlayer = this._player2;
            }
        } else if (this._player1View.isFlagged()) {

            this._player1View.removeFlag();
            this._player2View.flag();
            this._currentPlayer = this._player2;

        } else if (this._player2View.isFlagged()) {

            this._player2View.removeFlag();
            this._player1View.flag();
            this._currentPlayer = this._player1;
        }
    }

    checkWinner() {
        let that = this;
        let response = {success: false, player: null, positions: []};
        $.each(this._combinations, function (idx, combination) {
            if (combination.every(position => that._currentPlayer.positions.includes(position))) {
                response.success = true;
                response.player = that._currentPlayer;
                response.positions.push(...that._combinations[idx]);
            }
        });
        return response;
    }

    isEndGame() {
        return this._isEndGame;
    }

    resetPlayerScores() {
        swal({
            title: "Você tem certeza?",
            text: "Confirma a limpeza das pontuações?",
            icon: "warning",
            buttons: ["Não", "Sim"],
            dangerMode: true,
            closeOnClickOutside: false
        }).then((yes) => {
            if (yes) {
                this._player1.resetScore();
                this._player2.resetScore();
                this.newGame();
            }
        });
    }

    changePlayerName(element) {
        let player = this._players.filter(player => player.elementId === $(element).data('id'));
        player[0].name = $(element).val();
    }

    _setMatrixClickEvent() {

        let that = this;

        this._matrix.squareElement.click(function (e) {
            e.preventDefault();

            if (that.currentPlayer &&
                !$(this).children().hasClass('x') &&
                !$(this).children().hasClass('circle') &&
                !that.isEndGame()) {

                that._step++;
                that._currentPlayer.addPosition($(this).children().data('position'));
                $(this).children().addClass(that.currentPlayer.cssClass);
                let response = that.checkWinner();
                if (response.success) {
                    response.player.inputName.addClass('is-valid');
                    response.player.incrementScore();
                    that._matrixView.highlightWinnerPositions(response.positions);
                    that.endGame();
                } else if (that._step === 9) {
                    that.endGame();
                } else {
                    that.switchPlayer();
                }
            }
        });

    }
}
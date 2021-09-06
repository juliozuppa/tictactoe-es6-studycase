class MatrixController {

    constructor() {
        this._matrixModel = new MatrixModel();
        this._step = 0;
    }

    setEvents() {
        let that = this;
        this._matrixModel.squareElement.click(function (e) {
            e.preventDefault();
            if (AppController.currentPlayer &&
                !$(this).children().hasClass('x') &&
                !$(this).children().hasClass('circle') &&
                !AppController.isEndGame()) {

                that._step++;
                AppController.addPositionToCurrentPlayer($(this).children().data('position'));
                $(this).children().addClass(AppController.currentPlayer.cssClass);
                let response = AppController.checkWinner();
                if (response.success) {
                    response.player.nameElement.addClass('is-valid');
                    response.player.incrementScore();
                    that.highlightWinnerPositions(response.positions);
                    AppController.endGame();
                } else if (that._step === 9) {
                    AppController.endGame();
                    swal("Oops", "Ninguém ganhou!", "error");
                } else {
                    AppController.switchPlayer();
                }
            }
        });
    }

    resetMatrix() {
        this._matrixModel.squareElement.each(function (idx, el) {
            $(el).children().removeClass('circle').removeClass('x');
        });
    }

    highlightWinnerPositions(positions) {
        $.each(positions, function (idx, position) {
            $('.position').filter(`[data-position="${position}"]`).parent().addClass('bg-info');
        });
    }

}
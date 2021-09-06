class MatrixController {

    constructor() {
        this._matrixModel = new MatrixModel();
    }

    setEvents() {
        this._matrixModel.squareElement.click(function (e) {
            e.preventDefault();
            if (AppController.currentPlayer &&
                !$(this).children().hasClass('x') &&
                !$(this).children().hasClass('circle') &&
                !AppController.isEndGame()) {

                AppController.addPositionToCurrentPlayer($(this).children().data('position'));
                $(this).children().addClass(AppController.currentPlayer.cssClass);
                let response = AppController.checkWinner();
                if (response.success) {
                    response.player.nameElement.addClass('is-valid');
                    response.player.incrementScore();
                    AppController.endGame();
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

}
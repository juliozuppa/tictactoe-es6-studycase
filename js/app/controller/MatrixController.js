class MatrixController {

    constructor() {
        this._matrixModel = new MatrixModel();
    }

    setEvents() {
        this._matrixModel.squareElement.click(function (e) {
            e.preventDefault();
            if (AppController.currentPlayer &&
                !$(this).children().hasClass('x') &&
                !$(this).children().hasClass('circle')) {
                $(this).children().addClass(AppController.currentPlayer.cssClass);
                AppController.switchPlayer();
            }
        });
    }

    resetMatrix() {
        this._matrixModel.squareElement.each(function (idx, el) {
            $(el).children().removeClass('circle').removeClass('x');
        });
    }
}
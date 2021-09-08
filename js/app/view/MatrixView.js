class MatrixView {

    constructor(matrix) {
        this._matrix = matrix
    }

    resetMatrix() {
        $('.position').css('z-index', -1).parent().removeClass('bg-info');
        this._matrix.squareElement.each(function (idx, el) {
            $(el).children().removeClass('circle').removeClass('x');
        });
    }

    highlightWinnerPositions(positions) {
        $.each(positions, function (idx, position) {
            $('.position').filter(`[data-position="${position}"]`).css('z-index', 0).parent().addClass('bg-info');
        });
    }

}
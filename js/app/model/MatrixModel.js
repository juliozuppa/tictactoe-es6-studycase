class MatrixModel {

    constructor() {
        this._squareElement = $('.square');
    }

    get squareElement() {
        return this._squareElement;
    }

    get row() {
        return parseInt(this._squareElement.data('row'));
    }

    get col() {
        return parseInt(this._squareElement.data('col'));
    }
}
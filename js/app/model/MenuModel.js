class MenuModel {

    constructor() {
        this._newGameButton = $('#btn-new-game');
        this._resetScoreButton = $('#btn-reset-score');
        Object.freeze(this);
    }

    get newGameButton() {
        return this._newGameButton;
    }

    get resetScoreButton() {
        return this._resetScoreButton;
    }
}
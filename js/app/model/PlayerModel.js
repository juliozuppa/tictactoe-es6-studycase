class PlayerModel {

    constructor(elementId) {
        this._name = '';
        this._elementId = elementId;
        this._score = localStorage.getItem(elementId) || 0;
        this._scoreElement = $(`#${elementId}-score`);
        this._nameElement = $(`#${elementId}-name`);
        this._scoreElement.val(this._score);
    }

    get nameElement() {
        return this._nameElement;
    }

    get scoreElement() {
        return this._scoreElement;
    }

    set name(name) {
        this._name = name.toString();
    }

    get name() {
        return this._name.toString();
    }

    get score() {
        return this._score;
    }

    incrementScore() {
        this._score++;
        this._scoreElement.val(this._score.toString());
        localStorage.setItem(this._elementId, this._score);
    }

    resetScore() {
        this._score = 0;
        this._scoreElement.val(this._score.toString());
        localStorage.setItem(this._elementId, this._score);
    }

}
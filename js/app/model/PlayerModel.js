class PlayerModel {

    constructor(elementId, cssClass) {
        this._elementId = elementId;
        this._name = localStorage.getItem(`${elementId}-name`) || '';
        this._score = localStorage.getItem(elementId) || 0;
        this._scoreElement = $(`#${elementId}-score`);
        this._inputName = $(`#${elementId}-name`);
        this._flagElement = $(`#${elementId}-flag`);
        this._scoreElement.val(this._score);
        this._inputName.val(this._name);
        this._cssClass = cssClass;
        this._positions = [];
    }

    get elementId() {
        return this._elementId;
    }

    get inputName() {
        return this._inputName;
    }

    get flagElement() {
        return this._flagElement;
    }

    set name(name) {
        this._name = name.toString();
        localStorage.setItem(`${this._elementId}-name`, this._name);
    }

    get name() {
        return this._name.toString();
    }

    get score() {
        return this._score;
    }

    get cssClass() {
        return this._cssClass;
    }

    get positions() {
        return this._positions;
    }

    addPosition(position) {
        this._positions.push(position);
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

    clearPositions() {
        this._positions = [];
    }

}
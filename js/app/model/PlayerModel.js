class PlayerModel {

    constructor(elementId) {
        this._elementId = elementId;
        this._name = localStorage.getItem(`${elementId}-name`) || '';
        this._score = localStorage.getItem(elementId) || 0;
        this._scoreElement = $(`#${elementId}-score`);
        this._nameElement = $(`#${elementId}-name`);
        this._flagElement = $(`#${elementId}-flag`);
        this._scoreElement.val(this._score);
        this._nameElement.val(this._name);
    }

    get nameElement() {
        return this._nameElement;
    }

    get scoreElement() {
        return this._scoreElement;
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

    flag() {
        this._flagElement.find('i').show();
    }

    unflag() {
        this._flagElement.find('i').hide();
    }

    isFlagged() {
        return this._flagElement.find('i').is(':visible');
    }

}
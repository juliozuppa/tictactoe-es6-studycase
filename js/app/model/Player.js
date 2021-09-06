class Player {

    constructor(elementId) {
        this._scoreElement = $(`#${elementId}-score`);
        this._nameElement = $(`#${elementId}-name`);
        Object.freeze(this);
    }

    get name() {
        return this._nameElement.val();
    }

    get score() {
        return this._scoreElement.val();
    }

}
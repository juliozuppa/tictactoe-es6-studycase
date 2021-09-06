class PlayerController {

    constructor() {
        this._player1 = new PlayerModel('p1', 'x');
        this._player2 = new PlayerModel('p2', 'circle');
    }

    setEvents() {
        let that = this;
        this._player1.nameElement.change(function (e) {
            e.preventDefault();
            that._player1.name = $(this).val();
        });
        this._player2.nameElement.change(function (e) {
            e.preventDefault();
            that._player2.name = $(this).val();
        });
    }

    get player1() {
        return this._player1;
    }

    get player2() {
        return this._player2;
    }

}
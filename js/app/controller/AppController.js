class AppController {

    constructor() {
        this._p1 = new Player('p1');
        this._p2 = new Player('p2');
        Object.freeze(this);
    }

    start() {

    }
}
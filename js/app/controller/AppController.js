class AppController {

    static constructor() {
        throw Error('Essa classe não pode ser instanciada');
    }

    static start() {
        this._playerController = new PlayerController();
        this._menuController = new MenuController();
        this._playerController.setEvents();
        this._menuController.setEvents();
    }

    static get playerController() {
        return this._playerController;
    }

}
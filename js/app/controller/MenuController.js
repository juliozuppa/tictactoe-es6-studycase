class MenuController {

    constructor() {
        this._menuModel = new MenuModel();
    }

    setEvents() {

        this._menuModel.newGameButton.click(function (e) {
            e.preventDefault();
            AppController.newGame();
        });

        this._menuModel.resetScoreButton.click(function (e) {
            e.preventDefault();
            swal({
                title: "Você tem certeza?",
                text: "Confirma a limpeza das pontuações?",
                icon: "warning",
                buttons: ["Não", "Sim"],
                dangerMode: true,
                closeOnClickOutside: false
            }).then((yes) => {
                if (yes) {
                    AppController.resetPlayerScores();
                    AppController.newGame();
                }
            });

        })
    }
}
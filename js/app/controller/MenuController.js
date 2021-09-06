class MenuController {
    constructor() {
        this._menuModel = new MenuModel();
    }

    setEvents() {
        this._menuModel.newGameButton.click(function (e) {
            e.preventDefault();
            if(AppController.playerController.player1.isFlagged()) {
                AppController.playerController.player1.unflag();
                AppController.playerController.player2.flag();
            } else {
                AppController.playerController.player1.flag();
                AppController.playerController.player2.unflag();
            }

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
                    AppController.playerController.player1.resetScore();
                    AppController.playerController.player2.resetScore();
                }
            });

        })
    }
}
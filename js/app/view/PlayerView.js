class PlayerView {

    constructor(player) {
        this._player = player;
    }

    flag() {
        this._player.flagElement.find('i').filter('.flag-icon').show();
    }

    removeFlag() {
        this._player.flagElement.find('i').filter('.flag-icon').hide();
    }

    isFlagged() {
        return this._player.flagElement.find('i').filter('.flag-icon').is(':visible');
    }

    clearWinnerMessage() {
        $('.player').removeClass('is-valid');
    }
}
class GuessingGame {
    constructor()
    {
        this._min = 0,
        this._max = 0;
    }

    setRange(min, max) {
            this._min = min;
            this._max = max;
            return this;
    };

    guess() {
        return Math.ceil((this._min + this._max) / 2);
    };

    lower()
    {
        this._max = Math.ceil((this._min + this._max) / 2);
    }

    greater()
    {
        this._min = Math.ceil((this._min + this._max) / 2);
    }
}

module.exports = GuessingGame;

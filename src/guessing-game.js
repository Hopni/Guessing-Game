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
        return (this._min + this._max) / 2;
    };

    lower()
    {
        this._max = (this._min + this._max) / 2;
    }

    greater()
    {
        this._min = (this._min + this._max) / 2;
    }
}

module.exports = GuessingGame;

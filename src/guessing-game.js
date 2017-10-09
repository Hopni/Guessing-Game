class GuessingGame {
    constructor()
    {
        _min = 0,
        _max = 0;
    };

    setRange(min, max) {
        if (min < max) {
            _min = min;
            _max = max;
            return this;
        }
        else {
            return null;
        }
    };

    guess() {
        return (_min + _max) / 2;
    };

    lower()
    {
        _max = (_min + _max) / 2;
        return this;
    }

    greater()
    {
        _min = (_min + _max) / 2;
        return this;
    }
}

module.exports = GuessingGame;

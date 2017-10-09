class GuessingGame {
    constructor()
    {
        var _min = 0,
            _max = 0;
    }

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
    }

    greater()
    {
        _min = (_min + _max) / 2;
    }
}

module.exports = GuessingGame;

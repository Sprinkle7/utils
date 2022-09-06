module.exports = {
    unique: (array) => {
        function unique(value, index, self) {
            return self.indexOf(value) === index;
        }
        return array.filter(unique);
    },
    removeItem: (array, index) => { 
        array.splice(index,1);
        return array;
    },
    sum: (array) => array.reduce((partialSum, a) => partialSum + a, 0),
    sortArrayByString: (array, pointer, by) => {
        if (by) {
            return array.sort((a, b) => (a[pointer] > b[pointer]) ? 1 : ((b[pointer] > a[pointer]) ? -1 : 0));
        } else {
            console.log(by);
            return array.sort((a, b) => (a[pointer] < b[pointer]) ? 1 : ((b[pointer] < a[pointer]) ? -1 : 0));
        }
    },
    sortArrayByNumber: (array, pointer, by) => {
        if (by) {
            return array.sort((a, b) => parseFloat(a[pointer]) - parseFloat(b[pointer]));
        } else {
            return array.sort((a, b) => parseFloat(b[pointer]) - parseFloat(a[pointer]));
        }
    },
    exists: (array, [pointer, value]) => {
        return array.some(el => el[pointer] === value);
    },
    minValue: (array) => {
        var data = array.sort(function(a, b) { return a - b });
        return data[0];
    },
    maxValue: (array) => {
        var data = array.sort(function(a, b) { return b - a });
        return data[0];
    },
    obj: (array) => array[0],
    day: () => {
        const d = new Date();
        return d.toISOString();
    },
    justDate: () => {
        const d = new Date().toISOString().split('T');
        return d[0];
    },
    DateString: (date = null) => {
        if (date) {
            return new Date(date).toDateString();
        } else {
            return new Date().toDateString();
        }
    },
    length: (array) => array.length,
    replace: (str, [a, b]) => str.replace(a, b),
    upper: (str) => str.toUpperCase(),
    lower: (str) => str.toLowerCase(),
    trim: (str) => str.trim(),
    pads: (str) => str.padStart(6, 0),
    split: (str, opt) => str.split(opt),
    join: (str, opt) => str.join(opt),
    hash: (length) => {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    },
    removeChar: (str, opt) => {
        var i, frags = str.split(opt);
        for (i = 0; i < frags.length; i++) {
            frags[i] = frags[i].charAt(0).toUpperCase() + frags[i].slice(1);
        }
        return frags.join(' ');
    },
    isEmpty: (obj) => {
        if (obj == null) return true;
        if (obj.length > 0) return false;
        if (obj.length === 0) return true;
        if (typeof obj !== "object") return true;
        for (var key in obj) {
            if (hasOwnProperty.call(obj, key)) return false;
        }
        return true;
    },
    validLink: (str) => {
        var pattern = new RegExp('^(http?:\\/\\/)?' +
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
            '((\\d{1,3}\\.){3}\\d{1,3}))' +
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
            '(\\?[;&a-z\\d%_.~+=-]*)?' +
            '(\\#[-a-z\\d_]*)?$', 'i');
        return !!pattern.test(str);
    }
}
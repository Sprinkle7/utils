const { isValidIBANNumber } = require('./iban');
module.exports = {
    /* Removing duplicate values from an array. */
    unique: (array) => {
        function unique(value, index, self) {
            return self.indexOf(value) === index;
        }
        return array.filter(unique);
    },
    /* Removing an object from an array. */
    removeindex: (array, index) => {
        array.splice(index, 1);
        return array;
    },
    /* Adding all the values in the array. */
    sum: (array) => array.reduce((partialSum, a) => partialSum + a, 0),
    /* Sorting an array of objects by a pointer. */
    soras: (array, pointer, by) => {
        if (by) {
            return array.sort((a, b) => (a[pointer] > b[pointer]) ? 1 : ((b[pointer] > a[pointer]) ? -1 : 0));
        } else {
            console.log(by);
            return array.sort((a, b) => (a[pointer] < b[pointer]) ? 1 : ((b[pointer] < a[pointer]) ? -1 : 0));
        }
    },
    /* Sorting an array of objects by a pointer. */
    soran: (array, pointer, by) => {
        if (by) {
            return array.sort((a, b) => parseFloat(a[pointer]) - parseFloat(b[pointer]));
        } else {
            return array.sort((a, b) => parseFloat(b[pointer]) - parseFloat(a[pointer]));
        }
    },
    /* Checking if the value exists in the array. */
    exists: (array, pointer, value) => {
        return array.some(el => el[pointer] === value);
    },
    /* Sorting the array and returning the first value. */
    min: (array) => {
        var data = array.sort(function(a, b) { return a - b });
        return data[0];
    },
    /* Sorting the array and returning the first value. */
    max: (array) => {
        var data = array.sort(function(a, b) { return b - a });
        return data[0];
    },
    /* Returning the first object in the array. */
    obj: (array) => array[0],
    /* Returning the current date in ISO format. */
    today: () => {
        const d = new Date();
        return d.toISOString();
    },
    /* Returning the current date in ISO format. */
    justdate: () => {
        const d = new Date().toISOString().split('T');
        return d[0];
    },
    /* Returning the date in a string format. */
    datestring: (date = null) => {
        if (date) {
            return new Date(date).toDateString();
        } else {
            return new Date().toDateString();
        }
    },
    /* Returning the length of the array. */
    len: (array) => array.length,
    /* Replacing the value of a with b. */
    replace: (str, a, b) => str.replace(a, b),
    /* Converting the string to uppercase. */
    upper: (str) => str.toUpperCase(),
    /* Converting the string to lowercase. */
    lower: (str) => str.toLowerCase(),
    /* Capitalizing the first letter of the string. */
    cap: (string) => string.charAt(0).toUpperCase() + string.slice(1),
    /* Capitalizing the first letter of each word in the string. */
    capword: (str) => {
        var splitStr = str.toLowerCase().split(' ');
        for (var i = 0; i < splitStr.length; i++) {
            splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
        }
        return splitStr.join(' ');
    },
    /* Trimming the string. */
    trim: (str) => str.trim(),
    /* Adding 0 to the start of the string. */
    pads: (str, limit) => str.padStart(limit, 0),
    /* Splitting the string into an array. */
    split: (str, opt = '') => str.split(opt),
    /* Joining the array into a string. */
    join: (array, opt = '') => array.join(opt),
    /* Generating a random string of characters. */
    hash: (length) => {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*!';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    },
    /* Removing the character and capitalizing the first letter of the word. */
    removechar: (str, opt) => {
        var i, frags = str.split(opt);
        for (i = 0; i < frags.length; i++) {
            frags[i] = frags[i].charAt(0).toUpperCase() + frags[i].slice(1);
        }
        return frags.join(' ');
    },
    empty: (obj) => {
        if (obj == null) return true;
        if (obj.length > 0) return false;
        if (obj.length === 0) return true;
        if (typeof obj !== "object") return true;
        for (var key in obj) {
            if (hasOwnProperty.call(obj, key)) return false;
        }
        return true;
    },
    /* Checking if the string is a valid link. */
    url: (str) => {
        var pattern = new RegExp('^(http?:\\/\\/)?' +
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
            '((\\d{1,3}\\.){3}\\d{1,3}))' +
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
            '(\\?[;&a-z\\d%_.~+=-]*)?' +
            '(\\#[-a-z\\d_]*)?$', 'i');
        return !!pattern.test(str);
    },
    /* Checking if the email is valid. */
    email: (email) => {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    },
    iban: (id) => isValidIBANNumber(id),
    token6: () => Math.floor(100001 + Math.random() * 899998),
    token4: () => Math.floor(1001 + Math.random() * 8998),

}
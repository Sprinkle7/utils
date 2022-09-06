# Chuphsa  📝  
Everyday use functions.

## Installation 🚀  

Via npm:

    $ npm install chuspha

## Usage

```js
    cont chuspha = require('chupsha');

    var toBeCapitalized = 'hello world';
    // Capitalize String
    console.log(chupsha.cap(toBeCapitalized));

```
## OR

```js
    const { cap } = require('chupsha');

    var toBeCapitalized = 'hello world';
    // Capitalize String
    console.log(cap(toBeCapitalized));

```

### Library Includes

##### unique(array)
Remove duplicate values from an array

##### removeindex(array,index)
Remove an object from an array

##### sum(array)
Sum all the values in the array

##### soras(array, key, boolean)
Sort an array of objects by a key with string value. Boolean for Asc & Desc

##### soran(array, key, boolean)
Sort an array of objects by a key with number value. Boolean for Asc & Desc

##### exists(array, key, value)
Checking if key contains a value in array

##### min(array)
Return min value from array

##### max(max)
Return max value from array

##### obj(array)
Return first object of array or convert single array to object

##### len(array)
Get array length

##### hash(length)
Generate A Random Hash String

##### token6()
Generate A Random 6 digit token

##### token4()
Generate A Random 4 digit token

##### replace(str, replace, by)
Replace a string in string

##### upper(str)
Convert the string to uppercase

##### lower(str)
Convert the string to lowercase

##### cap(str)
Capitalize the first letter of the string

##### capword(str)
Capitalize the first letter of each word in string

##### trim(str)
Trim a string

##### pads(str,limit)
Adding 0 to the start of the string

##### split(str, opt = '')
Split the string into an array

##### join(str,opt = '')
Join array into a string
  
##### removechar(str, opt)
Remove a character and capitalizing the first letter of the word
   
##### empty(val)
Check if string, array or object is empty or null
  
##### url(val)
Check if valid URL

##### email(val)
Check if valid Email

##### iban(val)
Check if Iban is valid
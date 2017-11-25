# IZO-ORDERRAY

orderray can order an array (ascendant or descendant) of kind of numbers or string

## Description

With orderray you can:
	
	- Organize an array of numbers  [2,3,1,5,4] = ascendant [1,2,3,4,5] or descendant [5,4,3,2,1]
	- Organize an array of string   ['luke','ar2d2','chewbacca','c3po','bb8'] = ascendant ["bb8", "luke", "c3po", "ar2d2", "chewbacca"] or descendant ["chewbacca", "ar2d2", "luke", "c3po", "bb8"]

# Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes or only use it. 

## Installing

You can install typing the next code in your console:

```
npm install izo-orderray
```

## Use

You can use it typing:

```
import izo-orderray from 'izo-orderray'

----------------------------------------

oderray admits three Parameters
	- Array [2,3,1] or ['two','three','one'].
	- Sorting mode ('asc', 'desc').
	- type of array ('numbers','string').


# Examples:

orderray([5,3,1,2],'asc','numbers'); // result [1,2,3,5];
Note: orderray have parameters default: 'asc','numbers'.
oderray([5,3,1,2]); // result [1,2,3,5];
oderray([5,3,1,2],'asc'); // result [1,2,3,5];

-----------------------------------------------------------

oderray([5,3,1,2],'desc','numbers'); // result [5,3,2,1];
oderray([5,3,1,2],'desc'); // result [5,3,2,1];

-----------------------------------------------------------

oderray(['bird','spider','fly','elephant'],'asc','string');  // result ["fly", "bird", "spider", "elephant"]
oderray(['bird','spider','fly','elephant'],'desc','string'); // result ["elephant", "spider", "bird", "fly"]

```
Clone [Project](https://github.com/izofer/izo-orderray) of github.

# About this project

## Built With

* Javascript.
* Babel.
* Mocha.
* Chai.
* Patience.
* Passion.

## Authors

*  **...Izofer...** - [Bio](http://izofer.globso.co) - [Git](https://github.com/izofer)

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/izofer/izo-orderray/LICENSE) file for details.

## Acknowledgments

* Some people that needed organize an array of numbers or string.
* I was inspired.
* I love the code JS.
* I love help you.
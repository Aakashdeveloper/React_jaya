var a = [1,2,3,4,5,6];
var stringArray = ["a","b","c"]

var javascript=[1,2,3,"a",4,"v","f",true,7]

var javascript=[1,2,3,"a",4,"v","f",true,7]
undefined
javascript
(9) [1, 2, 3, "a", 4, "v", "f", true, 7]
javascript[0]
1
javascript[5]
"v"
javascript.length
9
javascript.push("jaya")
10
javascript
(10) [1, 2, 3, "a", 4, "v", "f", true, 7, "jaya"]

javascript.pop(2)
"jaya"
javascript.pop()
7
javascript.pop(true)
true

var a = [1, 2, 3, "a", 4, "v", "f", true, 7, "jaya"]
undefined
a.unshift("javascript")
11
a
(11) ["javascript", 1, 2, 3, "a", 4, "v", "f", true, 7, "jaya"]
a.shift()
"javascript"
a
(10) [1, 2, 3, "a", 4, "v", "f", true, 7, "jaya"]

//////Splice//////////////////
var a = [1,2,3,4,5,6,7,8]
undefined
a.splice(2,0,"javascript","typescript")
[]
a
(10) [1, 2, "javascript", "typescript", 3, 4, 5, 6, 7, 8]
a.splice(4,2,"red","blue")
(2) [3, 4]
a
(10) [1, 2, "javascript", "typescript", "red", "blue", 5, 6, 7, 8]

var a = [1,2,3,4,5,6,7,8]
undefined
var b = ["a","b","c"]
undefined
a.concat(b)
(11) [1, 2, 3, 4, 5, 6, 7, 8, "a", "b", "c"]
a+b
"1,2,3,4,5,6,7,8a,b,c"
var c =["javascript","react"]
undefined
a.concat(b,c)
(13) [1, 2, 3, 4, 5, 6, 7, 8, "a", "b", "c", "javascript", "react"]
c.concat(a,b)
(13) ["javascript", "react", 1, 2, 3, 4, 5, 6, 7, 8, "a", "b", "c"]
var d = c.concat(a,b)
undefined
d
(13) ["javascript", "react", 1, 2, 3, 4, 5, 6, 7, 8, "a", "b", "c"]
d.sort()
(13) [1, 2, 3, 4, 5, 6, 7, 8, "a", "b", "c", "javascript", "react"]
a.reverse()
(8) [8, 7, 6, 5, 4, 3, 2, 1]
d.reverse()
(13) ["react", "javascript", "c", "b", "a", 8, 7, 6, 5, 4, 3, 2, 1]
d.indexOf("b")
3
d.index

document.URL
"https://angular.io/guide/pipes"
window.location
Location {href: "https://angular.io/guide/pipes", ancestorOrigins: DOMStringList, origin: "https://angular.io", replace: ƒ, assign: ƒ, …}
var  url = document.URL
undefined
url
"https://angular.io/guide/pipes"
var a = url.split("/")
undefined
a
(5) ["https:", "", "angular.io", "guide", "pipes"]
a[4]
"pipes"
a[a.length-1]
"pipes"




Math.random()
0.5100762938435597
Math.random()
0.5498889214514371
Math.random()
0.5583779184692583
Math.PI
3.141592653589793
Math.ceil(5.6)
6
Math.ceil(3.14)
4
Math.floor(3.14)
3
Math.round(3.14)\
VM389:1 Uncaught SyntaxError: Invalid or unexpected token
Math.round(3.14)
3
Math.pow(2,2)
4
Math.sqrt(64)
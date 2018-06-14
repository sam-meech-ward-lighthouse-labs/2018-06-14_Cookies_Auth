## Cookies

HTTP is stateless: all the information that the server **needs**, **must** be sent with every request.

Instead of cookies, we could use url queries:

`tinysite.com?userID=1&name=sam&cookie=oreo`

```js
const userID = req.query.userID;
const user = userDB[userID];
res.json(user);
```

But our urls become un shareable

* `cookie-parser` allows us to easily create cookies, send them to the browser, and retreive them from the browser.
* `cookie-session` is similar, but will encrypt our cookies to make our authentication more secure. Use encrypted cookies unless you have a good reason not to.

## Storing Passwords

`ukulele1`

* encryption: An algorithm that modifies a string into a different string. Given the algorithm, you **can** decrypt. 
* hashing: similar to encryption, but one way.
* salt: random data attached to the password when it's hashed. 

jazz hands -> lij8e7fuiu92wejioqfajfklsejf

## Open browser windows

* http://tinysite.com/?userID=1&name=sam&cookie=oreo
* https://en.wikipedia.org/wiki/Query_string
* https://rietta.com/blog/2016/02/05/bcrypt-not-sha-for-passwords/
* https://en.wikipedia.org/wiki/Bcrypt
* https://www.npmjs.com/package/bcrypt
* https://github.com/expressjs/cookie-session

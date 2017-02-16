Ionic App Starter
=================

A starting project for Ionic.

Includes:
 - Push Notifications
 - Ionic Deploy
 - Ionic Users (Authentication and Reset Password)

## Install project

Clone this repository:
```term
$ git clone git@github.com:noentiger/ionic-app-starter.git && cd $_
$ npm run setup
```

## Running the application

iOS simulator:
```bash
$ ionic run ios -l -c
```
`-l -c` are shorthand flags to enable livereload and console log

Browser:
```bash
$ ionic serve
```

### Production Release iOS and Android

```bash
$ npm run release
```
```bash
$ cordova build --release android
```

More info on this can be found on the Ionic [Getting Started](http://ionicframework.com/getting-started) page and the [Ionic CLI](https://github.com/driftyco/ionic-cli) repo.

## Licensing

Copyright 2016 Kim Wijk

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

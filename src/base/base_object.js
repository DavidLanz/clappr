// Copyright 2014 Globo.com Player authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

var uniqueId = require('lodash.uniqueid')
var Events = require('events')

class BaseObject extends Events {
  constructor(options={}) {
    this.uniqueId = uniqueId('o')
    this.container = options.container
  }
}

module.exports = BaseObject

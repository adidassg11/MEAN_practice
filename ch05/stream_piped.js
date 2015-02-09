var stream = require('stream');
var util = require('util');

util.inherits(Require, stream.Readable);
util.inherits(Writer, stream.Writable);

function Reader(opt) {
    stream.Readable.call(this, opt);
    this._index = 1;
}

Reader.prototype._read = function(size) {
    var i = this._index++;
    if (i > 10) {
        this.push

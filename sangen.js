// Dependencies
var ffmpeg = require('fluent-ffmpeg');

/**
 * Sangen constructor
 * 
 * Music conversion library.
 * @param {String} type the type of preffered conversion 
 */
var Sangen = function(type){
    this.type = type || 'mp3';
};

/**
 * Convert an audio file into a different type.
 * 
 * @param {String} fileName the file to convert
 * @param {String} targetName the desired name after conversion
 */
Sangen.prototype.convert = function(fileName, targetName) {
    if (this.type === 'mp3') {
        this._toMp3(fileName, targetName);
    }
    
    // TODO: implement more file types 
    
};

/**
 * Convert to mp3 format.
 *
 * @method _toMp3
 * @private
 * @param {String} fileName the file to convert
 * @param {String} targetName the desired name after conversion
 */
Sangen.prototype._toMp3 = function(fileName, targetName) {
    var proc = new ffmpeg({ source: fileName })
        .withAudioBitrate('128k')
        .withAudioCodec('libmp3lame')
        .toFormat('mp3')
        .saveToFile(targetName, function(stdout, stderr) {
            console.log(fileName + ' has been converted to mp3 succesfully');
        });
};

// Node export
module.exports = Sangen;
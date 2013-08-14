// Dependencies
var ffmpeg = require('fluent-ffmpeg');

/**
 * Sangen constructor
 * 
 * Music conversion library.
 * @param {String} type the type of preffered conversion for use in shorthand 
 */
var Sangen = function(type){
    this.type = type || 'mp3';
};

/**
 * Convert an audio file into a different type. Used as a shorthand method.
 * 
 * @method convert
 * @param {String} fileName the file to convert
 * @param {String} targetName the desired name after conversion
 */
Sangen.prototype.convert = function(fileName, targetName) {
    switch(this.type) {
    case 'mp3':
        this.toMp3(fileName, targetName);
        break;
    case 'wav':
        this.toWav(fileName, targetName);
        break;
    }
    
};

/**
 * Convert to mp3 format.
 *
 * @method toMp3
 * @param {String} fileName the file to convert
 * @param {String} targetName the desired name after conversion
 */
Sangen.prototype.toMp3 = function(fileName, targetName) {
    var proc = new ffmpeg({ source: fileName })
        .withAudioBitrate('128k')
        .withAudioCodec('libmp3lame')
        .toFormat('mp3')
        .saveToFile(targetName, function(stdout, stderr) {
            console.log(fileName + ' has been converted to mp3 succesfully');
        });
};

/**
 * Convert to wav format.
 *
 * @method toWav
 * @param {String} fileName the file to convert
 * @param {String} targetName the desired name after conversion
 */
Sangen.prototype.toWav = function(fileName, targetName) {
    var proc = new ffmpeg({ source: fileName })
        .withAudioBitrate('128k')
        .withAudioCodec('libmp3lame')
        .toFormat('wav')
        .saveToFile(targetName, function(stdout, stderr) {
            console.log(fileName + ' has been converted to wav succesfully');
        });
};

// Node export
module.exports = Sangen;
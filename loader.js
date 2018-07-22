/**
 * 
 * @param {string} codeAsString
 * @returns {string} codeTransformed;
 */

function logEmojiWebpackLoader(codeAsString) {
    debugger;
    const STRING_TO_MATCH = ["console.log", "console.error"];
    const ESCAPE_CHARACTER = "\\";

    let match = "";
    let insideString = null;

    for (let i = 0; i < codeAsString.length; i++) {
        if (STRING_TO_MATCH.includes(match)) {
            switch (codeAsString[i]) {
                case "\"":
                case "'":
                case "`":
                    if (codeAsString[i] === insideString && codeAsString[i - 1] !== ESCAPE_CHARACTER) {
                        insideString = null;
                    } else if (!insideString) {
                        insideString = codeAsString[i];
                    }
                    break;
                case "(":
                    if (!insideString) {
                        if (match === STRING_TO_MATCH[0]) {
                            codeAsString = codeAsString.substring(0, i + 1) + '"😊",' + codeAsString.substring(i + 1);
                        } else {
                            codeAsString = codeAsString.substring(0, i + 1) + '"😡",' + codeAsString.substring(i + 1);
                        }
                    }
                    break;
                case ")":
                    if (!insideString) {
                        match = "";
                    }
                    break;
                default: 
                    match = "";
                    insideString = null;
                    break;
            }
        } else if (codeAsString[i] === STRING_TO_MATCH[0][match.length] || codeAsString[i] === STRING_TO_MATCH[1][match.length]) {
            match += codeAsString[i];
        } else {
            match = "";
        }
    }

    return codeAsString;
}

module.exports = logEmojiWebpackLoader;
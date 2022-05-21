/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let bracketStack = [];
    
    for (let i = 0; i < s.length; i+=1) {
        if (s[i] === '[') bracketStack.push('[');
        if (s[i] === '(') bracketStack.push('(');
        if (s[i] === '{') bracketStack.push('{');
        
        
        if (s[i] === ')') {
            if (bracketStack[bracketStack.length - 1] !== '(') {
                return false;
            }
            bracketStack.pop();
        }
        
        if (s[i] === ']') {
            if (bracketStack[bracketStack.length - 1] !== '[') {
                return false;
            }
            bracketStack.pop();
        }
        
        if (s[i] === '}') {
            if (bracketStack[bracketStack.length - 1] !== '{') {
                return false;
            }
            bracketStack.pop();
        }
    }
    
    return bracketStack.length === 0;   
    
};
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    let balanced = true;
    
    const findHeight = (node) => {
        if (!node) return 0;
        if (balanced === false) return;
        
        let leftHeight = findHeight(node.left);
        let rightHeight = findHeight(node.right);
        let diff = Math.abs(leftHeight - rightHeight);
        
        if (diff > 1) {
            balanced = false;
        }
        
        return Math.max(leftHeight, rightHeight) + 1;
    }
    
    findHeight(root);
    return balanced;
};
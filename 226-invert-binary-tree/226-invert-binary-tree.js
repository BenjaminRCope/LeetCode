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
 * @return {TreeNode}
 */
var invertTree = function(root) {    
    if (!root) {
        return root;
    }
    if (!root.left && !root.right) {
        return root;
    }
    
    const reverseNode = (node) => {
        let temp = node.left;
        node.left = node.right;
        node.right = temp;
        
        if (node.left) {
            reverseNode(node.left);
        }
        if (node.right) {
            reverseNode(node.right);
        }
    }
    
    reverseNode(root);
    return root;
};
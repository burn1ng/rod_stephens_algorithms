// find item in full ordered binary tree
// example of O(log(N)) asymptotic complexity algorithm

/**
 *               (7)
 *             /    \
 *            /      \
 *           /        \
 *         (4)        (9)
 *       /    \     /    \
 *      /      \   /      \
 *     (2)    (6) (8)    (10)
 *    /  \   /
 *  (1) (3) (5)
 */

function find_item(target_value) {
    var test_node = root; // tree root

    while(true) {
        if (test_node === null) return null;

        if (target_value === test_node.value) {
            return test_node;
        } else if (target_value < test_node.value) {
            test_node = test_node.left;
        } else {
            test_node = test_node.right;
        }
    }
}
"use strict";
/* global describe */
/* global it */
/* global beforeEach */
/* global assert */
/* global BinarySearchTree */
// eslint-disable-next-line no-redeclare
/* global Node */
/* global RootNode */


describe("Binary Search Tree - Node", function () {
    let node = new Node();
    beforeEach(() => { 
        node = new Node(5); 
        node.add(3);
        node.add(7);
        node.add(1);
        node.add(4);
        node.add(6);
        node.add(8);
    });

    // describe("max() method", function () {
    //     it("retrieves the largest element below this node", function () {
    //         assert.equal(node.max(), 8);
    //     });
    // });

    describe("min() method", function () {
        it("retrieves the minium element below this node", function () {
            assert.equal(node.min(), 1);
        });
    });

    describe("add(element) method", function () {
        it("adds an element into the tree below this branch", function () {
            node.add(0);
            node.add(2);
            node.add(9);
            assert.isTrue(node.contains(0));
            assert.isTrue(node.contains(2));
            assert.isTrue(node.contains(9));
        });
    });

});
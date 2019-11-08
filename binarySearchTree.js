/* eslint-disable require-jsdoc */
"use strict";

// eslint-disable-next-line no-redeclare
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
   
    ///////////////////finding minimum///////////////////
    min() {
        if (this.left !== null) {
            return this.left.min();
        }
        else {
            return this.value;
        }
    }
/*
• insertAll(array) takes an array of values and inserts all of them into the BST
• readIntoArray() returns an array containing all the values currently in the BST
The insertAll(array) method is pretty self explanatory (just add each element of the array into the BST).
The readIntoArray should do an In-Order-Traversal to get the values from the BST and put it into an
array, which it will return.
The easiest way to implement readIntoArray() is with a recursive function on the Node class. If you
want you can also write a non-recursive function, but in that case you need to use a stack to keep track
of where you are in terms of backtracking.
Write a Mocha / Chai test in order to check if the numbers you put into the BST come out sorted when
you use the readIntroArray() method. 
\*/
    ////////////////insrt in to all
    insertAll(array){
        for(let item of array){
            this.add(item);
        }
    }
    ///////////////////////////


    readIntoArray(){
        for (let item of array){
    }
    add(element) {
        if (element > this.value) {
            if (this.right === null) {
                this.right = new Node(element);
            }
            else {
                this.right.add(element);
            }
        }
        else {
            if (this.left === null) {
                this.left = new Node(element);
            }
            else {
                this.left.add(element);
            }
        }
    }
    contains(element) {
        if (element === this.value) {
            return true;
        }
        if (element > this.value) {
            if (this.right === null) {
                return false;
            }
            else {
                return this.right.contains(element);
            }
        }
        else {
            if (this.left === null) {
                return false;
            }
            else {
                return this.left.contains(element);
            }
        }
    }}
    remove(parent, element) {
        if (element < this.value) {
            if (this.left === null) {
                return false;
            }
            else {
                return this.left.remove(this, element);
            }
        }
        else if (element > this.value) {
            if (this.right === null) {
                return false;
            }
            else {
                return this.right.remove(this, element);
            }
        }
        else { //if (element === this.value) {
            // simply remove this node if it doesn't have children 
            if (this.left === null && this.right === null) {
                if (parent.left === this) {
                    parent.left = null;
                }
                else if (parent.right === this) {
                    parent.right = null;
                }
            }
            // if there is one child, put it in our place
            else if (this.left !== null && this.right === null) {
                    this.value = this.left.value;
                    this.right = this.left.right;
                    this.left = this.left.left;
                    return true;
            } else if (this.right !== null && this.left === null) {
                    this.value = this.right.value;
                    this.left = this.right.left;
                    this.right = this.right.right;
                    return true;
            } else if (this.left !== null && this.right !== null) {
                // if there are two children copy the largest of the small and prune that
                let largest = this.left.max();
                this.value = largest;
                this.left.remove(this, largest);
            }
            return true;
        } // end of "if this is the value to remove"
    } // end of remove method
} // end of Node class








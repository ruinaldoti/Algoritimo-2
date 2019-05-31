import {Compare, defaultCompare} from '../util';
import {Node} from 'node';

export default class BinarySearchTree{
    
    constructor(compareFn = defaultCompare){
        this.compareFn = compareFn; //usado para comparar os valores dos nós
        this.root = null; //{1} nó raiz do tipo Node
    }

    insertNode(node, key){
        if (this.compareFn(key, node.key) === Compare.LESS_THAN){ //{4}
            if(node.left == null) { //{5}
                node.left = new Node(key);  //{6}
            }else{
                 this.insertNode(node.left, key); //{7}
             }

        }else{
            if(node.right == null){ //{8}
                node.right = new Node(key); //{9}
            }else{
                this.insertNode(node.right, key); //{10}
            }
        }
    }

    insert(key){
        if(this.root == null){                //{1} Checo se a raiz esta vazia, se tiver faço a inserção do valor (no), se não vou pro else; 
            this.root = new Node(key);        // {2} Chamo o metodo insertNode onde vou compara se o valor é maior ou menor; 
        }else{
            this.insertNode(this.root, key);  //{3}
        }
    }



    search(key){
        return this.searchNode(this.root, key);   //{1}
    }
    searchNode(node, key){
        if (node == null){ //{2}
            return false;
        }
        if(this.compareFn(key, node.key) === Compare.LESS_THAN) {  //{3}
            return this.searchNode(node.left, key);  //{4}
        }else if(this.compareFn(key, node.key) === Compare.BIGGER_THAN){  //{5}
            return this.searchNode(node.right, key); // {6}
            } else {
                return true;  //{7}
            }
    }
    


    inOrderTraverseNode(node, callback){
        if(node != null){  //{2}
            this.inOrderTraverseNode(node.left, callback) //{3}
            callback(node.key); //{4}
            this.inOrderTraverseNode(node.right, callback) //{5}
        }
    }
    inOrderTraverse(callback){
        this.inOrderTraverseNode(this.root, callback); // {1}

    }

    preOrderTraverse(callback){
        this.preOrderTraverseNode(this.root, callback)
    }
    preOrderTraverseNode(node, callback){
        if(node != null){
            callback(node.key);
            this.preOrderTraverseNode(node.left, callback);
            this.preOrderTraverseNode(node.right, callback);
        }
    }
    
    postOrderTraverse(callback){
        this.postOrderTraverseNode(this.root, callback);
    }
    postOrderTraverseNode(node, callback){
        if(node !=null){
            this.postOrderTraverseNode(this.root, callback);
            this.postOrderTraverseNode(node.right, callback);
            callback(node.key);
        }
    }

    min(){
        return this.minNode(this.root); //{1}
    }
    minNode(node){
        let current = node;
        while (current != null && current.left != null){  //{2}
            current = current.left;  //{3}
        }
        return current; //{4}
    }
   
    max(){
        return this.maxNode(this.root)
    }
    maxNode(node){
        let current = node;
        while (current != null && current.right != null){  //{5}
            current = current.right;
        }
        return current;
    }
   
   
    remove(key)
}



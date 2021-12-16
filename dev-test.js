const Block = require("./block");
const Blockchain = require("./blockchain");

// const block = new Block("time","hash1","hash2","data");
// console.log(block.toString());

// console.log(Block.genesis().toString());

// const testBlock = Block.mineBlock(Block.genesis(),"test");
// console.log(testBlock.toString());

// Init + 1. Block (Genesis)
const blockchain = new Blockchain();
console.log(blockchain);

// + 2. Block
blockchain.addBlock("100 € an boo, 50 $ von foo");
console.log(blockchain);

// + 3.block
blockchain.addBlock("80,50 € von boo an baz");
console.log(blockchain);

// + 4.block
blockchain.addBlock("Bank an Kasse 200");
console.log(blockchain);




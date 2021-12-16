const SHA256 = require("crypto-js/sha256");

class Block{

// Konstruktor + Parameter
constructor(timestamp, lastHash, hash, data){
    this.timestamp = timestamp; // Zeitstempel
    this.lastHash = lastHash;  // Hash des vorhergehenden Blocks
    this.hash = hash; // eigener Hash
    this.data = data; // Daten
}

toString(){ // für Debugging ...
    return ` Block -
        Timestamp:  ${this.timestamp}
        Last Hash:  ${this.lastHash}
        Hash:       ${this.hash}
        Data:       ${this.data} 
    `;
}

static genesis(){
    return new this("Genesis time","----","abcd#123",[]);
}

static mineBlock(lastBlock,data){ // weitere Blocks in der Chain
    const timestamp = Date.now(); // Zeit im ms seit 01.01.1970
    const lastHash = lastBlock.hash;
    const hash = "toDo HASH";

    return new this(timestamp,lastHash,hash,data);
}
    
static hash(timestamp,lastHash,data){ // Erzeugen des HASH
    return SHA256(`${timestamp}${lastHash}${data}`).toString();
}




}

module.exports = Block;
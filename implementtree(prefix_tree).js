class trieNode {
  constructor(word) {
    this.children = {};
    this.endOfWord = false;
  }
}

const Trie = function () {
  this.root = new trieNode();
};

Trie.prototype.insert = function (word) {
  let cur = this.root;

  for (let ch of word) {
    if (!cur.children[ch]) {
      cur.children[ch] = new trieNode();
    }
    cur = cur.children[ch];
  }
  cur.endOfWord = true;
};

Trie.prototype.search = function (word) {
  let cur = this.root;

  for (let ch of word) {
    if (!cur.children[ch]) return false;

    cur = cur.children[ch];
  }
  return cur.endOfWord;
};

Trie.prototype.startsWith = function (prefix) {
  let cur = this.root;

  for (let ch of prefix) {
    if (!cur.children[ch]) {
      return false;
    }
    cur = cur.children[ch];
  }
  return true;
};

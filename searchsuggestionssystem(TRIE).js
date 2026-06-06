class Node {
  constructor() {
    this.children = new Map();
    this.sug = [];
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(word) {
    let cur = this.root;

    for (let ch of word) {
      if (!cur.children.has(ch)) {
        cur.children.set(ch, new Node());
      }
      cur = cur.children.get(ch);

      if (cur.sug.length < 3) {
        cur.sug.push(word);
      }
    }
  }
  getSuggestions(prefix) {
    let cur = this.root;

    for (let ch of prefix) {
      if (!cur.children.has(ch)) return [];
      cur = cur.children.get(ch);
    }
    return cur.sug;
  }
}

const suggestedProducts = function (products, searchWord) {
  products.sort();

  const trie = new Trie();

  for (const p of products) {
    trie.insert(p);
  }

  let res = [];
  let prefix = "";

  for (const ch of searchWord) {
    prefix += ch;
    res.push(trie.getSuggestions(prefix));
  }

  return res;
};

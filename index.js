// run `node index.js` in the terminal

console.log(`Hello Node.js v${process.versions.node}!`);

const info = {
  title: 'Once Upon a Time',
  protagonist: {
    name: 'Emma Swan',
    enemies: [
      { name: 'Regina Mills', title: 'Evil Queen' },
      { name: 'Cora Mills', title: 'Queen of Hearts' },
      { name: 'Peter Pan', title: "The boy who wouldn't grow up" },
      { name: 'Zelena', title: 'The Wicked Witch' },
    ],
  },
};

const {
  title,
  protagonist: {
    name: name,
    enemies: [, , , { title: enemyTitle, name: enemyName }],
  },
} = info;

console.log(
  `${enemyTitle} (${enemyName}) is an enemy to ${name} in "$5 JavaScript Features I Couldn't Code Without"`
);

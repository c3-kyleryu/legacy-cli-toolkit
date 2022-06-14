'use strict';

const { slugify, titleCase, wordCount } = require('./index');

function main(argv) {
  const [cmd, ...rest] = argv;
  const input = rest.join(' ');
  switch (cmd) {
    case 'slug':
      return slugify(input);
    case 'title':
      return titleCase(input);
    case 'count':
      return String(wordCount(input));
    default:
      return 'usage: lct <slug|title|count> <text>';
  }
}

if (require.main === module) {
  process.stdout.write(main(process.argv.slice(2)) + '\n');
}

module.exports = { main };

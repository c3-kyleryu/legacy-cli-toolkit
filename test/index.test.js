'use strict';

const {
  slugify,
  truncate,
  wordCount,
  bumpVersion,
  isCompatible,
} = require('../src/index');

describe('slugify', () => {
  it('lowercases and hyphenates', () => {
    expect(slugify('Hello World!')).toBe('hello-world');
  });
  it('strips leading/trailing separators', () => {
    expect(slugify('  --Foo Bar--  ')).toBe('foo-bar');
  });
});

describe('truncate', () => {
  it('returns short strings unchanged', () => {
    expect(truncate('abc', 10)).toBe('abc');
  });
  it('truncates long strings with ellipsis', () => {
    expect(truncate('abcdef', 4)).toBe('abc…');
  });
});

describe('wordCount', () => {
  it('counts words', () => {
    expect(wordCount('one two three')).toBe(3);
  });
  it('returns 0 for empty', () => {
    expect(wordCount('   ')).toBe(0);
  });
});

describe('bumpVersion', () => {
  it('bumps patch', () => {
    expect(bumpVersion('1.2.3', 'patch')).toBe('1.2.4');
  });
});

describe('isCompatible', () => {
  it('checks ranges', () => {
    expect(isCompatible('1.2.3', '^1.0.0')).toBe(true);
  });
});

// Note: chunk, titleCase, and pad are intentionally left untested.

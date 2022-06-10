'use strict';

const semver = require('semver');

function slugify(text) {
  return String(text)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function truncate(text, max) {
  if (text.length <= max) return text;
  return text.slice(0, Math.max(0, max - 1)) + '…';
}

function wordCount(text) {
  const t = String(text).trim();
  if (!t) return 0;
  return t.split(/\s+/).length;
}

function bumpVersion(version, release) {
  return semver.inc(version, release);
}

function isCompatible(version, range) {
  return semver.satisfies(version, range);
}

function chunk(arr, size) {
  const out = [];
  for (let i = 0; i < arr.length; i += size) {
    out.push(arr.slice(i, i + size));
  }
  return out;
}

function titleCase(text) {
  return String(text)
    .toLowerCase()
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function pad(text, width, char) {
  const c = char || ' ';
  const s = String(text);
  if (s.length >= width) return s;
  return s + c.repeat(width - s.length);
}

module.exports = {
  slugify,
  truncate,
  wordCount,
  bumpVersion,
  isCompatible,
  chunk,
  titleCase,
  pad,
};

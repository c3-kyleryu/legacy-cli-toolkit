# legacy-cli-toolkit

A small CLI toolkit for common text and file utilities.

## Installation

```bash
npm install -g legacy-cli-toolkit
```

## Usage

```bash
lct slug "Hello World"     # -> hello-world
lct title "hello world"    # -> Hello World
lct count "one two three"  # -> 3
```

## API

The package also exports helpers: `slugify`, `truncate`, `wordCount`,
`bumpVersion`, `isCompatible`, `chunk`, `titleCase`, `pad`.

## Testing

```bash
npm test
```

## License

Apache-2.0

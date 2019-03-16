# 🦕 normalize-oldies.css

**A small addition to [normalize.css](https://github.com/necolas/normalize.css) that adds support for old browsers again.**

Normalize old *and* modern browsers.

## Usage

Download [normalize-oldies.css](normalize-oldies.css) or [minified](normalize-oldies.min.css) (≈ 1ko).  Link *after* [normalize.css](https://github.com/necolas/normalize.css).

```html
<link rel="stylesheet" href="normalize.css">
<link rel="stylesheet" href="normalize-oldies.css">
```

## Browser support

- Mozilla Firefox 3+
- Apple Safari 4+
- Opera 10+
- Internet Explorer 6+

## Normalize.css support and versioning

- normalize-oldies.css follow normalize.css *major* version and has been reviewed up to this version. [semver](https://semver.org/spec/v2.0.0.html) *update and patch version numbers* are not related to normalize.css versions.
- normalize-oldies.css should be added to the same major version of normalize.css to prevent conflicts or duplicates.

## Notes

- **abbr[title]**. To normalize old *and* modern browsers, *normalize-oldies.css*  set `<abbr>` to : `border-bottom: 1px solid dotted;`No other rule has been overwritten.
- **When IE was the king.** All spaces normalization between Internet Explorer 6 and 7 (normalize.css v.1.0.0) were not kept.
- **Support oldies?** In 2018, around 0.4% of 4 billions internet users still use Internet Explorer 10-.

## Contribute

see. [CONTRIBUTING](CONTRIBUTING.md)

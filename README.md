# 🦕 normalize-oldies.css

**A small addition (< 1ko) to re-add old browsers support to recent versions of [normalize.css](https://github.com/necolas/normalize.css).**

## usage

Download [normalize-oldies.css](normalize-oldies.css) or [minified](normalize-oldies.min.css) [< 1ko].  Link after [normalize.css](https://github.com/necolas/normalize.css).

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

- normalize-oldies.css follow only normalize.css *major* version and has been reviewed up to this version.
- normalize-oldies.css should be used with a same major version of normalize.css to prevent conflicts or duplicates (see notes.)
- normalize-oldies.css *update and patch versions* are not related to normalize.css versions.

## Notes

- **abbr[title]**. To normalize old *and* modern browsers, *normalize-oldies.css*  set `<abbr>` to : `border-bottom: 1px solid dotted;`No other rule has been overwritten.
- **When IE was the king.** All spaces normalization between Internet Explorer 6 and 7 (normalize.css v.1.0.0) were not kept. At this time the "normalizers" were too brave.
- **Support oldies?** In 2018, around 0.4% of 4 billions internet users still use Internet Explorer 10 and less.

## Contribute

see. [CONTRIBUTING](CONTRIBUTING.md)

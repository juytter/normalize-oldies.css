# 🦕 normalize oldies

**Normalize old *and* modern browsers.**
A small addition to [normalize.css](https://github.com/necolas/normalize.css) that adds support for old browsers again.


## Usage

### Add oldies
Download/Link [normalize--add-oldies.css](normalize--add-oldies.css) or [minified](min/normalize-add-oldies.min.css) *after* [normalize.css](https://github.com/necolas/normalize.css).

```html
<link rel="stylesheet" href="normalize.css">
<link rel="stylesheet" href="normalize--add-oldies.css">
```
### LTS version (normalize.css + oldies, included)
Download/link [normalize--lts.css](normalize--lts.css) / [minified](min/normalize--lts.min.css) ≈3ko  

```html
<link rel="stylesheet" href="normalize--lts.css">
```

## Browser support

- Mozilla Firefox 3+
- Apple Safari 4+
- Opera 10+
- Internet Explorer 6+

## Normalize.css versioning

- normalize--add-oldies.css follow normalize.css *([SemVer](https://semver.org/spec/v2.0.0.html)) major* version (only) and has been reviewed up to this version.
- normalize--add-oldies.css *update and patch SemVer versions*  are not related to normalize.css versions.

## Notes

- **abbr[title]**. To normalize old *and* modern browsers *normalize--add-oldies.css*  set `<abbr>` to : `border-bottom: 1px solid dotted;`No other style has been overwritten.
- **When IE was the king.** All spaces normalization between Internet Explorer 6 to 7 (normalize.css v.1.0.0) were not kept.
-  **Oldies** In 2018, around 0.4% of 4 billions internet users still use Internet Explorer 10-

## Contribute

see. [CONTRIBUTING](CONTRIBUTING.md)

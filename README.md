# 🦕 normalize oldies

**Normalize old *and* modern browsers.**
A small addition to [normalize.css](https://github.com/necolas/normalize.css) that adds support for old browsers again.


## Usage

Download and link [normalize--add-oldies.css](normalize--add-oldies.css) or [minified](min/normalize--add-oldies.min.css) *after* [normalize.css](https://github.com/necolas/normalize.css).

```html
<link rel="stylesheet" href="normalize.css">
<link rel="stylesheet" href="normalize--add-oldies.css">
```

## Browser support

- Mozilla Firefox 3+
- Apple Safari 4+
- Opera 10+
- Internet Explorer 6+

## Normalize versions

- normalize--add-oldies.css version follows normalize.css *major version*  ([semver](https://semver.org/spec/v2.0.0.html)) and has been reviewed up to this major version.
- normalize--add-oldies.css *update and patch* versions ([semver](https://semver.org/spec/v2.0.0.html)) are not related to normalize.css update and patch versions.

## Notes

- **abbr[title]**. To normalize old *and* modern browsers *normalize--add-oldies.css*  set `<abbr>` to : `border-bottom: 1px solid dotted;`No other style has been overwritten.
- **When IE was the king.** All spaces normalization support between Internet Explorer 6 to 7 (normalize.css v.1.0.0) has been drop.
-  **Oldies** In 2018, around 0.4% of 4 billions internet users still use Internet Explorer 10-

## Contribute

see. [CONTRIBUTING](CONTRIBUTING.md)

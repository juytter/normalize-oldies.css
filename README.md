# 🦕 Normalize oldies

**Normalize old *and* modern browsers.**
A small addition to [normalize.css](https://github.com/necolas/normalize.css) that adds support for old browsers again.


## Usage

Download [normalize--oldies.css](dist/normalize--oldies.css) and link  *after* [normalize.css](https://github.com/necolas/normalize.css).

```html
<link rel="stylesheet" href="normalize.css">
<link rel="stylesheet" href="normalize---oldies.css">
```

## Browser support

- Mozilla Firefox 3+
- Apple Safari 4+
- Opera 10+
- Internet Explorer 6+

## Normalize versions

*normalize--oldies* [major](https://semver.org/spec/v2.0.0.html) version follows normalize.css version and has been reviewed up to this version. *Update or patch* versions are not related to normalize.css.

## Notes

- `**abbr[title]**`. To normalize old *and* modern browsers *normalize--oldies.css*  set `<abbr>` to : `border-bottom: 1px solid dotted;`No other style has been overwritten.
- In 2019, around 0.4% of 4 billions internet users still use Internet Explorer 10-
- Additional notes see. [normalize README](https://github.com/necolas/normalize.css/blob/master/README.md).

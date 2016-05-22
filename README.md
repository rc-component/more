# rc-more

rc-more Component for [react](https://facebook.github.io/react/).

Build with [webpack](https://webpack.github.io/) and [CSS Modules](https://github.com/css-modules/css-modules)

[Story book](https://rc-component.github.io/more/)

Scrollable element should have `scrollable` className or `window` is used for scroll event listening.

## Install

    npm i rc-more -S

## Usage

```
<More
  disale={this.state.disable}
  callback={this.load} />
```

## Props

name    | type   | default    | description
------- | ------ | ---------- | ------------
disable | boolean| false      | disale more
*callback|func | | callback function for laoding
spinnerType | string | gray   | type of ispinner
useIspinner | boolean | true | set to false to use children of More instead of
ispinner

Use `props.style` and `props.className` for apply style to more element.

# License

MIT

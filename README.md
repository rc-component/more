# rc-more

rc-more Component for [react](https://facebook.github.io/react/).

Build with [webpack](https://webpack.github.io/) and [CSS Modules](https://github.com/css-modules/css-modules)

[Story book](https://rc-component.github.io/rc-more/)

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

Use `props.style` and `props.className` for apply style to more element.

# License

MIT

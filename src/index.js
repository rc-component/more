import React from 'react'
import ReactDom from 'react-dom'
import offset from 'page-offset'
import style from './style.css'
import PropTypes from 'prop-types'
import Ispinner from 'rc-ispinner'
import cx from 'classnames'
import debounce from 'debounce'
import events from 'event'
import classes from 'classes'

class More extends React.Component {
  static defaultProps = {
    disable: false,
    spinnerType: 'gray'
  }
  static propTypes = {
    spinnerType: PropTypes.oneOf(['white', 'gray']),
    disable: PropTypes.bool,
    callback: PropTypes.func.isRequired
  }
  constructor(props) {
    super(props)
    this.height = props.style ? props.style.height || 20 : 20
  }
  componentDidMount() {
    this.el = ReactDom.findDOMNode(this)
    this.scrollable = findScrollable(this.el)
    this._onscroll = debounce(this.onscroll.bind(this), 100)
    events.bind(this.scrollable, 'scroll', this._onscroll)
  }
  componentWillUnmount() {
    events.unbind(this.scrollable, 'scroll', this._onscroll)
  }
  onscroll() {
    if (this.loading || this.props.disable) return
    if (!check(this.scrollable)) return
    let self = this
    this.el.style.visibility = 'visible'
    this.loading = true
    let cb = function () {
      self.loading = false
      self.el.style.visibility = 'hidden'
    }
    let res = this.props.callback(cb)
    if (res && typeof res.then === 'function') {
      res.then(cb, cb)
    }
  }
  render() {
    let props = this.props
    let className = cx(style.more, props.className)
    let display = props.disable ? 'none' : 'block'
    let children
    if (props.children) {
      children = props.children
    } else {
      children = <div className={style.center}>
                    <Ispinner
                      animating={!props.disable}
                      type={props.spinnerType}
                      width={this.height}/>
                </div>
    }
    return (
      <div className={className} style={{display: display}}>
        {children}
      </div>
    )
  }
}

/**
 * check if scrollable scroll to end
 */
function check(scrollable) {
  if (scrollable === document.body) {
    let D = document
    // viewport height
    let vh = Math.max(D.documentElement.clientHeight, window.innerHeight || 0)
    let docHeight = Math.max(D.body.scrollHeight, D.documentElement.scrollHeight)
    if (docHeight - vh == offset.y) return true
  } else if (scrollable.scrollHeight - scrollable.scrollTop - scrollable.clientHeight < 20) {
    return true
  }
  return false
}

let body = document.body
function findScrollable (el) {
  while(el) {
    el = el.parentNode
    if (classes(el).has('scrollable')) return el
    if (el === body) return window
  }
}

export default More


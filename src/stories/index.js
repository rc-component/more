import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Iscroll from 'rc-iscroll'
import More from '../index';

const boxStyles = {
  height: 500,
  position: 'relative',
  backgroundColor: '#eee'
}

let callback = () => {
  return new Promise(function (resolve) {
    setTimeout(resolve, 1000)
  })
}

storiesOf('More', module)
  .add('More shown', () => {
    let List = React.createClass({
      render: function () {
          return (
          <Iscroll style={{height: 200, width: 100, position: 'relative'}}>
            <div style={boxStyles}>
            </div>
            <More callback={callback}/>
          </Iscroll>
        )
      }
    })
    return React.createElement(List)
  })
  .add('disable', () => {
    let List = React.createClass({
      getInitialState: function () {
        return {disable: false}
      },
      toggleState: function () {
        this.setState({
          disable: !this.state.disable
        })
      },
      render: function () {
          return (
          <div>
            <button onClick={this.toggleState}>toggle</button>
            <Iscroll style={{height: 200, width: 100, position: 'relative'}}>
              <div style={boxStyles}>
              </div>
              <More callback={callback} disable={this.state.disable}/>
            </Iscroll>
          </div>
        )
      }
    })
    return React.createElement(List)
  })
  .add('my children', () => {
    return (
      <Iscroll style={{height: 200, width: 100, position: 'relative'}}>
        <div style={boxStyles}>
        </div>
        <More callback={callback} useIspinner={false}>
          <span>loading</span>
        </More>
      </Iscroll>
    )
  })

import React from 'react'
import ReactDom from 'react-dom'

import Intro from './intro'

const root = document.querySelector('#root')

ReactDom.render(React.createElement(Intro), root)

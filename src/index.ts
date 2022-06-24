import React from 'react'
import ReactDom from 'react-dom'

import intro from './intro'

const root = document.querySelector('#root')

ReactDom.render(React.createElement(intro), root)

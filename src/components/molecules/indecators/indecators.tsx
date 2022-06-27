import { ReactNode, useEffect, useState } from 'react'
import styled from 'styled-components'

import Text from '../../atoms/text/text'

interface IndecatorsProps {
  indecators: string[]
}

const Sindecator = styled.div`
  margin-bottom: 20px;
`

const Indecators = ({ indecators }: IndecatorsProps) => {
  // 추 후 custom hook으로 리팩토링 필요
  const [nodeIndecators, setNodeIndecators] = useState<ReactNode[]>([])

  useEffect(() => {
    const nodes = indecators.map((indecator: string, index: number) => {
      const end = indecator.indexOf('의')
      return (
        <Sindecator key={index}>
          <strong>{indecator.substr(0, end)}</strong>
          {indecator.substr(end, indecator.length)}
        </Sindecator>
      )
    })
    setNodeIndecators([nodes])
  }, [indecators])

  return (
    <div>
      {nodeIndecators.map((indecator, index) => (
        <Text key={index} desc={indecator} fontSize="32px" />
      ))}
    </div>
  )
}

export default Indecators

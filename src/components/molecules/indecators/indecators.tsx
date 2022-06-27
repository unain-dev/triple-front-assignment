import styled from 'styled-components'

import Text from '../../atoms/text/text'

interface IndecatorsProps {
  indecator: string
}

const IndecatorWrppaer = styled.div`
  margin-bottom: 20px;
`

const Indecators = ({ indecator }: IndecatorsProps) => {
  // 추 후 custom hook으로 리팩토링 필요
  const storngStartIdx = indecator.indexOf('만')
  const strongEndIdx = indecator.indexOf('의')

  return (
    <>
      {indecator !== undefined && (
        <IndecatorWrppaer>
          <strong>
            <Text
              desc={indecator.substring(0, storngStartIdx)}
              fontSize="32px"
              fontColor="rgb(58, 58, 58)"
            />
            <Text
              desc={indecator.substring(storngStartIdx, strongEndIdx)}
              fontSize="32px"
              fontColor="rgb(58, 58, 58)"
            />
          </strong>
          <Text
            desc={indecator.substring(strongEndIdx, indecator.length)}
            fontSize="32px"
            fontColor="rgb(58, 58, 58)"
          />
        </IndecatorWrppaer>
      )}
    </>
  )
}

export default Indecators

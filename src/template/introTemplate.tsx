import styled from 'styled-components'

const Grid = styled.div`
  min-width: 1200px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Center = styled.div`
  width: 1040px;
`

const IntroTemplate = ({ introModule }) => {
  return (
    <Grid>
      <Center>{introModule}</Center>
    </Grid>
  )
}

export default IntroTemplate

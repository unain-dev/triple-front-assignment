import Image from './components/atoms/image/image'
import Logo from './asset/triple2x.png'
import Text from './components/atoms/text/text'

function intro() {
  return (
    <div>
      <div>home</div>
      <Image imgPath={Logo} />
      <Text desc="hihi" />
    </div>
  )
}

export default intro

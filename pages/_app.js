import { Logo } from '../components/ui/atoms/logo'
import '../styles/globals.css'
import { FlexBox } from '../styles/styled-components'

function MyApp({ Component, pageProps }) {
  return <FlexBox>
      <Logo />
      <Component {...pageProps}/>
  </FlexBox>
}

export default MyApp

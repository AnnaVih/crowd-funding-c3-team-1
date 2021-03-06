import { Logo } from '../components/ui/atoms/logo'
import '../styles/globals.css'
import { FlexBox } from './styled-components'

function MyApp({ Component, pageProps }) {
  return <>
    <FlexBox style={{height: "100%"}}>
      <Logo />
      <Component {...pageProps} />
    </FlexBox>
  </>
}

export default MyApp

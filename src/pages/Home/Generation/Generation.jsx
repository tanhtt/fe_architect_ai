import AppHeader from '../AppHeader/AppHeader'
import Content from './Content/Content'
import AppFooter from '../AppFooter/AppFooter'
import ImageSlider from '../ImageSlider'

export default function Generation() {
    return (
      <>
        <AppHeader/>
        <Content/>
        <ImageSlider/>
        <AppFooter/>
      </>
    )
  }
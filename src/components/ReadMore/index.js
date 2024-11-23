// Write your code here
import {useState} from 'react'

import {
  ReadMoreLessContainer,
  MainHeading,
  ReadMoreLessPara,
  ReactHooksImg,
  Description,
  ReadMoreBtn,
} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props

  const [text, displayText] = useState(false)

  const btnText = text ? 'Read Less' : 'Read More'

  const onButtonClicked = () => {
    displayText(prevState => !prevState)
  }

  const description = text
    ? reactHooksDescription
    : reactHooksDescription.slice(0, 170)

  return (
    <ReadMoreLessContainer>
      <MainHeading>React Hooks</MainHeading>
      <ReadMoreLessPara>Hooks are a new addition to React</ReadMoreLessPara>
      <ReactHooksImg
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
        alt="react hooks"
      />
      <Description>{description}</Description>
      <ReadMoreBtn onClick={onButtonClicked}>{btnText}</ReadMoreBtn>
    </ReadMoreLessContainer>
  )
}

export default ReadMore

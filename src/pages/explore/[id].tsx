import { useRouter } from "next/router"
import { FooterNavigation } from '../../ui/molecules/footer-navigation'
import { StyledDetails } from "../../styles/styled-components"
import { Button } from "../../ui/atoms/button"
import { FlexBox, StyledCardFooter } from '../../ui/molecules/card/styled-components'

export const dummyData = [
  {
    id: "crowdfunding-platforms",
    img: 'images/crowdfunding.jpg',
    title: "Crowdfunding Platforms",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  {
    id: "obtaining-financing",
    img: 'images/finance.jpg',
    title: 'Money na karmane',
    description: "Money na karmane (Money in pocket) is progressive accounting software. What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

  },
{
  id: "obtaining-financing-two",
  img: 'images/designer.jpg',
  title: 'Finance',
  description: "Money na karmane (Money in pocket) is progressive accounting software. What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
},
  {
    id: "glossary",
    img: 'images/glossary.jpg',
    title: 'Local newspaper',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  {
    id:"networking",
    img: 'images/networking.jpg',
    title: 'Networking',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  }
]

const ProjectDetails = () => {
  const router = useRouter()
  const {id} = router.query
  const project = dummyData.find(item => item.id === id)
  return <>{
    project ? (
      <StyledDetails>
        <img src={`/${project.img}`}/>
        <h1>{project.title}</h1>
        <p>{project.description}</p>
      </StyledDetails>
    ) : <p>Project not found</p>
  }
    <StyledCardFooter>
    <FlexBox>
        <Button linkTo="/explore/glossary" isRounded={false} styleType="primary" name="Previouse" />
        <Button linkTo="/explore/crowdfunding-platforms" isRounded={false} styleType="secondary" name="Next" />
    </FlexBox>
    </StyledCardFooter>
    <FooterNavigation />
  </>
}

export default ProjectDetails
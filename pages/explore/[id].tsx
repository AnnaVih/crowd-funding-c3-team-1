import { useRouter } from "next/router"
import { StyledDetails } from "../../styles/styled-components"

export const dummyData = [
  {
    id: "crowdfunding-platforms",
    img: 'images/test.jpeg',
    title: "Crowdfunding Platforms",
    description: "Crowdfunding platforms description test"
  },
  {
    id: "obtaining-financing",
    img: 'images/test.jpeg',
    title: 'Obtaining Financing',
    description: "Obtaining Financing description test"

  },
  {
    id: "glossary",
    img: 'images/test.jpeg',
    title: 'Glossary',
    description: "Glossary description test"
  },
  {
    id:"networking",
    img: 'images/test.jpeg',
    title: 'Networking',
    description: "Networking description test"
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
  </>
}

export default ProjectDetails
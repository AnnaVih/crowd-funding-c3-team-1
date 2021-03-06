import { useRouter } from "next/router"
import { dummyData } from "../../dummyData"
import { StyledDetails } from "./styled-components"

const ProjectDetails = () => {
  const router = useRouter()
  const {id} = router.query
  const {description, title, img} =  dummyData.find(item => item.id === id)
  return (
    <StyledDetails>
      <img src={`/${img}`}/>
      <h1>{title}</h1>
      <p>{description}</p>
  </StyledDetails>
  )
}

export default ProjectDetails
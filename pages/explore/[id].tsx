import { useRouter } from "next/router"
import { dummyData } from "../../dummyData"

const ProjectDetails = () => {
  const router = useRouter()
  const {id} = router.query
  const {description, title, img} =  dummyData.find(item => item.id === id)
  return (
    <div>
      <img src={`/${img}`}/>
      <h1>{title}</h1>
      <p>{description}</p>
  </div>
  )
}

export default ProjectDetails
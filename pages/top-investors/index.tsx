import { Card } from "../../components/ui/molecules/card"
import { FooterNavigation } from "../../components/ui/molecules/footer-navigation"
import { Person } from "../../components/ui/molecules/person"
import { StyledExploreList } from "../../styles/styled-components"

const dummyData = [
  {
    id: "1",
    img: 'images/investor.jpeg',
    name: "Adam Smith",
    description: "One of the top investors"
  },
  {
    id: "2",
    img: 'images/investor-2.jpeg',
    name: "Jane Do",
    description: "One of the top investors"
  },
  {
    id: "3",
    img: 'images/investor.jpeg',
    name: "Mike Black",
    description: "One of the top investors"
  },
  {
    id: "4",
    img: 'images/investor-2.jpeg',
    name: "Hanna V",
    description: "One of the top investors"
  },
  {
    id: "5",
    img: 'images/investor.jpeg',
    name: "Adam Smith",
    description: "One of the top investors"
  },
  {
    id: "6",
    img: 'images/investor-2.jpeg',
    name: "Jane Do",
    description: "One of the top investors"
  },
  {
    id: "7",
    img: 'images/investor.jpeg',
    name: "Mike Black",
    description: "One of the top investors"
  },
  {
    id: "8",
    img: 'images/investor-2.jpeg',
    name: "Hanna V",
    description: "One of the top investors"
  },
]

const TopInvestors = () => (
  <>
    <StyledExploreList>
      {dummyData.map(({id, name, description, img}) => {
        return <Person imgPath={`/${img}`} name={name} description={description} key={id}/>
      })}
    </StyledExploreList>
    <FooterNavigation />
  </>
)

export default TopInvestors
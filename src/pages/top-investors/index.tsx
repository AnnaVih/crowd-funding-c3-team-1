import { FooterNavigation } from "../../ui/molecules/footer-navigation"
import { Person } from "../../ui/molecules/person"
import { StyledExploreList, FlexBox } from "../../styles/styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const dummyData = [
  {
    id: "1",
    img: 'images/inv1.jpg',
    name: "Eva Smith",
    description: "One of the top investors",
    mail: "test@test.com"
  },
  {
    id: "2",
    img: 'images/inv2.jpg',
    name: "Joe Bloggs",
    description: "One of the top investors",
    mail: "test@test.com"
  },
  {
    id: "3",
    img: 'images/inv3.jpg',
    name: "Molly Ly",
    description: "One of the top investors",
    mail: "test@test.com"
  },
  {
    id: "4",
    img: 'images/inv4.jpg',
    name: "Hanna Montana",
    description: "One of the top investors",
    mail: "test@test.com"
  },
  {
    id: "5",
    img: 'images/inv5.jpg',
    name: "Freddy Smith",
    description: "One of the top investors",
    mail: "test@test.com"
  },
  {
    id: "6",
    img: 'images/inv6.jpg',
    name: "Ivan Ivanov",
    description: "One of the top investors",
    mail: "test@test.com"
  },
  {
    id: "7",
    img: 'images/inv7.jpg',
    name: "Mike Reez",
    description: "One of the top investors",
    mail: "test@test.com"
  },
  {
    id: "8",
    img: 'images/inv8.jpg',
    name: "Amy V",
    description: "One of the top investors",
    mail: "test@test.com"
  },
]

const TopInvestors = () => (
  <>
    <StyledExploreList>
      {dummyData.map(({id, name, description, img}) => {
        return <Person imgPath={`/${img}`} name={name} description={description} key={id}/>
        
      })}
    <FlexBox>
        <div><FontAwesomeIcon icon={faEnvelope} /></div>
    </FlexBox>
    </StyledExploreList>
    <FooterNavigation />
  </>
)

export default TopInvestors
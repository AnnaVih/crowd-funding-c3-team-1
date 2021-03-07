import React from 'react'
import { Card } from '../../ui/molecules/card'
import { StyledExploreList } from "../../styles/styled-components"
import { FooterNavigation } from '../../ui/molecules/footer-navigation'
import { FilterListNav } from '../../ui/molecules/filter-list-nav'

export const dummyData = [
  {
    id: "crowdfunding-platforms",
    img: 'images/crowdfunding.jpg',
    title: "Crowdfunding",
    days: 20,
    total: 600,
    leftToInvest: 100,
    type: "Crowdfunding",
    isFavourite: false
  },
  {
    id: "obtaining-financing",
    img: 'images/finance.jpg',
    days: 11,
    total: 600,
    leftToInvest: 100,
    title: "Money na karmane",
    type: "Financing",
    isFavourite: true
  },
  {
    id: "obtaining-financing-two",
    img: 'images/designer.jpg',
    days: 10,
    total: 800,
    leftToInvest: 200,
    title: 'Financing',
    type: "Financing",
    isFavourite: true
  },
  {
    id: "glossary",
    img: 'images/glossary.jpg',
    title: 'Local newspaper',
    days: 4,
    total: 1000,
    leftToInvest: 500,
    type: "Media",
    isFavourite: false
  },
  {
    id:"networking",
    img: 'images/networking.jpg',
    title: 'Networking',
    days: 22,
    total: 22000,
    leftToInvest: 1100,
    type: "Networking",
    isFavourite: true
  }
]

const Explore = () => {
  const [list, setList] = React.useState(dummyData)
  const [listType, setListType] = React.useState("all")

  const onClickHandler = (filterBy: string) => {
    if(filterBy === "all"){
      setList(dummyData)
    } else {
      const filteredList = list.filter(item => item.isFavourite)
      setList(filteredList)
    }
    setListType(filterBy)
  }

  const onLikeClcickHandler = (projectID) => {
    const updatedListWithFav = list.map(item => {
      if(item.id === projectID) {
        return {
          ...item, 
          isFavourite: !item.isFavourite
        }
      }
      return item
    })
    setList(updatedListWithFav)
  }
  
  return (
    <>
      <FilterListNav listType={listType} onClick={onClickHandler}/>
      <StyledExploreList>
        {list.map(({title, days, total, type, img, leftToInvest, isFavourite, id}) => {
          return <Card onClick={onLikeClcickHandler} id={id} isFavourite={isFavourite} days={days} total={total} type={type} leftToInvest={leftToInvest} linkTo={`/explore/${id}`} title={title} key={id} imagePath={img}/>
        })}
      </StyledExploreList>
      <FooterNavigation />
    </>
  )
}

export default Explore
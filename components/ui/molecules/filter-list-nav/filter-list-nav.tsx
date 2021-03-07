import React from 'react'
import { FilterListButton, FilterList } from "./styled-components"

export const FilterListNav = ({
  onClick,
  listType
}: {
  onClick: (listType: string) => void
  listType: string
}) => {  
  return (
    <FilterList>
      <FilterListButton className={listType === "all" ? "active": ""} onClick={() => onClick("all")}>All Startups</FilterListButton>
      <FilterListButton className={listType === "favourite" ? "active": ""} onClick={() => onClick("favourite")}>Favourites</FilterListButton>
    </FilterList>
  )
}
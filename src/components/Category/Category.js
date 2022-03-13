import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemListContainer from "../item-list-container/ItemListContainer"

const Category = () => {
  const {}= useParams
  
    const [selectedCategory, setSelectedCategory]= useState("")
    
    const {id}= useParams();
    useEffect (()=>{
      setSelectedCategory(id)
    })

  return (
    <ItemListContainer category = {id}></ItemListContainer>
  )
}

export default Category
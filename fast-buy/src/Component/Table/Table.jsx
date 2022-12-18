
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'
import React from 'react'
import { useContext } from "react";
import { json } from 'react-router-dom';
import { CartContext } from "../../Context/CartContext"

const data=JSON.parse(localStorage.getItem("adminProducts"))||[];
const names=JSON.parse(localStorage.getItem("buyername"))||[];
const TablePage = () => {

  console.log(data)


  const {arr} = useContext(CartContext);
 console.log(arr)
  


  return (
    <div>
      <h1>Recent Orders</h1>
      <TableContainer>
  <Table variant='simple'>
    <TableCaption>Imperial to metric conversion factors</TableCaption>
    <Thead>
      <Tr>
        <Th>User Name</Th>
        <Th>Products</Th>
        <Th isNumeric>Price</Th>
      </Tr>
    </Thead>
    <Tbody>
    
      {
        data.map((items)=>{
        return  <Tr>
          <Td fontFamily="'Philosopher', sans-serif;">{names}</Td>
          <Td fontFamily="'Philosopher', sans-serif;">{items.title}</Td>
          <Td fontFamily="'Philosopher', sans-serif;">${items.price}</Td>
          </Tr>
        })
      }
  
    </Tbody>
    <Tfoot>
      <Tr>
        <Th>User Name</Th>
        <Th>Products</Th>
        <Th isNumeric>Price</Th>
      </Tr>
    </Tfoot>
  </Table>
</TableContainer>
    </div>
  )
}

export default TablePage

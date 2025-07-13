import React from 'react'
import Container from '../components/Container'
import CartSection from '../components/CartSection'
import BreadCrumb from '../components/BreadCrumb'

function MyCart() {
  return (
    <Container>
        <BreadCrumb currentPageTitle={"My Cart"} />
        <CartSection/>
    </Container>
  )
}

export default MyCart
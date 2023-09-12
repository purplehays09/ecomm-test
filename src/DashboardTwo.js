import { Card, Carousel, Col, List, Row, Skeleton } from 'antd'
import React, { useState } from 'react'

export default function DashboardTwo() {
  const [products, setProducts] = useState("1")

  const images = [
    "https://images.unsplash.com/photo-1693165074594-774461bc1564?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1694424045049-b858e566c21a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
    "https://images.unsplash.com/photo-1691848749210-5d06893a53db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1694060851779-7b4bc50e6a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2OHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1693924336223-867179381c70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2OXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1694288224576-6e5bb077de6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMDl8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1694425182811-f6c1b0d8fe83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMTR8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1694402315953-f9fdabd9a5f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMTh8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
  ]
  return(
    <>
      <h1>Dashboard Two</h1>
      {
        <List
        grid={{
          gutter: 2,
          xs: 1,
          sm: 2,
          md: 3,
          lg: 3,
          xl: 4,
          xxl: 8,
        }}
        dataSource={['1', '2', '3', '4', '5', '6', '7', '8']}
        renderItem={item => (
          <Card key={item} style={{margin: '2%'}} hoverable cover={<img alt="example" src={images[item - 1]} />} onClick={() => setProducts(item)}>
            <Card.Meta title={`Category ${item}`} description={`Description ${item}`} />
          </Card> 
        )}
        />
      }
      {
        <Card title={`Category ${products}`} bordered={false}>

          <List
            grid={{
              gutter: 2,
              xs: 1,
              sm: 2,
              md: 3,
              lg: 3,
              xl: 6,
              xxl: 12,
            }}
            dataSource={[...Array(20).keys()]}
            renderItem={item => (
              <Card style={{margin: '1%'}} bordered={true} hoverable cover={<img alt="example" src={images[products - 1]} />}>
                  <Card.Meta title={`Product ${item}`} description={`Description ${item}`} />
                </Card>
              )
            }
          />
        </Card>
      }
    </>
  )
}

import { Card, Carousel, Col, Image, Row, Skeleton, Space } from 'antd'
import React from 'react'

export default function DashboardOne() {

  return(
    <>
      <h1>Dashboard One</h1>
      {
        [...Array(8)].map((_, index) => {
          return (
            <Card title={`Category ${index + 1}`} bordered={true} hoverable style={{margin: '1%'}}>
              {
                index % 2 === 0 ?
                  <Row gutter={[4,4]}>

                    <Col span={12}>    
                      <Skeleton.Image/>
                      <Skeleton/>
                      <Skeleton/>
                      <Space direction="horizontal">
                        <Skeleton.Button/>
                        <Skeleton.Button/>
                        <Skeleton.Button/>
                      </Space>
                    </Col>
                    <Col span={12}>
                      <Carousel autoplay>
                      <Image
                        src="https://images.unsplash.com/photo-1694204022565-fbefde9b9fc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                        />
                      <Image
                        src="https://images.unsplash.com/photo-1693975524886-2938d6a71905?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                        />
                      <Image
                        src="https://images.unsplash.com/photo-1693858837984-c0a8829fe3d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                        />
                      <Image
                        src="https://images.unsplash.com/photo-1682686581663-179efad3cd2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                        />
                      </Carousel>
                    </Col>
                  </Row>
                  :
                  <Row gutter={[4,4]}>
                  <Col span={12}>
                    <Carousel autoplay>
                    <Image
                      src="https://images.unsplash.com/photo-1694204022565-fbefde9b9fc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                      />
                    <Image
                      src="https://images.unsplash.com/photo-1693975524886-2938d6a71905?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                      />
                    <Image
                      src="https://images.unsplash.com/photo-1693858837984-c0a8829fe3d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                      />
                    <Image
                      src="https://images.unsplash.com/photo-1682686581663-179efad3cd2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                      />
                    </Carousel>
                  </Col>
                  <Col span={12}>    
                      <Skeleton.Image/>
                      <Skeleton/>
                      <Skeleton/>
                      <Space direction="horizontal">
                        <Skeleton.Button/>
                        <Skeleton.Button/>
                        <Skeleton.Button/>
                      </Space>
                    </Col>
                </Row>
              }
            </Card>
          )
        })
      }
    </>
  )
}

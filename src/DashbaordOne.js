import { Card, Carousel, Col, Row, Skeleton } from 'antd'
import React from 'react'

export default function DashboardOne() {

  const contentStyle = {
    margin: 0,
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
  return(
    <>
      <h1>Dashboard One</h1>
      {
        [...Array(8)].map((_, index) => {
          return (
            <Card title={`Category ${index + 1}`} bordered={true} hoverable>
              <Row gutter={[4,4]}>
                <Col span={9}>    
                  <Skeleton.Image/>
                  <Skeleton/>
                </Col>
                <Col span={15}>
                  <Carousel autoplay>
                  <div>
                    <h3 style={contentStyle}>1</h3>
                  </div>
                  <div>
                    <h3 style={contentStyle}>2</h3>
                  </div>
                  <div>
                    <h3 style={contentStyle}>3</h3>
                  </div>
                  <div>
                    <h3 style={contentStyle}>4</h3>
                  </div>
                  </Carousel>
                </Col>
              </Row>
            </Card>
          )
        })
      }
    </>
  )
}

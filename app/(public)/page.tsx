import { Button } from "@ui/index";
import { Card, Carousel, Col, Row } from "antd";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Carousel>
        <Image
          src="/images/Slide 16_9 - 1.png"
          alt="slide 1"
          width={1920}
          height={660}
        />
        <Image
          src="/images/Slide 16_9 - 2.png"
          alt="slide 2"
          width={1920}
          height={660}
        />
        <Image
          src="/images/Slide 16_9 - 3.png"
          alt="slide 3"
          width={1920}
          height={660}
        />
      </Carousel>
      <section className="w-full max-w-screen-xl mt-10 mx-auto">
        <Row gutter={16} className="w-full">
          <Col span={8}>
            <Card title="User content" bordered={false}>
              Card content
            </Card>
          </Col>
          <Col span={8}>
            <Card title="No authorizathion required" bordered={false}>
              Card content
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Public route" bordered={false}>
              Card content
            </Card>
          </Col>
        </Row>
      </section>
    </>
  );
}

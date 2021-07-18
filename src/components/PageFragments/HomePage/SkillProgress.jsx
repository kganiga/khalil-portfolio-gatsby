import React from 'react';
import { Row, Col } from 'antd';
import ProgressBar from '../../Progress';

const SkillsProgress = () => (
  <div>
    <h2>My Skills</h2>
    <Row gutter={[20, 20]}>
      <Col xs={24} sm={24} md={12}>

        <ProgressBar
          percent={90}
          text="Adobe Experience Manager"
        />
        <ProgressBar
          percent={85}
          text="Adobe Campaign Manager"
        />
        <ProgressBar
          percent={(85)}
          text="JAVA"
        />
        <ProgressBar
          percent={75}
          text="Oxygen XML Editor"
        />
      </Col>
      <Col xs={24} sm={24} md={12}>
        <ProgressBar
          percent={70}
          text="React"
        />
        <ProgressBar
          percent={75}
          text="jQuery"
        />
        <ProgressBar
          percent={78}
          text="CSS"
        />
        <ProgressBar
          percent={70}
          text="Google App Script"
        />
      </Col>
    </Row>
  </div>
);

export default SkillsProgress;

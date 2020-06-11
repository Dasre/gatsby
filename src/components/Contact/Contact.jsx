import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Contact = () => {
  return (
    <section id="contact">
      <Container>
        <Title title="work experience" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            <h2>行果整合有限公司 2019/11 - 2020/02</h2>
            <p className="contact-wrapper__text">
              (1)將原使用VB攥寫的程式改使用Laravel框架呈現，並將原T-SQL改寫成MySQL。
              <br />
              (2)將使用Codeigniter框架的後台系統進行BUG處理與新功能開發。
              <br />
              (3)義大醫院內部專案前端頁面開發。
              <br />
              (4)土城醫院電子收據系統前後台頁面開發。
            </p>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;

import React from "react";
import Layout from "app/layout";

export const index = () => {
  return (
    <Layout>
      <h1>
        <span className="anim-rotate-hand">👋</span> Привет, преподаватель
      </h1>
      <p>
        Если вы находитесь на этой странице, то вы уже работаете с нами! Здесь вы найдете руководство для учителя,
        которое поможет вам успешно пройти второй этап - пробное занятие с
        администратором. Давайте посмотрим, что же вас ждет:
      </p>
    </Layout>
  );
};

export default index;

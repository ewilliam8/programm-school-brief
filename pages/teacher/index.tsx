import React from "react";
import Layout from "app/layout";
import { NextPage } from "next";

export const index: NextPage = () => {
  return (
    <Layout>
      <h1>
        <span className="anim-rotate-hand">👋</span> Привет, преподаватель
      </h1>
      <p>
        Если вы находитесь на этой странице, то вы уже работаете с нами!
      </p>
      <h2>
        Материалы для учеников
      </h2>
    </Layout>
  );
};

export default index;

{/* <p>
Индивидуальные занятия в Школе Программ Как правило, преподаватели не
задают на дом задания, все изучается в классе, но могут попросить
выполнить задание дома по усмотрению преподавателя. Разбор таких заданий
производится на следующем уроке.
</p> */}

import React from "react";
import Layout from "app/layout";
import { Button } from "/shared/Button";
import Link from "next/link";
import { NextPage } from "next";

export const index: NextPage = () => {
  return (
    <Layout>
      <h1>
        <span className="anim-rotate-hand">👋</span> Привет, соискатель
      </h1>
      <p>
        Если вы находитесь на этой странице, то вы уже прошли первый этап
        технического собеседования! Здесь вы найдете ответы на частые вопросы
        будущих учителей и руководство для учителя, которое поможет вам успешно
        пройти второй этап - пробное занятие с администратором. Давайте
        посмотрим, что же вас ждет:
      </p>
      <h2>Шаг 1. Введение в преподавание</h2>
      <p>
        Эта статья поможет тебе понять, преимущества индивидуальной работы с
        учеником в Школе Программ!
      </p>
      <Link href="applicant/introduce">
        <Button>Введение в преподавание</Button>
      </Link>
      <h2>Шаг 2. Структура пробного занятия</h2>
      <p>
        Эта статья поможет тебе понять, как успешно провести пробный урок с
        администратором
      </p>
      <Link href="applicant/structure">
        <Button>Структура пробного занятия</Button>
      </Link>
      <h2>Шаг 3. Требования к проведению урока</h2>
      <p>
        Эта статья поможет тебе понять, что нужно можно делать на пробном уроке, а что не следует
      </p>
      <Link href="applicant/requirements">
        <Button>Требования к проведению урока</Button>
      </Link>
    </Layout>
  );
};

export default index;

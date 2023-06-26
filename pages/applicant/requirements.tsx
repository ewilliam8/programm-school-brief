import { NextPage } from "next";
import React from "react";
import Layout from "/app/layout";
import { Button } from "/shared/Button";
import { useRouter } from "next/router";
import Image from "next/image";

const Requirements: NextPage = () => {
  const router = useRouter();
  return (
    <Layout>
      <Button onClickFn={router.back}>Назад</Button>
      <h1>Требования к проведению урока</h1>
      <Image
        src="/images/requirements/requirements.png"
        alt="Требования к проведению"
        layout="responsive"
        width={809}
        height={759}
      />
      <h2>Подготовка к пробному уроку</h2>
      <p>
        Представьте, что на пробном уроке будет замечательный ребенок в возрасте
        10 лет, который еще не познакомился с программированием. Родители могут
        заинтересоваться курсами программирования для своего ребенка, но сам
        маленький ученик может не понимать, что это такое и как он может
        использовать этот навык.
        <br />
        <br />
        Главная цель пробного урока - заинтересовать ребенка, показать, что мир
        IT может быть интересным и простым. Важно не перегружать его сложными
        терминами и определениями, чтобы не оттолкнуть его. Мы хотим показать,
        что программирование логично и увлекательно, и что, например, благодаря
        ему можно создавать увлекательные игры, в которые можно играть вместе со
        своими одноклассниками.
      </p>
      <h2>Пример</h2>
      <p>
        Как ответить на вопрос ребенка, что такое переменная?
        <br />
        <br />
        ❌ Неправильно: это символическое имя, которое связывается с
        определенным значением или объектом...
        <br />
        <br />
        ✔️ Правильно: Например, представь, что у тебя есть бутылка. В эту
        бутылку можно налить воду и она станет полной воды. Если вылить воду из
        бутылки, то она станет пустой. Теперь можешь налить в бутылку газировку,
        и в ней будет газировка. Если вылить газировку и насыпать в бутылку
        песок, то внутри бутылки будет песок.
        <br />
        <br />
        Таким образом, бутылка - это переменная, а ее содержимое изменяется в
        зависимости от того, что мы в нее помещаем. Название переменной - это
        то, как мы называем нашу бутылку, чтобы знать, что именно в ней
        находится.
      </p>
      <h2>Список основных критериев:</h2>
      <ul>
        <li>
          Важно сохранять позитивное настроение как на первом, так и на всех
          последующих уроках.
          <br />
          <br />
          Стоит избегать ошибки задавать ребенку сухие вопросы и молчать после
          его ответа.
        </li>
        <li>
          Важно удерживать внимание ребенка на уроке. Для этого можно задавать
          ему вопросы о его настроении и прошедшем времени, когда урок
          начинается или что-то загружается. Однако не стоит отвлекать его,
          когда он думает. Важно удерживать внимание ребенка на уроке. В начале
          урока можно спросить: "как твои дела?" и "как втое настроение?" Для
          этого можно задавать ему вопросы о его настроении и прошедшем времени,
          когда урок начинается или что-то загружается. Однако не стоит
          отвлекать его, когда он думает.
        </li>
        <li>
          На пробных уроках лучше вместе открывать страницу в браузере с
          питоном, а не скидывать прямые ссылки. Это сделает урок более
          интерактивным и обучающим.
        </li>
        <li>
          Рисование - отличный способ объяснения материала. В зуме это делается
          очень легко через Комментирование, рисование. Наглядно понятно, что
          есть коробка с ручкой. Еще лучше попросить ученика нарисовать коробку
          с ручкой. Если ученик рисует и у него получается некрасиво, это только
          поднимает настроение
        </li>
        <li>
          Если вы хотите, чтобы ребенок понимал материал, используйте свой
          собственный опыт. Например, если вы объяснили про коробку с ручкой,
          попросите ребенка придумать свой образ, но использование коробки в
          качестве переменной уже недоступно. Если у ребенка возникают
          сложности, помогите ему придумать.
        </li>
        <li>
          Вы можете использовать любые примеры, которые помогут детям лучше
          понять материал.
        </li>
        <li>
          Переспрашивайте, как ребенок понял материал, просите его повторить то,
          что сказали вы.
          <br />
          <br />
          Иногда бывает так, что когда мы спрашиваем "Понятно?" и получаем ответ
          "Да", это не всегда значит, что ребенок действительно понимает.
          Возможно, ему стыдно признаться в том, что он не понимает, и поэтому
          соглашается, чтобы не показаться глупым. Поэтому, лучше уточнить, есть
          ли у него какие-то вопросы или нужны ли еще какие-то пояснения. Это
          поможет убедиться, что ребенок действительно понял материал и сможет
          его применять в будущем.
        </li>
        <li>
          Функция input - это компьютер спрашивает ученика, а print - компьютер
          говорит. Ребенку будет легче понимать разницу между этими двумя
          функциями, если вы объясните им эту концепцию.
        </li>
        <li>
          Дети любят удивляться и восхищаться технологическим прогрессом. На
          примере калькулятора можно показать, какой у нас мощный калькулятор и
          сделать такую операцию 2 ** 1000000. По итогу будет много цифр, для
          детей это технологический прогресс, что в компьютере помещается
          столько цифр. А потом еще можно сказать, что это еще малость и т.д.
        </li>
        <li>
          Python IDLE - это встроенные в питон редактор кода, который очень
          простой (загуглите), он идет сразу с установкой самого питона, это не
          IDE. После установки питона появляется 4 иконки, из них 1 - IDLE.
        </li>
        <li>
          В будущем с ребятами переходим на VS CODE. Если ребенок, например, сам
          установил Py Charm, например, то работаем на нем, это не самый важный
          пункт.
        </li>
      </ul>
    </Layout>
  );
};

export default Requirements;

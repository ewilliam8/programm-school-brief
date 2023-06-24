import "../app/globals.css"
import Layout from "../app/layout"

export default function Structure() {
  return (
    <Layout>
      <h1>Структура пробного занятия</h1>
      <img src="/images/structure/structure.png" alt="О структуре" />
      <p>
        <span className={"main-marker"}>Не нужно читать или учить наизусть.</span>{" "}
        Вместо этого, старайтесь понять суть прочитанного и передавайте своими
        словами, выражая радость жизни
      </p>
      <h2>Установка технического соединения</h2>
    </Layout>
  )
}

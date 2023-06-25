import React from "react";
import Layout from "app/layout";
import Image from "next/image";

export default function notFound() {
  return (
    <Layout>
      <div className="page404">
        <Image
          src="/images/general/404.png"
          alt="Страница не найдена"
          layout="responsive"
          width={1080}
          height={1080}
        />
      </div>
    </Layout>
  );
}

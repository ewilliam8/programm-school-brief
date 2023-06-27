import { FC, useState } from "react";
import styles from "./DownloadFile.module.scss";
import { Button } from "shared/Button";

type FilePreviewProps = {
  fileUrl: string;
  title: string;
  desc?: string;
};

export const DownloadFile: FC<FilePreviewProps> = ({ fileUrl, title, desc }) => {
  const [isDownloading, setDownloading] = useState(false);

  const handleDownloadClick = () => {
    setDownloading(true);
    const downloadLink = document.createElement("a");
    downloadLink.href = fileUrl;
    const fileName: string = fileUrl.split("/").pop() || "";
    downloadLink.download = fileName;
    downloadLink.click();
    setDownloading(false);
  };

  return (
    <div className={styles.FilePreview}>
      <div className={`${styles["img-and-title"]}`}>
        <img src="/icons/fi-rr-document.svg" alt="Превью файла" />
        <div className={`${styles.annotation}`}>
          <span className={`${styles["annotation-title"]}`}>
            {title}
          </span>
          <span className={`${styles["annotation-desc"]}`}>
            {desc}
          </span>
        </div>
      </div>
      <Button onClickFn={handleDownloadClick}>
        {isDownloading ? "Скачивание..." : "Скачать"}
      </Button>
    </div>
  );
};

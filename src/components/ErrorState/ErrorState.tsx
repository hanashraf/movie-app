import React from "react";
import styles from "./ErrorState.module.scss";
import Image from "next/image";
const ErrorState = () => {
  return (
    <div className={styles.errorState}>
      <Image src="/Error.png" alt="Error-image" width={75} height={75} />
      <div>Error</div>
      <div>Please check your connection or try again later</div>
    </div>
  );
};

export default ErrorState;

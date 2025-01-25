"use client";

import React from "react";
import { useEffect, useCallback } from "react";
import styles from "./ErrorState.module.scss";
import Image from "next/image";
import { notification } from "antd";
import type { NotificationArgsProps } from "antd";
import TErrorStateProps from "@/types/Error";

const ErrorState = ({ errorType }: TErrorStateProps) => {
  type NotificationPlacement = NotificationArgsProps["placement"];

  const [api, contextHolder] = notification.useNotification();

  const openNotification = useCallback(
    (placement: NotificationPlacement) => {
      api.info({
        message: `Error`,
        description: `${errorType}`,
        placement,
      });
    },
    [api, errorType]
  );
  useEffect(() => {
    openNotification("top");
  }, [openNotification]);

  return (
    <>
      <div className={styles.errorState}>
        <Image src="/Error.png" alt="Error-image" width={75} height={75} />
        <div>Error</div>
        <div>Please check your connection or try again later</div>
      </div>
      {contextHolder}
    </>
  );
};

export default ErrorState;

import React from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import styles from "./Loading.module.css";

const Loading: React.FC = () => (
  <div className={styles.loadingContainer}>
    <Spin indicator={<LoadingOutlined spin />} size="large" />
  </div>
);

export default Loading;

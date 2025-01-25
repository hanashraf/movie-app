import React from "react";
import { BorderBottomOutlined, BorderTopOutlined } from "@ant-design/icons";
import { Button, notification, Space } from "antd";
import type { NotificationArgsProps } from "antd";

type NotificationPlacement = NotificationArgsProps["placement"];

const Toaster: React.FC = () => {
  const [api, contextHolder] = notification.useNotification();

  const openNotification = (placement: NotificationPlacement) => {
    api.info({
      message: `Notification ${placement}`,
      description:
        "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
      placement,
    });
  };

  return (
    <>
      {contextHolder}
      <Space>
        <Button
          type="primary"
          onClick={() => openNotification("top")}
          icon={<BorderTopOutlined />}
        >
          top
        </Button>
        <Button
          type="primary"
          onClick={() => openNotification("bottom")}
          icon={<BorderBottomOutlined />}
        >
          bottom
        </Button>
      </Space>
    </>
  );
};

export default Toaster;

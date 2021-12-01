import React, { useEffect, useState } from "react";
import { Button } from "antd";
import cn from "classnames";
import "./index.style.css";

const ModuleTypeItem = ({ data, activeId, onChange, disabled }) => {
  const {
    moduleMetadataGroupList = [] // 元数据类型
  } = data;

  console.info("activeId--", activeId);
  return (
    <div
      className={cn({
        "module-type-item": true,
        "module-type-item-disable": disabled,
        active: data.id === activeId
      })}
      onClick={() => onChange(data)}
    >
      <div className="title">{data.name}</div>
      <div className="btns">
        {moduleMetadataGroupList.map((item = {}) => {
          return <Button>{item.name}</Button>;
        })}
      </div>
    </div>
  );
};

export default ModuleTypeItem;

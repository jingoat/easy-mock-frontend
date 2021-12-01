import React, { useEffect, useState } from "react";
import ModuleTypeItem from "./ModuleTypeItem";

const ModuleTypeSelect = props => {
  const {
    value,
    onChange,
    isEdit, // false为新增，true为编辑
    data = []
  } = props;

  // useEffect(() => {
  //   if (!value && data.length) {
  //     onChange && onChange(data[0].id, data[0]);
  //   }
  // }, [data]);

  const onTypeChange = data => {
    !isEdit && onChange && onChange(data.id, data);
  };

  return (
    <div>
      {data.map(item => {
        return (
          <ModuleTypeItem
            key={item.title}
            data={item}
            onChange={onTypeChange}
            activeId={value}
            disabled={isEdit}
          />
        );
      })}
    </div>
  );
};

export default ModuleTypeSelect;

import React, { useEffect, useState } from "react";
import ModuleTypeSelect from "./ModuleTypeSelect";

const initData = [
  {
    id: 1,
    moduleMetadataGroupList: [
      { id: 1, name: "btn1" },
      { id: 2, name: "btn2" }
    ]
  },
  {
    id: 2,
    moduleMetadataGroupList: [
      { id: 11, name: "btn11" },
      { id: 22, name: "btn22" }
    ]
  }
];

function App() {
  const [value, setValue] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [data, setData] = useState(initData);

  const onChange = (id, data) => {
    console.info("id-----", id);
    console.info("data-----", data);
    setValue(id);
  };

  useEffect(() => {}, []);

  return (
    <div className="App">
      <div>test</div>
      <ModuleTypeSelect
        value={value}
        onChange={onChange}
        isEdit={isEdit}
        data={data}
      />
    </div>
  );
}

export default App;

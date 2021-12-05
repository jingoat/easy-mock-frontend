import React, { useEffect, useState, useRef } from "react";
import { Button, Input, Modal, message } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import "./MockPage.style.css";

const { TextArea } = Input;
const { confirm } = Modal;

function MockPage() {
  const [allData, setAllData] = useState([]);

  const [currentData, setCurrentData] = useState("");

  const [currentId, setCurrentId] = useState("");

  const [addModalVisible, setAddModalVisible] = useState(false);

  const [addPath, setAddPath] = useState("");

  const [addData, setAddData] = useState("");

  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    getAllData();
  }, []);

  const getAllData = path => {
    if (path) {
      fetch(`api/find${path.indexOf("/") === 0 ? path : "/" + path}`, {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(function(response) {
          return response.text();
        })
        .then(function(res) {
          const { code } = JSON.parse(res);
          if (res && Number(code) === 0) {
            // console.info("res----------", res);
            setAllData(JSON.parse(res).data);
          } else {
            setAllData([]);
            setCurrentData("");
          }
        });
      return;
    }
    fetch("api/getAll", {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(function(response) {
        return response.text();
      })
      .then(function(res) {
        const { code } = JSON.parse(res);
        if (res && Number(code) === 0) {
          setAllData(JSON.parse(res).data);
        } else {
          setAllData([]);
          setCurrentData("");
        }
      });
  };

  const onClickDataItem = item => {
    setCurrentData(item.res_data);
    setCurrentId(item.id);
  };

  const onCurrentDataChange = e => {
    const value = e.target.value;
    setCurrentData(value);
  };

  const handleAddOpen = () => {
    setAddModalVisible(true);
  };

  const handleAddOk = () => {
    console.info("addData------------", addData);
    fetch(`api/add${addPath.indexOf("/") === 0 ? addPath : "/" + addPath}`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        mockData: JSON.stringify(JSON.parse(addData))
      })
    })
      .then(function(response) {
        return response.text();
      })
      .then(function(myJson) {
        // console.log(myJson);
        setAddModalVisible(false);
        getAllData();
      });
  };

  const handleAddCancel = () => {
    setAddModalVisible(false);
  };

  const onAddPathChange = e => {
    const value = e.target.value;
    setAddPath(value);
  };

  const onAddDataChange = e => {
    const value = e.target.value;
    setAddData(value);
  };

  const onDeleteCurrentItem = () => {
    if (!currentId) {
      message.warning("请点击选中某条数据");
      return;
    }
    confirm({
      title: "确定删除吗?",
      icon: <ExclamationCircleOutlined />,
      content: "",
      onOk() {
        fetch(`api/delete/${currentId}`, {
          method: "DELETE",
          mode: "cors",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            test: 1
          })
        })
          .then(function(response) {
            return response.text();
          })
          .then(function(myJson) {
            console.log(myJson);
            message.success("删除成功");
            getAllData();
            setCurrentId("");
            setCurrentData([]);
          });
      },
      onCancel() {
        console.log("Cancel");
      }
    });
  };

  const onUpdateCurrentItem = () => {
    if (!currentId) {
      message.warning("请点击选中某条数据");
      return;
    }
    fetch(`api/update/${currentId}`, {
      method: "PUT",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        mockData: JSON.stringify(JSON.parse(currentData))
      })
    })
      .then(function(response) {
        return response.text();
      })
      .then(function(myJson) {
        message.success("保存成功");
        getAllData();
        console.log(myJson);
      });
  };

  const onSearch = e => {
    const value = e.target.value;
    setSearchValue(value);
  };

  const onFindDataItem = () => {
    if (searchValue) {
      getAllData(searchValue);
      return;
    }
    getAllData();
  };

  return (
    <div className="mock-page">
      <div className="mock-top">
        <Input
          className="search-input"
          value={searchValue}
          onChange={onSearch}
        />
        <Button
          type="primary"
          className="search-btn mock-top-btn"
          onClick={onFindDataItem}
        >
          搜索
        </Button>
        <Button
          type="primary"
          className="add-btn mock-top-btn"
          onClick={handleAddOpen}
        >
          添加
        </Button>
      </div>
      <div className="mock-bottom">
        <div className="mock-bottom-left mock-bottom-item">
          {allData.map(item => {
            return (
              <a
                className="data-item"
                key={item.id}
                onClick={() => {
                  onClickDataItem(item);
                }}
              >
                {transferLevelToPath(item)}
              </a>
            );
          })}
        </div>
        <div className="mock-bottom-right mock-bottom-item">
          <Button
            type="primary"
            className="update-btn mock-top-btn"
            onClick={onUpdateCurrentItem}
          >
            保存
          </Button>
          <Button
            type="primary"
            className="delete-btn mock-top-btn"
            onClick={onDeleteCurrentItem}
          >
            删除
          </Button>
          <TextArea
            rows={60}
            className="text-area"
            value={currentData}
            onChange={onCurrentDataChange}
          />
        </div>
      </div>
      <Modal
        title="添加接口"
        visible={addModalVisible}
        onOk={handleAddOk}
        onCancel={handleAddCancel}
        className="add-modal"
        width={"80%"}
      >
        <Input
          value={addPath}
          onChange={onAddPathChange}
          placeholder="请输入接口路径"
        />
        <TextArea
          rows={25}
          className="add-text-area"
          value={addData}
          onChange={onAddDataChange}
          placeholder="请输入接口数据(标准JSON格式)"
        />
      </Modal>
    </div>
  );
}

export default MockPage;

function transferLevelToPath(item) {
  let path = "";
  const keys = Object.keys(item);
  keys.forEach(key => {
    if (key.indexOf("level") >= 0 && item[key]) {
      path += `/${item[key]}`;
    }
  });
  return path;
}

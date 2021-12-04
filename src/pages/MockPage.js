import React, { useEffect, useState, useRef } from "react";
import { Button, Input } from "antd";
import "./MockPage.style.css";

const { TextArea } = Input;

function MockPage() {
  useEffect(() => {}, []);

  return (
    <div className="mock-page">
      <div className="mock-top">
        <Input className="search-input" />
        <Button type="primary" className="search-btn mock-top-btn">
          搜索
        </Button>
        <Button type="primary" className="add-btn mock-top-btn">
          添加
        </Button>
      </div>
      <div className="mock-bottom">
        <div className="mock-bottom-left mock-bottom-item">
          <a className="data-item">/test1</a>
          <a className="data-item">/test1/test2</a>
          <a className="data-item">/test/test2/test3</a>
          <a className="data-item">/test/test2/test3/test4</a>
        </div>
        <div className="mock-bottom-right mock-bottom-item">
          <Button type="primary" className="update-btn mock-top-btn">
            保存
          </Button>
          <Button type="primary" className="delete-btn mock-top-btn">
            删除
          </Button>
          <TextArea rows={60} className="text-area" />
        </div>
      </div>
    </div>
  );
}

export default MockPage;

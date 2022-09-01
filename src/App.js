import React, { useState } from "react";
import { Button, Card } from "antd";
import "./index.css";
import "antd/dist/antd.css";
import { PlusCircleOutlined } from "@ant-design/icons";
import { v4 as uuidv4 } from 'uuid';
import ItemSelect from "./item";

export default function App() {
  const [augmentations, setAugmentations] = useState([
    {
      subType: "Japan",
      type: "country",
      id: '46456456456'
    }
  ]);


  console.log(augmentations);

  const onAddAugmentation = () => {
    setAugmentations((current) => {
      return [
        ...current,
        {
          id: uuidv4()
        }
      ];
    });
  };

  return (
    <Card title="Augmentations">
      {augmentations?.map((augmentation, index) => (
        <ItemSelect augmentation={augmentation} setAugmentations={setAugmentations} />
      ))}
      {augmentations?.length < 20 && (
        <div style={{ textAlign: "center" }}>
          <Button onClick={onAddAugmentation}>
            <PlusCircleOutlined />
          </Button>
        </div>
      )}
      <Button onClick={() => console.log(augmentations)}>Submit</Button>
    </Card>
  );
}

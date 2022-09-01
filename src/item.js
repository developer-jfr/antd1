import { useState } from "react";
import { Button, Col, Row, Select, Space } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";

const ItemSelect = ({ augmentation, setAugmentations }) => {
  const [augmentationType, setAugmentationType] = useState("");
  const [augmentationSubType, setAugmentationSubType] = useState(
    augmentation.subType || null
  );
  const onRemoveAugmentation = (index) => {
    setAugmentations((list) => list.filter((el) => el.id !== index));
  };
  const taxonomyGroups = {
    unit: [
      { value: "Text 1" },
      { value: "Text 2" },
      { value: "Text 3" },
      { value: "Text 4" },
    ],
    status: [{ value: "0" }, { value: "1" }],
    country: [{ value: "India" }, { value: "Australia" }, { value: "Japan" }],
  };
  const { Option } = Select;
  return (
    <Row  gutter={8}>
      <Col key={augmentation.id} span={11}>
        <Row>
          <Select
            value={augmentation.type}
            onChange={(data) => {
              augmentation.type = data;
              augmentation.subType = null;
              setAugmentationType(data);
            }}
            dropdownStyle={{ zIndex: 2000 }}
            style={{ width: 200 }}
            placeholder="Select a type"
          >
            {Object.keys(taxonomyGroups)?.map((item, index) => (
              <Option key={item} value={item}>
                {item}
              </Option>
            ))}
          </Select>
          <Space>
            <Select
              value={augmentation.subType}
              onChange={(demographic) => {
                augmentation.subType = demographic;
                setAugmentationSubType(demographic);
              }}
              onDropdownVisibleChange={() => {
                setAugmentationType(augmentation.type);
              }}
              dropdownStyle={{ zIndex: 2000 }}
              style={{ width: 200, paddingTop: 10 }}
              placeholder="Select a sub type"
            >
              {augmentationType?.length !== 0 &&
                taxonomyGroups[augmentationType]?.map((demographic, idx) => (
                  <Option key={demographic?.value} value={demographic?.value}>
                    {demographic.value}
                  </Option>
                ))}
            </Select>
            <Button
              type="danger"
              onClick={() => {
                onRemoveAugmentation(augmentation.id);
                setAugmentationSubType(null)
              }}
            >
              <CloseCircleOutlined />
            </Button>
          </Space>
        </Row>
      </Col>
    </Row>
  );
};

export default ItemSelect;

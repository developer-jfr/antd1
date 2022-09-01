import React, { useState } from "react";
import "./styles.css";
import "antd/dist/antd.css";
import { Form, Select, Button } from "antd";

export default function App() {
  const [selectedCompanyId, setSelectedCompanyId] = useState(undefined);

  const [form] = Form.useForm();

  const companies = [
    {
      companyID: 2,
      companyName: "TEST1"
    },
    {
      companyID: 7,
      companyName: "TEST2"
    }
  ];

  const products = [
    {
      companyId: 2,
      id: 1,
      productName: "TESTProduct1"
    },
    {
      companyId: 7,
      productName: "TESTProduct2",
      id: 2
    },
    {
      companyId: 7,
      id: 3,
      productName: "TESTProduct3"
    },
    {
      companyId: 7,
      id: 4,
      productName: "TESTProduct4"
    }
  ];

  const { Option } = Select;

  const handleFormValuesChange = (changedValues) => {
    const formFieldName = Object.keys(changedValues)[0];
    if (formFieldName === "company") {
      setSelectedCompanyId(changedValues[formFieldName]);
      form.setFieldsValue({ product: undefined }); //reset product selection
    }
  };

  const handleFinish = (values) => {
    console.log(values);
  };

  return (
    <div style={{ padding: 16 }}>
      <Form
        form={form}
        onFinish={handleFinish}
        onValuesChange={handleFormValuesChange}
      >
        <Form.Item label="Company" name="company">
          <Select>
            {companies.map((company) => (
              <Option key={company.companyID} value={company.companyID}>
                {company.companyName}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item label="Products" name="product">
          <Select>
            {products
              .filter((product) => product.companyId === selectedCompanyId)
              .map((product) => (
                <Option key={product.id} value={product.id}>
                  {product.productName}
                </Option>
              ))}
          </Select>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

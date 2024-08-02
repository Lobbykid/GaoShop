
import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="./images/contact.jpg"
            alt="contactus"
            style={{ width: "50%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          Một shop bán thú bông là một cửa hàng chuyên cung cấp các loại thú nhồi bông đa dạng và phong phú, phục vụ nhu cầu giải trí và trang trí của khách hàng. Thú nhồi bông thường được làm từ chất liệu vải mềm mại, với hình dáng mô phỏng các loài động vật hoặc các nhân vật hoạt hình, mang lại cảm giác dễ thương và ấm áp. Các shop bán thú bông thường có một không gian trưng bày rực rỡ và bắt mắt, với hàng loạt các mẫu mã, kích thước và màu sắc khác nhau, từ những chú gấu bông nhỏ xinh xắn đến những con thú bông khổng lồ.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;

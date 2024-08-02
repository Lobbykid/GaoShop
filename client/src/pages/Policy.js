import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/pass.jpg"
            alt="contactus"
            style={{ width: "50%" }}
          />
        </div>
        <div className="col-md-4">
          <p>An toàn tuyệt đối</p>
          <p>Phục vụ bảo mật 24/7</p>
          <p>Có thể lấy lại mật khẩu khi quên</p>
          <p>Tạo và kiểm soát dễ dàng</p>
          
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
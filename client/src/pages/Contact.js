import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const Contact = () => {
  return (
    <Layout>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="./images/about.jpg"
            alt="contactus"
            style={{ width: "50%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">Liên Hệ với chúng tối</h1>
          <p className="text-justify mt-2">
            Chúng tôi nhận mọi phản hồi của khách hàng 24/7
          </p>
          <p className="mt-3">
            <BiMailSend /> : tranvinhtinkt@gmail.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 0386691109
          </p>
          <p className="mt-3">
            <BiSupport /> : 1800-0000-0000 (toll free)
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
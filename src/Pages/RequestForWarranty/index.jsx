import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import RequestSubmit from "./RequestSubmit";
import WhereYouBuy from "./WhereYouBuy";
import FindProduct from "./FindProduct";
import BrandRequest from "./BrandRequest";
import ForgetLoginDetail from "./ForgetLoginDetail";
import RequestChooseProduct from "./RequestChooseProduct";
import ForgetOTPDetail from "./ForgetOTPDetail";
import RequestProductForm from "./RequestProductForm";
import SelectProduct from "./SelectProduct";
import RequestProductDetails from "./RequestProductDetails";
import WarrantySubmitted from "./WarrantySubmitted";

const RequestForWarranty = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search);
  const type = query.get("type");

  const handleClick = (type) => {
    query.set("type", type);
    navigate(`/warrantyrequest?${query.toString()}`);
  };

  return (
    <>
      <div className="mb-[500px] mt-[56px] mobile:mt-[22px]">
        {type === "whereyoubuy" ? (
          <WhereYouBuy handleClick={handleClick} />
        ) : type === "findproduct" ? (
          <FindProduct handleClick={handleClick} />
        ) : type === "brandrequest" ? (
          <BrandRequest handleClick={handleClick} />
        ) : type === "forgetlogin" ? (
          <ForgetLoginDetail handleClick={handleClick} />
        ) : type === "requestchooseproduct" ? (
          <RequestChooseProduct handleClick={handleClick} />
        ) : type === "forgetotpdetail" ? (
          <ForgetOTPDetail handleClick={handleClick} />
        ) : type === "selectProduct" ? (
          <SelectProduct handleClick={handleClick} />
        ) : type === "requestProductDetails" ? (
          <RequestProductDetails handleClick={handleClick} />
        ) : type === "requestproductform" ? (
          <RequestProductForm handleClick={handleClick} />
        ) : type === "warrantySubmitted" ? (
          <WarrantySubmitted handleClick={handleClick} />
        ) : (
          <RequestSubmit handleClick={handleClick} />
        )}
      </div>
    </>
  );
};

export default RequestForWarranty;

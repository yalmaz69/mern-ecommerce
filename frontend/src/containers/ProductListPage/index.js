import React from "react";
import Layout from "../../components/Layout";
import getParams from "../../utils/getParams";
import Jewellery from "./JewelleryPage";
import ProductPage from "./ProductPage";
import ProductStore from "./ProductStore";
import "./style.css";
import MenuHeader from "../../components/MenuHeader";

/**
 * @author
 * @function ProductListPage
 **/

const ProductListPage = (props) => {
  const renderProduct = () => {
    console.log(props);
    const params = getParams(props.location.search);
    let content = null;
    switch (params.type) {
      case "store":
        content = <ProductStore {...props} />;
        break;
      case "page":
        content = <ProductPage {...props} />;
        break;
      default:
        content = <Jewellery {...props} />;
    }

    return content;
  };

  return <Layout>
    <MenuHeader />
      {renderProduct()}
    </Layout>;
};

export default ProductListPage;

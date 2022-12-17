import React, { useContext, useEffect } from "react";
import AsSeenOnInstagram from "../../components/AsSeenOnInstagram";
import Container50 from "../../components/common/Container50";
import CustomerReviews from "../../components/CustomerReviews";
import FeaturedContext from "../../components/FeaturedContext";
import Header from "../../components/Header/Header";
import ProductPageSuggestion from "../../components/ProductPageSuggestions";
import ProductView from "../../components/ProductView";
import QuickView from "../../components/QuickView/QuickView";
import styles from "./styles.module.css";

const ProductPage = () => {
  const { product, featuredItems } = useContext(FeaturedContext);

  useEffect(() => {
    document.body.style.overflow = "auto";
  }, []);

  return (
    <div className={styles.ProductPageContainer}>
      {product && <QuickView popupItem={product}></QuickView>}
      <Header
        headerBackground={"/assets/images/productPageHeader.png"}
        headerClass={styles.productPageHeader}
      ></Header>
      <Container50>
        <div className={styles.secondaryContainer}>
          <p className={styles.mainTextHeader}>
            I have taste grilled meats around the world. Before i will guide you
            to the various technologies (gas barbecues, charcoal barbecues,
            Mongolian, sauces, recipes ) i will tell you about the Greek way.
          </p>
          <p className={styles.mainTextSecondary}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </Container50>
      <ProductView />
      <Container50>
        <p className={styles.middleText}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry’s standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </Container50>
      <AsSeenOnInstagram />
      <CustomerReviews />
      <ProductPageSuggestion
        featuredItems={featuredItems}
        currentId={product.id}
      />
    </div>
  );
};

export default ProductPage;

export const CARD_TYPE = {
  PRODUCT: "Product",
  EXHIBITION: "Exhibition",
  BRAND: "Brand",
  CATEGORY: "Category",
};

export const getCardImageContent = (info) => {
  const { type } = info;
  let image, title;
  if (type === CARD_TYPE.BRAND) {
    title = info.brand_name;
    image = info.brand_image_url;
  } else if (type === CARD_TYPE.CATEGORY) {
    title = `# ${info.title}`;
    image = info.image_url;
  } else {
    title = info.title;
    image = info.image_url;
  }
  return { title, image };
};

export const getCardContent = (info) => {
  const {
    type,
    title,
    price,
    discountPercentage,
    sub_title,
    brand_name,
    follower,
  } = info;

  let titleLeft = "",
    titleRight = "",
    detail = "",
    className = "default";

  if (type === CARD_TYPE.PRODUCT) {
    titleLeft = title;
    titleRight = `${discountPercentage}%`;
    detail = `${Number(price).toLocaleString()}원`;
    className = "product";
  } else if (type === CARD_TYPE.EXHIBITION) {
    titleLeft = title;
    detail = sub_title;
    className = "exhibition";
  } else if (type === CARD_TYPE.BRAND) {
    titleLeft = brand_name;
    titleRight = "관심고객수";
    detail = follower.toLocaleString();
    className = "brand";
  } else if (type === CARD_TYPE.CATEGORY) {
    titleLeft = `# ${title}`;
    className = "category";
  }

  return {
    titleLeft,
    titleRight,
    detail,
    className,
  };
};

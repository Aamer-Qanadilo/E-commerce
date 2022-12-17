import React from "react";
import Popup from "../common/Popup";
import QuickView from "./QuickView";

const PopupQuickView = ({ popupItem: item, setPopupItem }) => {
  return (
    <Popup>
      <QuickView popupItem={item} setPopupItem={setPopupItem}></QuickView>
    </Popup>
  );
};

export default PopupQuickView;

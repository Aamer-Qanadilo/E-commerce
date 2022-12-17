import { FormControl, FormControlLabel, TextField } from "@mui/material";
import React from "react";
import Container50 from "../common/Container50";
import SectionTitle from "../common/SectionTitle";
import Review from "./Review";

const reviews = [
  {
    name: "Ahmad",
    rate: 4.5,
    date: "February 18, 2017",
    text: `Millions of Americans turn to Lasik Surgery when their vision is less than perfect and they’re tired of being tied down to wearing glasses or contacts. What part of the eye is it that may be causing all your vision trouble? Your cornea! When the shape of your cornea is irregular, the image on your retina is blurry and out-of-focus. The cornea is a part of your eye that works to focus light and projects an image on the retina. This focusing of light is called refraction. The 3 main types of refractive errors are myopia (nearsightedness), hyperopia (farsightedness) and astigmatism. `,
  },
  {
    name: "Ameer",
    rate: 4,
    date: "February 18, 2017",
    text: `Millions of Americans turn to Lasik Surgery when their vision is less than perfect and they’re tired of being tied down to wearing glasses or contacts. What part of the eye is it that may be causing all your vision trouble? Your cornea! When the shape of your cornea is irregular, the image on your retina is blurry and out-of-focus. The cornea is a part of your eye that works to focus light and projects an image on the retina. This focusing of light is called refraction. The 3 main types of refractive errors are myopia (nearsightedness), hyperopia (farsightedness) and astigmatism. `,
  },
];

const CustomerReviews = () => {
  return (
    <Container50>
      <SectionTitle sectionHeader="Customer Reviews" />
      {reviews.map((review) => (
        <Review reviewItem={review} />
      ))}
    </Container50>
  );
};

export default CustomerReviews;

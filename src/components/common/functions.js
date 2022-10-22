const findStars = (itemStars) => {
  let stars = itemStars;
  let starsContainer = [];
  for (let i = 0; i < 5; i++) {
    if (stars >= 0.9)
      starsContainer.push(
        <li>
          <i className="fa-solid fa-star"></i>
        </li>,
      );
    else if (stars >= 0.25)
      starsContainer.push(
        <li>
          <i className="fa-solid fa-star-half-stroke"></i>
        </li>,
      );
    else
      starsContainer.push(
        <li>
          <i className="fa-regular fa-star"></i>
        </li>,
      );
    stars--;
  }
  return [...starsContainer];
};

export default {
  findStars,
};

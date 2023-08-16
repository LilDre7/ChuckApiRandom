import React, { useState, useEffect } from "react";
import axios from "axios";

const ChuckNorrisCategories = () => {
  // Este categories me trae las frases random
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [joke, setJoke] = useState("");

  const URLCATEGORY = "https://api.chucknorris.io/jokes/categories";

  useEffect(() => {
    axios
      .get(URLCATEGORY)
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      axios
        .get(
          `https://api.chucknorris.io/jokes/random?category=${selectedCategory}`
        )
        .then((response) => {
          setJoke(response.data.value);
        })
        .catch((error) => {
          console.error("Error fetching joke:", error);
        });
    }
  }, [selectedCategory]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="p-8 bg-gray-200 m-4 border-2 rounded-lg ">
      <select
        name="select"
        value={selectedCategory}
        className="p-2 border text-black border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
        onChange={(e) => handleCategoryClick(e.target.value)}
      >
        <option value="">Select a category</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      {selectedCategory && (
        <div className="mt-4 text-black">
          <h3 className="text-lg font-semibold">
            Selected Category: {selectedCategory}
          </h3>
          <p className="mt-2 text-gray-700">{joke}</p>
        </div>
      )}
    </div>
  );
};

export default ChuckNorrisCategories;

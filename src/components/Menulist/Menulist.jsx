import React, { useState } from "react";
import "./Menulist.css";
import menubg from "../../assets/menubg.WebP";
const menuData = {
  south: {
    Starters: [
      { name: "Idli (2 pcs)", price: 80, type: "veg" },
      { name: "Medu Vada", price: 90, type: "veg" },
      { name: "Masala Vada", price: 85, type: "veg" },
      { name: "Mini Idli with Sambar", price: 120, type: "veg" },
      { name: "Chicken 65", price: 360, type: "nonveg" },
      { name: "Gobi 65", price: 220, type: "veg" },
      { name: "Paneer 65", price: 280, type: "veg" },
      { name: "Prawn 65", price: 480, type: "nonveg" },
      { name: "Egg Bonda", price: 140, type: "nonveg" }
    ],

    Soups: [
      { name: "Rasam", price: 120, type: "veg" },
      { name: "Tomato Rasam", price: 130, type: "veg" },
      { name: "Pepper Rasam", price: 140, type: "veg" },
      { name: "Chicken Rasam", price: 190, type: "nonveg" },
      { name: "Mutton Bone Soup", price: 260, type: "nonveg" },
      { name: "Sweet Corn Soup", price: 180, type: "veg" },
      { name: "Hot & Sour Soup", price: 200, type: "veg" },
      { name: "Chicken Sweet Corn Soup", price: 230, type: "nonveg" }
    ],

    "Main Course": [
      { name: "Masala Dosa", price: 120, type: "veg" },
      { name: "Plain Dosa", price: 100, type: "veg" },
      { name: "Rava Dosa", price: 140, type: "veg" },
      { name: "Mysore Masala Dosa", price: 150, type: "veg" },
      { name: "Paneer Butter Masala", price: 340, type: "veg" },
      { name: "Chettinad Chicken", price: 450, type: "nonveg" },
      { name: "Andhra Chicken Curry", price: 420, type: "nonveg" },
      { name: "Fish Curry", price: 490, type: "nonveg" },
      { name: "Mutton Rogan Josh", price: 520, type: "nonveg" }
    ],

    RiceAndBiryani: [
      { name: "Vegetable Biryani", price: 280, type: "veg" },
      { name: "Chicken Biryani", price: 450, type: "nonveg" },
      { name: "Mutton Biryani", price: 520, type: "nonveg" },
      { name: "Fish Biryani", price: 480, type: "nonveg" },
      { name: "Rava Upma", price: 100, type: "veg" },
      { name: "Lemon Rice", price: 120, type: "veg" },
      { name: "Curd Rice", price: 140, type: "veg" },
      { name: "Sambar Rice", price: 160, type: "veg" },
      { name: "Pongal", price: 180, type: "veg" },
      { name: "Chicken Pulao", price: 320, type: "nonveg" }
    ]
  },
  north: {

    Starters: [
      { name: "Paneer Tikka", price: 320, type: "veg" },
      { name: "Hara Bhara Kebab", price: 280, type: "veg" },
      { name: "Chicken Tikka", price: 420, type: "nonveg" },
      { name: "Seekh Kebab", price: 450, type: "nonveg" },
      { name: "Tandoori Prawns", price: 580, type: "nonveg" },
      { name: "Aloo Tikki", price: 200, type: "veg" },
      { name: "Fish Amritsari", price: 490, type: "nonveg" },
      { name: "Paneer Malai Tikka", price: 340, type: "veg" }
    ],

    Soups: [
      { name: "Tomato Shorba", price: 180, type: "veg" },
      { name: "Cream of Mushroom", price: 200, type: "veg" },
      { name: "Chicken Shorba", price: 220, type: "nonveg" },
      { name: "Mutton Soup", price: 260, type: "nonveg" },
      { name: "Sweet Corn Soup", price: 190, type: "veg" },
      { name: "Hot & Sour Soup", price: 210, type: "veg" }
    ],

    "Main Course": [
      { name: "Dal Makhani", price: 300, type: "veg" },
      { name: "Shahi Paneer", price: 360, type: "veg" },
      { name: "Kadai Paneer", price: 350, type: "veg" },
      { name: "Butter Chicken", price: 450, type: "nonveg" },
      { name: "Chicken Tikka Masala", price: 480, type: "nonveg" },
      { name: "Mutton Rogan Josh", price: 520, type: "nonveg" },
      { name: "Fish Curry", price: 490, type: "nonveg" },
      { name: "Palak Paneer", price: 330, type: "veg" }
    ],

    Breads: [
      { name: "Butter Naan", price: 60, type: "veg" },
      { name: "Garlic Naan", price: 70, type: "veg" },
      { name: "Laccha Paratha", price: 80, type: "veg" },
      { name: "Tandoori Roti", price: 40, type: "veg" },
      { name: "Missi Roti", price: 50, type: "veg" }
    ]
  },
  chinese: {

    Starters: [
      { name: "Veg Manchurian Dry", price: 260, type: "veg" },
      { name: "Chicken Manchurian Dry", price: 340, type: "nonveg" },
      { name: "Chilli Paneer", price: 300, type: "veg" },
      { name: "Chilli Chicken", price: 360, type: "nonveg" },
      { name: "Crispy Corn", price: 240, type: "veg" },
      { name: "Spring Rolls (Veg)", price: 220, type: "veg" },
      { name: "Spring Rolls (Chicken)", price: 280, type: "nonveg" },
      { name: "Dragon Chicken", price: 390, type: "nonveg" },
      { name: "Honey Chilli Potato", price: 250, type: "veg" }
    ],

    Soups: [
      { name: "Hot & Sour Soup (Veg)", price: 200, type: "veg" },
      { name: "Hot & Sour Soup (Chicken)", price: 230, type: "nonveg" },
      { name: "Sweet Corn Soup (Veg)", price: 190, type: "veg" },
      { name: "Sweet Corn Soup (Chicken)", price: 220, type: "nonveg" },
      { name: "Manchow Soup (Veg)", price: 210, type: "veg" },
      { name: "Manchow Soup (Chicken)", price: 240, type: "nonveg" },
      { name: "Tom Yum Soup", price: 320, type: "nonveg" },
      { name: "Wonton Soup", price: 260, type: "nonveg" }
    ],

    Noodles: [
      { name: "Hakka Noodles (Veg)", price: 260, type: "veg" },
      { name: "Hakka Noodles (Chicken)", price: 340, type: "nonveg" },
      { name: "Schezwan Noodles (Veg)", price: 280, type: "veg" },
      { name: "Schezwan Noodles (Chicken)", price: 360, type: "nonveg" },
      { name: "Singapore Noodles", price: 390, type: "nonveg" },
      { name: "Burnt Garlic Noodles", price: 300, type: "veg" },
      { name: "Egg Noodles", price: 290, type: "nonveg" }
    ],

    FriedRice: [
      { name: "Veg Fried Rice", price: 250, type: "veg" },
      { name: "Egg Fried Rice", price: 270, type: "nonveg" },
      { name: "Chicken Fried Rice", price: 330, type: "nonveg" },
      { name: "Schezwan Fried Rice", price: 300, type: "veg" },
      { name: "Mixed Fried Rice", price: 380, type: "nonveg" },
      { name: "Burnt Garlic Fried Rice", price: 290, type: "veg" },
      { name: "Seafood Fried Rice", price: 420, type: "nonveg" }
    ]
  },
  eastasian: {

    Starters: [
      { name: "Veg Sushi Platter", price: 600, type: "veg" },
      { name: "Non-Veg Sushi Platter", price: 750, type: "nonveg" },
      { name: "Tempura Prawns", price: 580, type: "nonveg" },
      { name: "Chicken Gyoza", price: 420, type: "nonveg" },
      { name: "Veg Dumplings", price: 350, type: "veg" },
      { name: "Korean Fried Chicken", price: 480, type: "nonveg" },
      { name: "Edamame", price: 300, type: "veg" },
      { name: "Thai Fish Cakes", price: 460, type: "nonveg" }
    ],

    Soups: [
      { name: "Tom Yum Soup", price: 320, type: "nonveg" },
      { name: "Tom Kha Soup", price: 340, type: "nonveg" },
      { name: "Miso Soup", price: 220, type: "veg" },
      { name: "Thai Coconut Soup (Veg)", price: 280, type: "veg" },
      { name: "Seafood Soup", price: 390, type: "nonveg" },
      { name: "Chicken Ramen Broth", price: 360, type: "nonveg" }
    ],

    Curries: [
      { name: "Thai Green Curry (Veg)", price: 460, type: "veg" },
      { name: "Thai Green Curry (Chicken)", price: 520, type: "nonveg" },
      { name: "Thai Red Curry (Veg)", price: 470, type: "veg" },
      { name: "Thai Red Curry (Chicken)", price: 530, type: "nonveg" },
      { name: "Japanese Katsu Curry", price: 550, type: "nonveg" },
      { name: "Korean Spicy Chicken Curry", price: 500, type: "nonveg" }
    ],

    NoodlesRice: [
      { name: "Pad Thai (Veg)", price: 390, type: "veg" },
      { name: "Pad Thai (Chicken)", price: 440, type: "nonveg" },
      { name: "Chicken Ramen", price: 480, type: "nonveg" },
      { name: "Bibimbap (Veg)", price: 420, type: "veg" },
      { name: "Bibimbap (Chicken)", price: 480, type: "nonveg" },
      { name: "Teriyaki Chicken Rice Bowl", price: 520, type: "nonveg" }
    ]
  }, drinks: {

    FreshJuices: [
      { name: "Orange Juice", price: 180, type: "veg" },
      { name: "Watermelon Juice", price: 160, type: "veg" },
      { name: "Pineapple Juice", price: 170, type: "veg" },
      { name: "Mixed Fruit Juice", price: 200, type: "veg" },
      { name: "Sweet Lime Juice", price: 150, type: "veg" }
    ],

    Mocktails: [
      { name: "Virgin Mojito", price: 240, type: "veg" },
      { name: "Blue Lagoon", price: 260, type: "veg" },
      { name: "Fruit Punch", price: 250, type: "veg" },
      { name: "Virgin Pina Colada", price: 280, type: "veg" },
      { name: "Strawberry Cooler", price: 270, type: "veg" }
    ],

    Cocktails: [
      { name: "Mojito", price: 450, type: "nonveg" },
      { name: "Margarita", price: 480, type: "nonveg" },
      { name: "Cosmopolitan", price: 500, type: "nonveg" },
      { name: "Whiskey Sour", price: 520, type: "nonveg" },
      { name: "Long Island Iced Tea", price: 600, type: "nonveg" }
    ],

    Spirits: [
      { name: "Whiskey (30ml)", price: 350, type: "nonveg" },
      { name: "Vodka (30ml)", price: 320, type: "nonveg" },
      { name: "Rum (30ml)", price: 300, type: "nonveg" },
      { name: "Gin (30ml)", price: 330, type: "nonveg" },
      { name: "Tequila (30ml)", price: 380, type: "nonveg" }
    ],

    BeerWine: [
      { name: "Beer (Domestic)", price: 280, type: "nonveg" },
      { name: "Beer (Imported)", price: 420, type: "nonveg" },
      { name: "Red Wine (Glass)", price: 480, type: "nonveg" },
      { name: "White Wine (Glass)", price: 460, type: "nonveg" },
      { name: "Champagne (Glass)", price: 900, type: "nonveg" }
    ],

    HotBeverages: [
      { name: "Espresso", price: 150, type: "veg" },
      { name: "Cappuccino", price: 180, type: "veg" },
      { name: "Latte", price: 190, type: "veg" },
      { name: "Masala Tea", price: 120, type: "veg" },
      { name: "Green Tea", price: 130, type: "veg" }
    ]
  },desserts: {
  IndianDesserts: [
    { name: "Gulab Jamun (2 pcs)", price: 160, type: "veg" },
    { name: "Rasmalai", price: 190, type: "veg" },
    { name: "Gajar Ka Halwa", price: 220, type: "veg" },
    { name: "Moong Dal Halwa", price: 240, type: "veg" },
    { name: "Kesar Phirni", price: 180, type: "veg" },
    { name: "Kulfi (Malai/Pista)", price: 170, type: "veg" }
  ],

  CakesAndPastries: [
    { name: "Chocolate Truffle Cake", price: 320, type: "veg" },
    { name: "Red Velvet Pastry", price: 280, type: "veg" },
    { name: "Black Forest Cake", price: 300, type: "veg" },
    { name: "Blueberry Cheesecake", price: 360, type: "veg" },
    { name: "Tiramisu", price: 420, type: "veg" },
    { name: "Molten Lava Cake", price: 340, type: "veg" }
  ],

  IceCreams: [
    { name: "Vanilla Bean Ice Cream", price: 150, type: "veg" },
    { name: "Chocolate Fudge Ice Cream", price: 170, type: "veg" },
    { name: "Strawberry Delight", price: 160, type: "veg" },
    { name: "Butterscotch Crunch", price: 180, type: "veg" },
    { name: "Tender Coconut Ice Cream", price: 190, type: "veg" }
  ],

  PremiumDesserts: [
    { name: "Chocolate Fondant with Ice Cream", price: 450, type: "veg" },
    { name: "Sizzling Brownie", price: 420, type: "veg" },
    { name: "Opera Cake", price: 480, type: "veg" },
    { name: "Crème Brûlée", price: 520, type: "veg" },
    { name: "Baked Alaska", price: 550, type: "veg" }
  ]
}
};

const Menulist = () => {
  const [activeCategory, setActiveCategory] = useState("north");
  return (
    <section className="menu-container">
      <div className="menu-banner-container">
        <img
          src={menubg}
          alt="Menu Banner"
          className="menu-banner"
        />
        <div className="menu-banner-overlay">
          <h1 className="menu-heading">Our Menu</h1>
          <div className="menu-tabs">
            {Object.keys(menuData).map((cat) => (
              <button
                key={cat}
                className={activeCategory === cat ? "active-tab" : ""}
                onClick={() => setActiveCategory(cat)}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="menu-grid">
        {Object.entries(menuData[activeCategory]).map(([section, items]) => (
          <div className="menu-card" key={section}>
            <h2>{section}</h2>
            <ul>
              {items.map((item, index) => (
                <li key={index}>
                  <div className="item-left">
                    <span
                      className={
                        item.type === "veg"
                          ? "veg-indicator"
                          : "nonveg-indicator"
                      }
                    ></span>
                    {item.name}
                  </div>
                  <span className="price">₹{item.price}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menulist;
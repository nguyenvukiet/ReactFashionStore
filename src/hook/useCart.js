import { useEffect, useState } from "react";

const useCart = (openCart) => {
  const initialCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  const [cartItems, setCartItems] = useState(initialCartItems);

  useEffect(() => {
    setCartItems(initialCartItems);
  }, [openCart]);

  console.log("cartItems: ", cartItems);

  // Thêm giỏ hàng vào Local Storage sau mỗi lần thay đổi
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));

    // console.log("Giỏ hàng đã được cập nhật", cartItems);
  }, [cartItems]);

  const totalPrice = () => {
    const total = cartItems.reduce(
      (accumulator, item) => accumulator + item.price * item.quantity,
      0
    );
    return total.toLocaleString();
  };

  // hàm add to cart
  const addToCart = (dataItem, chooseColor, chooseSize) => {
    if (dataItem.type === "complie") {
      const chosenVariant = dataItem.variants.find(
        (variant) =>
          variant.color_name === chooseColor && variant.size_name === chooseSize
      );
      console.log(chooseColor);
      if (chosenVariant) {
        let itemExists = false;
        const updatedCart = cartItems.map((item) => {
          if (item.id === chosenVariant.id) {
            itemExists = true;
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });
        if (!itemExists) {
          setCartItems([...updatedCart, { ...chosenVariant, quantity: 1 }]);
        } else {
          setCartItems(updatedCart);
        }
      } else {
        alert("Không tìm thấy biến thể phù hợp!");
      }
    } else {
      const existingItem = cartItems.find((item) => item.id === dataItem.id);
      if (existingItem) {
        const updatedCart = cartItems?.map((item) => {
          if (item.id === dataItem.id) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });
        setCartItems(updatedCart);
      } else {
        console.log("before: ", cartItems);
        setCartItems([...cartItems, { ...dataItem, quantity: 1 }]);
      }
    }
  };

  //hàm tăng số lượng
  const increaseItems = (dataItem) => {
    const updateCart = cartItems.map((item) => {
      if (item.id === dataItem.id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCartItems(updateCart);
  };

  //ham giam so luong
  const decreaseItems = (dataItem) => {
    const updateCart = cartItems.map((item) => {
      if (item.id === dataItem.id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCartItems(updateCart);
  };

  // remove prroduct from cart items
  const removeItems = (dataItem) => {
    const updateCart = cartItems.filter((item) => item.id !== dataItem.id);
    setCartItems(updateCart);
  };

  return {
    cartItems,
    setCartItems,
    addToCart,
    increaseItems,
    decreaseItems,
    removeItems,
    totalPrice,
  };
};

export default useCart;

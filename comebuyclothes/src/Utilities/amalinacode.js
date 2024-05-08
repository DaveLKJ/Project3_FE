import axios from "axios";
const baseURL = "http://localhost:5000/api";
const api = axios.create({
  baseURL,
  withCredentials: true,
});
const getToken = () => localStorage.getItem("token");
export const getAllProducts = async () => {
  const response = await api.get("/products/all");
  return response.data;
};
export const getProductById = async (productId) => {
  const response = await api.get(`/products/${productId}`);
  return response.data;
};
export const getProductsByCategory = async (category) => {
  const response = await api.get(`/products/category/${category}`);
  return response.data;
};

export const addToFavorites = async (productId) => {
    try {
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("userId");
      const options = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await api.post(
        "/favorites/add-to-favorites",
        {
          productId: productId,
          userId: userId,
        },
        options
      );
      return response.data;
    } catch (error) {
      console.error("Error adding to favorites:", error);
      throw new Error("Error adding to favorites");
    }
  };
  export const removeFromFavorites = async (productId, token) => {
    try {
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("userId");
      const options = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      console.log("Options:", options);
      const response = await api.post(
        "/favorites/remove-from-favorites",
        {
          productId: productId,
          userId: userId,
        },
        options
      );
     console.log("Entire Response Object:", response);
      return response.data;
    } catch (error) {
      console.error("Error removing from favorites:", error);
      throw new Error("Error removing from favorites");
    }
  };
  export const userSignup = async (userData) => {
    try {
      const response = await api.post("/users/signup", userData);
      console.log("Signup Response:", response);
   
      const token = response.data.token;
      if (!token) {
        throw new Error("Token not found in signup response headers");
      }
      localStorage.setItem("token", token);
      console.log(
        "Token stored in local storage:",
        localStorage.getItem("token")
      );
      const user = response.data.user;
      return { token, user };
    } catch (error) {
      console.error("Signup failed:", error);
      throw new Error("Signup failed");
    }
  };
  export const userLogin = async (userData) => {
    try {
      const response = await api.post("/users/login", userData);
      console.log("Login Response:", response);
      const token = response.data.token;
      const userId = response.data.user._id.toString();
      if (!token || !userId) {
        throw new Error("Token or user ID not found in login response data");
      }
      localStorage.setItem("token", token);
      localStorage.setItem("userId", userId);
      console.log(
        "Token stored in local storage:",
        localStorage.getItem("token")
      );
      console.log(
        "User ID stored in local storage:",
        localStorage.getItem("userId")
      );
      return { token, userId };
    } catch (error) {
      console.error("Login failed:", error);
      throw new Error("Login failed");
    }
  };
  export const userLogout = async () => {
    const response = await api.post("/users/logout");
    return response.data;
  };
  export const addToCart = async (userId, productId, quantity) => {
    try {
      const token = localStorage.getItem("token");
      const options = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await api.post(
        "/cart/add-to-cart",
        { userId, productId, quantity },
        options
      );
      if (response) {
        return response.data;
      } else {
        throw new Error("Error adding to cart: No response");
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
      throw new Error("Error adding to cart");
    }
  };
  export const checkout = async (userId, products) => {
    const response = await api.post("/checkout", { userId, products });
    return response.data;
  };
  export const makePayment = async (paymentData) => {
    const response = await api.post("/payment/make-payment", paymentData);
    return response.data;
  };
  export const removeFromCart = async (userId, productId) => {
    const response = await api.post("/cart/remove-from-cart", {
      userId,
      productId,
    });
    return response.data;
  };
  export const getCart = async (userId) => {
    const response = await api.get(`/cart/${userId}`);
    return response.data;
  };
  export const getAllOrders = async () => {
    const response = await api.get("/admin/orders");
    return response.data;
  };
  export const getUserInfo = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await api.get("/users/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching user info:", error);
      throw error;
    }
  };
  export const updateUserProfile = async (userData) => {
    const token = getToken();
    const response = await api.put("/users/profile", userData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  };
  export const getFavoriteProducts = async () => {
    try {
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("userId");
      const options = {
        headers: {
          authorization: token,
        },
      };
      const response = await api.get(
        `/products/favorites?userId=${userId}`,
        options
      );
      console.log("Entire Response Object:", response);
      if (response.data) {
        return response.data.favoriteProducts;
      } else {
        console.error("Response data is undefined");
        throw new Error("Response data is undefined");
      }
    } catch (error) {
      console.error("Error getting favorites:", error);
      throw new Error("Error getting favorites");
    }
  };
  export const getOrdersByUserId = async (userId) => {
    try {
      const token = getToken();
      const response = await api.get(`/orders/user/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error getting orders:", error);
      throw new Error("Error getting orders");
    }
  };
  export default api
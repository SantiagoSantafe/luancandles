import React, { createContext, useContext, useReducer } from 'react';

// Initial state
const initialState = {
  user: null,
  cart: [],
  favorites: [],
  isLoading: false,
  error: null,
  theme: 'light',
  currency: 'USD'
};

// Action types
const ACTION_TYPES = {
  SET_LOADING: 'SET_LOADING',
  SET_ERROR: 'SET_ERROR',
  CLEAR_ERROR: 'CLEAR_ERROR',
  SET_USER: 'SET_USER',
  LOGOUT: 'LOGOUT',
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  UPDATE_CART_QUANTITY: 'UPDATE_CART_QUANTITY',
  CLEAR_CART: 'CLEAR_CART',
  ADD_TO_FAVORITES: 'ADD_TO_FAVORITES',
  REMOVE_FROM_FAVORITES: 'REMOVE_FROM_FAVORITES',
  SET_THEME: 'SET_THEME',
  SET_CURRENCY: 'SET_CURRENCY'
};

// Reducer function
const appReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_LOADING:
      return { ...state, isLoading: action.payload };
    
    case ACTION_TYPES.SET_ERROR:
      return { ...state, error: action.payload, isLoading: false };
    
    case ACTION_TYPES.CLEAR_ERROR:
      return { ...state, error: null };
    
    case ACTION_TYPES.SET_USER:
      return { ...state, user: action.payload };
    
    case ACTION_TYPES.LOGOUT:
      return { ...state, user: null, cart: [], favorites: [] };
    
    case ACTION_TYPES.ADD_TO_CART:
      const existingItem = state.cart.find(item => item.id === action.payload.id);
      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        };
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }]
      };
    
    case ACTION_TYPES.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload)
      };
    
    case ACTION_TYPES.UPDATE_CART_QUANTITY:
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        )
      };
    
    case ACTION_TYPES.CLEAR_CART:
      return { ...state, cart: [] };
    
    case ACTION_TYPES.ADD_TO_FAVORITES:
      if (state.favorites.some(item => item.id === action.payload.id)) {
        return state;
      }
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      };
    
    case ACTION_TYPES.REMOVE_FROM_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.filter(item => item.id !== action.payload)
      };
    
    case ACTION_TYPES.SET_THEME:
      return { ...state, theme: action.payload };
    
    case ACTION_TYPES.SET_CURRENCY:
      return { ...state, currency: action.payload };
    
    default:
      return state;
  }
};

// Create context
const AppContext = createContext();

// Provider component
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Actions
  const setLoading = (loading) => {
    dispatch({ type: ACTION_TYPES.SET_LOADING, payload: loading });
  };

  const setError = (error) => {
    dispatch({ type: ACTION_TYPES.SET_ERROR, payload: error });
  };

  const clearError = () => {
    dispatch({ type: ACTION_TYPES.CLEAR_ERROR });
  };

  const setUser = (user) => {
    dispatch({ type: ACTION_TYPES.SET_USER, payload: user });
  };

  const logout = () => {
    dispatch({ type: ACTION_TYPES.LOGOUT });
  };

  const addToCart = (product) => {
    dispatch({ type: ACTION_TYPES.ADD_TO_CART, payload: product });
  };

  const removeFromCart = (productId) => {
    dispatch({ type: ACTION_TYPES.REMOVE_FROM_CART, payload: productId });
  };

  const updateCartQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
    } else {
      dispatch({ 
        type: ACTION_TYPES.UPDATE_CART_QUANTITY, 
        payload: { id: productId, quantity } 
      });
    }
  };

  const clearCart = () => {
    dispatch({ type: ACTION_TYPES.CLEAR_CART });
  };

  const addToFavorites = (product) => {
    dispatch({ type: ACTION_TYPES.ADD_TO_FAVORITES, payload: product });
  };

  const removeFromFavorites = (productId) => {
    dispatch({ type: ACTION_TYPES.REMOVE_FROM_FAVORITES, payload: productId });
  };

  const setTheme = (theme) => {
    dispatch({ type: ACTION_TYPES.SET_THEME, payload: theme });
  };

  const setCurrency = (currency) => {
    dispatch({ type: ACTION_TYPES.SET_CURRENCY, payload: currency });
  };

  // Computed values
  const cartTotal = state.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  const cartItemsCount = state.cart.reduce((count, item) => count + item.quantity, 0);

  const value = {
    // State
    ...state,
    cartTotal,
    cartItemsCount,
    
    // Actions
    setLoading,
    setError,
    clearError,
    setUser,
    logout,
    addToCart,
    removeFromCart,
    updateCartQuantity,
    clearCart,
    addToFavorites,
    removeFromFavorites,
    setTheme,
    setCurrency
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use the context
export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

export default AppContext;

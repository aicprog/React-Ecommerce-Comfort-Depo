import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from '../actions'

const cart_reducer = (state, action) => {
  switch (action.type) {
		case ADD_TO_CART:
			const { id, color, amount, product } = action.payload;
			const tempItem = state.cart.find((item) => item.id === id + color);
			// console.log(amount)

			if (tempItem) {
				const tempCart = state.cart.map((cartItem) => {
					if (cartItem.id === id + color) {
						let newAmount = cartItem.amount + amount;
						if (newAmount > cartItem.max) {
							newAmount = cartItem.max;
						}
						return { ...cartItem, amount: newAmount };
						//if the cartItem added does not match the one in the cart
					} else {
						return cartItem;
					}
				});

				return { ...state, cart: tempCart };
			} else {
				const newItem = {
					id: id + color,
					name: product.name,
					color,
					amount,
					image: product.images[0].url,
					price: product.price,
					max: product.stock,
				};
				return { ...state, cart: [...state.cart, newItem] };
			}
		case REMOVE_CART_ITEM:
			let tempCart = state.cart.filter((item) => item.id !== action.payload);
			return { ...state, cart: tempCart };

		case CLEAR_CART:
			return { ...state, cart: [] };

		case TOGGLE_CART_ITEM_AMOUNT: {
			const { id, value } = action.payload;
			const tempCart = state.cart.map((item) => {
				if (item.id === id) {
					if (value === "inc") {
						let newAmount = item.amount + 1;
						newAmount = newAmount > item.max ? item.max : newAmount;
						return { ...item, amount: newAmount };
					} else {
						let newAmount = item.amount - 1;
						newAmount = newAmount < 1 ? 1 : newAmount;
						return { ...item, amount: newAmount };
					}
				} else {
					return item;
				}
			});
			return { ...state, cart: tempCart };
		}

		case COUNT_CART_TOTALS:
			const { total_items, total_amount } = state.cart.reduce(
				(total, cartItem) => {

          const {amount, price} = cartItem
          total.total_items += amount
          total.total_amount += price * amount
          return total
        },
				{
					total_items: 0,
					total_amount: 0,
				}
			);
			return { ...state, total_items, total_amount };

		default:
			throw new Error(`No Matching "${action.type}" - action type`);
	}
}

export default cart_reducer

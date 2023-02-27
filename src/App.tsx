import React from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Items } from './components/Items';
import { items } from './State';

type Element = {
  id: number;
  img: string;
  price: number;
  title: string;
  desc: string;
};
interface State {
  orders: Element[];
  items: Element[];
}

class App extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      orders: [],
      items,
    };

    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
  }

  render() {
    const { orders } = this.state;
    const { items } = this.state;

    return (
      <div className="wrapper">
        <Header orders={orders} onDelete={this.deleteOrder} />
        <Items items={items} onAdd={this.addToOrder} />
        <Footer />
      </div>
    );
  }
  addToOrder(item: any) {
    let isInArray = false;
    this.state.orders.forEach((el) => {
      if (el.id === item.id) isInArray = true;
    });
    if (!isInArray)
      this.setState({
        orders: [...this.state.orders, item],
      });
  }
  deleteOrder(id: number) {
    this.setState({ orders: this.state.orders.filter((el) => el.id !== id) });
  }
}

export default App;

import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Items from "./components/Items";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      items: [
        {
          id: 1,
          title: 'Rostela Melodia 50x60',
          img: 'rostela_melodia_50x60.jpeg',
          descryption: 'Beautiful towel rail',
          category: 'towel_rails',
          price: '60.00'
        },
        {
          id: 2,
          title: 'Rostela Victoria 50x60',
          img: 'rostela_victoria_50x60.jpeg',
          descryption: 'Beautiful towel rail',
          category: 'towel_rails',
          price: '64.00'
        }
      ]
    }
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Items items={this.state.items} onAdd={this.addToOrder} />
        <Footer />
      </div>
    );
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter(el => el.id !== id) })
  }

  addToOrder(item) {
    let isArray = false
    this.state.orders.forEach(el => {
      if (el.id === item.id)
        isArray = true
    })
    if (!isArray)
      this.setState({ orders: [...this.state.orders, item] })
  }
}

export default App;

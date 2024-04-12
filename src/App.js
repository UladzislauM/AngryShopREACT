import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Items from "./components/Items";
import Filter from "./components/Filter";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
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
        },
        {
          id: 3,
          title: 'Rostela Victoria 50x70',
          img: 'rostela_victoria_50x60.jpeg',
          descryption: 'Beautiful towel rail',
          category: 'towel_rails',
          price: '71.00'
        }
      ]
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseFilter = this.chooseFilter.bind(this);
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Filter chooseFilter={this.chooseFilter} />
        <Items items={this.state.currentItems} onAdd={this.addToOrder} />
        <Footer />
      </div>
    );
  }

  chooseFilter(category){
    if(category === 'all'){
      this.setState({currentItems: this.state.items})
      return
    }

    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
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

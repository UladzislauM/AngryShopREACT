import React from "react"
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
 
class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      items:[
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
  }
    render(){
      return (
      <div className="wrapper">
        <Header />
        <Items items={this.state.items} />
        <Footer />
      </div>
  );
 }
}

export default App;

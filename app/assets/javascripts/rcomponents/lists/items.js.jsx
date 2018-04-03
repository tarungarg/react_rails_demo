var Items = React.createClass({

  getInitialState() {
    return { items: [] }
  },

  componentDidMount() {
    $.getJSON('/api/v1/items.json', (response) => { 
        this.setState({ items: response }) 
    });
  },

  addItemToList(item){
    var newState = this.state.items.concat(item);
    this.setState({ items: newState })
  },

  removeItem(id) {
    var newItems = this.state.items.filter((item) => {
        return item.id != id;
    });

    this.setState({ items: newItems });
  },
  
  render() {

    return (
      <div>
        <ListForms addItem={this.addItemToList} />
        <ListItems items={this.state.items} removeItemFromList={this.removeItem} />
      </div>
    )
  }
})

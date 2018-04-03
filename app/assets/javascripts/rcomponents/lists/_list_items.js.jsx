var ListItems = React.createClass({

  deleteItem(id) {
     $.ajax({
        url: `/api/v1/items/${id}`,
        type: 'DELETE',
         success: (response) => {
            this.props.removeItemFromList(id);
        }
    });
  },

  editItem(id) {
    
  }

  render(){
    var items= this.props.items.map((item) => {
      return (
        <ListingItem item={item} deleteItem={this.deleteItem} editItem={this.editItem} />
      )
    });

    return (
      <div>
        {items}
      </div>
    )
  }
})

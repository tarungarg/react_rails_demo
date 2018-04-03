var ListingItem = React.createClass({

  getInitialState() {
    return { editable: false }
  },

  toggleEdit() {
    if(this.state.editable) {
        var name = this.refs.name.value;
        var id = this.props.item.id;
        var description = this.refs.description.value;
        var item = {id: id , name: name , description: description};
        this.props.editItem(item);

    }
    this.setState({ editable: !this.state.editable })
  },

  deleteItem(id) {
    this.props.deleteItem(id);
  },


  render(){
    item = this.props.item
     var name = this.state.editable ? <input type='text' defaultValue={item.name} ref='name'/> : <h3>{item.name}</h3>;
    var description = this.state.editable ? <input type='text' defaultValue={item.description} ref='description' />: <p>{item.description}</p>;
    
    return (
      <div className={item.id}>
        <h3>{name}</h3>
        <p>{description}</p>
        <button onClick={this.deleteItem.bind(this, item.id)}>Delete</button>
        <button onClick={this.toggleEdit}> {this.state.editable ? 'Submit' : 'Edit' } </button>
      </div>
    )
  }
})

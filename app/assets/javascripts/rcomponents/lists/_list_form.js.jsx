var ListForms = React.createClass({

  handleClick() {
    var name    = this.refs.name.value;
    var description = this.refs.description.value;
    $.ajax({
        url: '/api/v1/items',
        type: 'POST',
        data: { item: { name: name, description: description } },
        success: (response) => {
            this.props.addItem(response);
        }
    });
  },

  render() {
    return (
        <div>
            <input ref='name' placeholder='Enter the name of the item' />
            <input ref='description' placeholder='Enter a description' />
            <button onClick={this.handleClick}>Submit</button>
        </div>
    )
  }
});



class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            secondName: '',
            value: ''
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
        const name = event.target.name
        const value = event.target.value
        this.setState({[name]: value});
    }
    
    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.firstName + this.state.secondName);
        event.preventDefault();
    }
    
    render() {
        return (
        <form onSubmit={this.handleSubmit}>
          <label>
            First Name:
            <input 
                type="text" 
                value={this.state.firstName} 
                onChange={this.handleChange} 
                className="form-control" 
                name="firstName"
                placeholder="First Name"
            />
          </label>
          <label>
            Second Name:
            <input 
                type="text" 
                value={this.state.secondName} 
                onChange={this.handleChange} 
                className="form-control" 
                name="secondName"
                placeholder="Second Name"
            />          
        </label>
          <label>
          Value:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
}

export default Form
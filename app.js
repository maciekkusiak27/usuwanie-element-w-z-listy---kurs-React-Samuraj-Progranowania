const Person = (props) =>{
    
   
    return (
<li>
    <span>{props.name}</span>
    <button onClick={props.delete}>Usuń</button>
</li>
    )
}


class List extends React.Component{
    state = {
     people: [
         {id: 1, name: 'Zbyś'},
         {id: 2, name: 'Krzyś'},
         {id: 3, name: 'Miś'},
         {id: 4, name: 'Staś'},
     ]
    }
/*
    handleDelete = () =>{
        console.log('delete')
    }
 */  
    handleDelete(id){
        const people = [...this.state.people];
        const index = people.findIndex(person => person.id === id);
        people.splice(index, 1);
        this.setState({
            people
        })
    } 
    render(){
    return (
        <ul>{this.state.people.map(person => 
        <Person key={person.id} name={person.name} delete={this.handleDelete.bind(this, person.id)}/>)}</ul>
    )
}
}

ReactDOM.render(<List />, document.getElementById('root'))

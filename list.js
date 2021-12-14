import React from 'react';
import Main from './main';

class List extends React.Component {
    constructor(props){
        super(props);
        this.state={
            display: 
                {
                    id: "",
                    mieszanka: "",
                    dlugosc: "",
                    glebokosc: "",
                    temperatura: "",
                    miejsce: "",
                    opis: "",
                    data: ""
                }
            
        }  
        this.onClick = this.onClick.bind(this);
        this.displayData = this.displayData.bind(this);
    }

    onClick(e){
        this.setState({display: this.props.info[e.target.id]}, ()=>{
            console.log(this.state.display);
            this.displayData()})
    }


    displayData(){
        this.props.datadisplay(this.state.display)
    }

    render(){
        return(
            <div className='list'>
                {this.props.info.map(data => {
                    return(
                        <div>
                            <button className='diveLabel' onClick={this.onClick} id={data.id}>{data.id + ". " + data.data + " " + data.miejsce}</button>
                        </div>
                    );
                })}    
            </div>
       );
    }
}

export default List;
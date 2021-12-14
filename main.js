import React from 'react';
import ReactModal from 'react-modal';
import List from './list';
import MyModal from './modal';



class Main extends React.Component{
    constructor(props){
        super(props);
        this.state={
            nurkowanie: [
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
            ],
            display: 
                {
                    id: "",
                    mieszanka: "",
                    dlugosc: "x",
                    glebokosc: "x",
                    temperatura: "x",
                    miejsce: "",
                    opis: "",
                    data: ""
                }
            
          
        }
        this.handleAddData = this.handleAddData.bind(this);
        this.displayData = this.displayData.bind(this);
    }

    handleAddData(dive){
        this.setState({ nurkowanie: [...this.state.nurkowanie, dive] })
        // console.log(dive)
    }

    displayData(display){
        this.setState({ display: display}, () => {console.log(display)})
       
    }

  

render(){
  

    return(
        <div className="Whole">
            <div className="contents">
                <div className="myTitle">
                    <p>SPIS NURKOWAŃ</p>
                </div>
                <div className="pickBox">
                    <List info={this.state.nurkowanie} datadisplay={this.displayData} display={this.state.display}></List>
                  <div className="addDiveButton">
                    {/* <button className="submit" >Dodaj nurkowanie</button> */}
                    <MyModal datahandler={this.handleAddData}></MyModal>
                        
                  </div>
                </div>
            </div>
            <div className="data">
                <div className="smallBox">
                     <p>Mieszanka Oddechowa: </p>
                     <p>{this.state.display.mieszanka}</p>
                </div>
                <div className="smallBox">
                     <p>Długość Nurkowania: </p>
                     <p>{this.state.display.dlugosc} minut</p>
                </div>
                <div className="smallBox">
                     <p>Maksymalna Głębokość: </p>
                     <p>{this.state.display.glebokosc} m</p>
                </div>
                <div className="smallBox">
                     <p>Temperatura minimalna: </p>
                     <p>{this.state.display.temperatura} °C</p>
                </div>
                <div className="smallBox">
                     <p>Miejsce: </p>
                     <p>{this.state.display.miejsce}</p>
                </div>
                <div className="description">{this.state.display.opis}</div>
               
            </div>

        </div>
    );
}
}


export default Main;




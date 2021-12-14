import React from "react";
import ReactModal from 'react-modal';
ReactModal.setAppElement('#root');

const customStyles = {
      content: {
        position: 'fixed',
        top: "50%",
        left: "50%",
        backgroundColor: 'rgba(255, 255, 255, 0.75)',
        transform: "translate(-50%,-50%)",
        width: "400px",
      }
  };

class MyModal extends React.Component {
    constructor (props) {
      super(props);
      this.state = {
        showModal: false,
        nurkowanie: { 
            mieszanka: "",
            dlugosc: "",
            glebokosc: "",
            temperatura: "",
            miejsce: "",
            opis: "",
            data: ""
        }
        
      };
      
      this.handleOpenModal = this.handleOpenModal.bind(this);
      this.handleCloseModal = this.handleCloseModal.bind(this);
      this.onChange = this.onChange.bind(this);
      this.handleAddData = this.handleAddData.bind(this);
    }
    
    handleOpenModal () {
      this.setState({ 
        showModal: true ,
        nurkowanie: { 
            id: "",
            mieszanka: "",
            dlugosc: "",
            glebokosc: "",
            temperatura: "",
            miejsce: "",
            opis: "",
            data: ""
        }  
    })
}
    
    handleCloseModal () {
      this.setState({ showModal: false });
    }

    handleAddData(){
        this.props.datahandler(this.state.nurkowanie)
        this.setState({ showModal: false });
    }

    onChange(e){
        const obj = this.state.nurkowanie;
        obj[e.target.name] = e.target.value;
        this.setState({nurkowanie: obj});
        
    }
    
    render () {
      return (
        <div className="modalDiv">
          <button className="submit" onClick={this.handleOpenModal}>Dodaj nurkowanie</button>
          <ReactModal 
             isOpen={this.state.showModal}
             contentLabel="Masny Modal"
             style={customStyles}
          >
                <div>
                    <div>
                    <form className="modal">
                        <label>
                            Mieszanka:
                           <input type="text" name="mieszanka" onChange={this.onChange}/>
                        </label>
                        <label>
                            Długość:
                           <input type="text" name="dlugosc" onChange={this.onChange}/>
                        </label>
                        <label>
                            Głębokość:
                           <input type="text" name="glebokosc" onChange={this.onChange} />
                        </label>
                        <label>
                            Temperatura minimalna:
                           <input type="text" name="temperatura" onChange={this.onChange} />
                        </label>
                        <label>
                            Miejsce:
                           <input type="text" name="miejsce" onChange={this.onChange} />
                        </label>
                        <label>
                            Opis:
                           <input type="text" name="opis" onChange={this.onChange}/>
                        </label>
                        <label>
                            Data:
                           <input type="text" name="data" onChange={this.onChange}/>
                        </label>
                        <label>
                            ID:
                           <input type="text" name="id" placeholder="Kolejność musi zostać zachowana" onChange={this.onChange}/>
                        </label>
                       
                    </form>
                    </div>
                    <button className="submitForm" onClick={this.handleCloseModal}>Anuluj</button>
                    <button className="submitForm" onClick={this.handleAddData}>Dodaj</button>
                </div>
                
          </ReactModal>
        </div>
      );
    }
  }

  export default MyModal;
  
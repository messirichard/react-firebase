import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {database} from '../../../../../config/firebase';

class CreatePacket extends Component{

    constructor() {
        super();
        this.ref = database.collection('packet_laundry');
        this.state = {
          name_packet: '',
          price_packet: ''
        };
      }
      onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
      }
    
      onSubmit = (e) => {
        if(this.state.name_packet !== "" & this.state.price_packet !== 0){
            e.preventDefault();
            console.log('sukses1')
        
            const { name_packet, price_packet  } = this.state;
            console.log('sukses2')
            
            this.ref.add({
              name_packet,
              price_packet,
              
            }).then((docRef) => {
              this.setState({
                name_packet: '',
                price_packet: ''
              });
              this.props.history.push("/packet")
              console.log('sukses3')
    
            })
            .catch((error) => {
              console.error("Error adding document: ", error);
            });
            console.log('sukses4')
        }
        else{
            alert("Input Yang benar")
            this.setState({
                name_packet: '',
                price_packet: ''
            });
        }

      }

    render(){
        const { name_packet, price_packet  } = this.state;
        return(
            <>
                <form onSubmit={this.onSubmit}>
                    <div class="form-group">
                        <label for="name_packet">Packet Name</label>
                        <input type="text" class="form-control" name="name_packet" value={name_packet} onChange={this.onChange} placeholder="Packet Name" />
                    </div>
                    <div class="form-group">
                        <label for="price_packet">Packet Price</label>
                        <input type="number" class="form-control" name="price_packet" value={price_packet} onChange={this.onChange} placeholder="Packet Price" />
                    </div>
                    <button type="submit" class="btn btn-success">Submit</button>
                </form>
            </>
        )
    }
}

export default CreatePacket
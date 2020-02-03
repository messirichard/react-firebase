import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {database} from '../../../../../config/firebase';
import { Input } from 'reactstrap';

class CreateTransactionIn extends Component{

    constructor(props) {
        super(props);
        this.ref = database.collection('transactionin_laundry');
        this.ref_packet = database.collection('packet_laundry');
        this.unsubscribe = null;
        this.state = {
          name_user: "",
          total_trans: "",
          name_packet_trans: "",
          quantity_trans: "",
          price_total_trans: "",
          packet: [],
          value:0
        };
        this.onChangeOption = this.onChangeOption.bind(this)

      }
      onChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        })
      }

      onCollectionUpdate = (querySnapshot) => {
        const packet = [];
        querySnapshot.forEach((doc) => {
          const { name_packet, price_packet  } = doc.data();
          packet.push({
            key: doc.id,
            name_packet,
            price_packet
          });
          // console.log(packet.doc.id)
        });
        this.setState({
          packet,
       });
      }

      componentDidMount() {
        this.unsubscribe = this.ref_packet.onSnapshot(this.onCollectionUpdate);
      }

      onSubmit = (e) => {
        if(this.state.name_packet !== "" & this.state.price_packet !== 0){
            
            e.preventDefault();
            console.log('sukses1')
        
            const { name_user,total_trans,name_packet_trans,quantity_trans,price_total_trans  } = this.state;
            console.log('sukses2')
            
            this.ref.add({
              name_user,
              total_trans,
              name_packet_trans,
              quantity_trans,
              price_total_trans:quantity_trans*this.state.value
            }).then((docRef) => {
              this.setState({
                name_user: '',
                total_trans: '',
                name_packet_trans: '',
                quantity_trans: '',
                price_total_trans: ''
              });
              this.props.history.push("/transactionin")
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
              name_user: '',
              total_trans: '',
              name_packet_trans: '',
              quantity_trans: '',
              price_total_trans: ''
            });
        }

      }

      onChangeOption = (e) => {
        // console.log(e.target.value)
        // console.log(e.target.id)
        this.setState({
          value:e.target.value
        })
      }
      onChangeddd = (e) => {
        console.log(e.target.label)
        this.setState({
          name_packet:e.target.label
        })
      }
    render(){
        const { name_user,total_trans,name_packet_trans,quantity_trans,price_total_trans  } = this.state;
        return(
            <>
                <form onSubmit={this.onSubmit}>
                    <div class="form-group">
                        <label for="name_packet">Name User</label>
                        <input type="text" class="form-control" name="name_user" value={name_user} onChange={this.onChange} placeholder="Name User" />
                    </div>
                    <div class="form-group">
                        <label for="name_packet">Total Laundry</label>
                        <input type="number" class="form-control" name="total_trans" value={total_trans} onChange={this.onChange} placeholder="Total Laundry" />
                    </div>
                    <div class="form-group">
                      <label for="exampleFormControlSelect2">Packet Name</label>
                      <select class="form-control" id="exampleFormControlSelect1" onClick={this.onChangeOption}>
                        {this.state.packet.map(item => (
                          <option onClick={this.onChangeddd} label={item.name_packet} value={item.price_packet}>{item.name_packet}</option>
                        ))}
                      </select>
                    </div>
                    <div class="form-group">
                        <label for="name_packet">Price</label>
                          <input type="number" class="form-control" value={this.state.value} name="price_packet" onChange={this.onChange} placeholder="Price" disabled/>
                    </div>
                    <div class="form-group">
                        <label for="name_packet">Quantity</label>
                        <input type="text" class="form-control" name="quantity_trans" value={quantity_trans} onChange={this.onChange} placeholder="Quantity" />
                    </div>
                    {/* <div class="form-group">
                        <label for="price_packet">Total Price</label>
                        <input type="number" class="form-control" name="price_total_trans" value={price_total_trans} onChange={this.onChange} placeholder="Total Price" disabled />
                    </div> */}
                    <button type="submit" class="btn btn-success">Submit</button>
                </form>
            </>
        )
    }
}

export default CreateTransactionIn
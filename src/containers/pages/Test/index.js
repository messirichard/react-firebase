import React,{Component} from 'react';
// import MaterialTable from 'material-table';
import {database} from '../../../config/firebase';



class Test extends Component{
    testis = () => {
        console.log("1")
        database.collection('packet_laundry').get()
            .then((snapshot) => {
            snapshot.forEach((doc) => {
                console.log(doc.id, '=>', doc.data());
            });
        })
        .catch((err) => {
            console.log('Error getting documents', err);
        });
    }
    
    
    render(){

        return(
            <>
                <p>tesssss</p>
                <button onClick={this.testis}>ASUUUU</button>
                
            </>
        )
    }
}

export default Test
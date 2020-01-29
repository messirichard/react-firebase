import React from 'react';
import MaterialTable from 'material-table';
import {database} from '../../../../config/firebase';


export default function Packet() {


  state = {
    name_packet:'',
    price_packet:0
  }

  let result = [];
    
  const [state, setState] = React.useState({
    columns: [
      { title: 'Packet Name', field: 'name_packet' },
      { title: 'Price', field: 'price_packet', type: 'numeric' }
    ],
    data: [
    //   { name_packet: 'Paket Kering', price_packet: 1000 }
        database.collection('packet_laundry').get()
            .then((snapshot) => {
            const data = snapshot.forEach((doc) => {
                
                // console.log(doc.id, '=>', doc.data());
                // setData({ nama: data.nama, title: data.title })
                // setState(doc.data())
                // {doc.data()}
                result.push(doc.data());
                console.log(result);
            });
        })
        .catch((err) => {
            console.log('Error getting documents', err);
        })
    ],
  });

  return (
    <MaterialTable
      title="Packet"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState(prevState => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
  );
}

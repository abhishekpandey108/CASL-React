import {useState} from 'react';
import { Can } from './CASL/Can';
import { DeleteOutlined } from '@ant-design/icons';
import { Input } from 'antd';

export default function List(){
    const list = [
        {
            id: 1,
            name: 'John',
            age: 20
        },
        {
            id: 2,
            name: 'Jane',
            age: 21
        },
        {
            id: 3,
            name: 'Mary',
            age: 22
        }
    ]

    const[list1,setList1]=useState(list);

    const del = (id) => {
        setList1((prevList)=>{
            return prevList.filter((item)=>{
                return item.id!== id
            })
        })
    }



    return(
        <>
        
        {
            list1.map((item, index) => {
                return(
                    <div key={index} style={{display:'flex'}}>
                        <p>{item.name}</p>
                        <p>{item.age}</p>

                        <Can I='delete' a='listName' passThrough>
                            {(allowed)=>(
                                <DeleteOutlined onClick={()=>{
                                    if(allowed)
                                    {
                                        del(item.id)
                                    } 
                                }
                                }
                              color={allowed?'red':'#cdd5ef'} 
                                />
                            )}
                        
                        </Can>


                    </div>
                )
            })
        }
         <Can I='write' a='input' >
                            {(allowed)=>(
                               <Input />
                            )}
                        
                        </Can>
        
        </>
    )
}
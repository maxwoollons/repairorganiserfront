import React from 'react'
import Navbar from './navbar'
import '../App.css'
import { useEffect,useState } from 'react'

const Archived = () => {

     useEffect(() => {
        
        fetch('http://api.jbrepair.xyz:8000/api/login',
        {
            credentials: 'include'
        }).then(res => res.json())
        .then(data => {
            if(data.username){
                console.log("Logged in")
            }
            else{
                location.href = "/"
            }
        }
        )
        fetchItems()
    }, [])
    const [items, setItems] = useState([]);
    const fetchItems = async () => {
        const data = await fetch('http://api.jbrepair.xyz:8000/api/repairs/archived');
        const items = await data.json();
        setItems(items);
        console.log(items);
    }



  return (
    <>
    <Navbar/>
    <div className='container'>
        <h1 className='archivedtitle'>Archived issues</h1>
        <table className='table'>
            <thead>
                <tr>
                    <th>Solvup ID</th>
                    <th>Issue</th>
                    <th>Required By</th>
                    <th>TDC</th>
                </tr>
            </thead>
            <tbody>
                {items.map(item => (
                    <tr key={item.id}>
                        <td>{item.idrepairs}</td>
                        <td>{item.note}</td>
                        <td>{item.Date}</td>
                        <td>{item.tdc}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        <div className='homebtndiv'>
        <a href="/"><button className="home">Home</button></a>
        </div>
        
    </div>
    </>
  )
}

export default Archived
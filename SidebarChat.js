import { Avatar } from '@material-ui/core';
import React, {useEffect, useState} from "react";
import './SidebarChat.css';
import db from './firebase.js'
import {Link} from "react-router-dom";  

function SidebarChat({id, name, addNewChat}) {
    const [seed, setSeed] = useState("");
    const [messsages, setMessages] = useState("")

    useEffect(() => {
        if (id) {
            db.collection('rooms')
            .doc(id)
            .collection('messsages')
            .orderBy('timestamp', 'desc')
            .onSnapshot((snapshot) => setMessages(snapshot.docs.map((doc) => doc.data())));
        }
        
    }, []);

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
        
    }, [id]);


    const creatChat =() => {
        const roomName = prompt("Please enter name for chat");
        
        if (roomName) {
            db.collection("rooms").add({
                name: roomName
            });
        }
    };

    return !addNewChat ? (
        <Link to={`/rooms/${id}`}>
        <div className='sidebarChat'>
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
            <div clascsName="sidebarChat_info">
                <h2>{name}</h2>
                <p>{messsages[0]?.message}</p>
                
            </div>
        </div>
        </Link>
    ): (
        <div onClick={creatChat} 
        className="sidebarChat">
            <h2> Add new chat</h2>
        </div>
    )
    
}

export default SidebarChat
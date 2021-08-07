import React, { useState, useRef, useEffect } from 'react';
import { UserType } from '../../redux/types/types';
import Users from './../Users/Users';

import './messages.css';

type msgType = {
    msg: string
}

type MsgPropsType = {
    newMsgText: string,
    msgs?: Array<msgType>,
    users: Array<UserType>
}

const Messages: React.FC<MsgPropsType> = (props) => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [msg, setMsg] = useState(props.newMsgText);
    const [msgList, setMsgList] = useState<Array<string>>([]);
    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    const msgSendHandler = () => {
        setMsgList([...msgList, msg]);
        setMsg('');
    }

    const msgChangeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setMsg(evt.target.value);
    }

    return (
        <div className="messages content_wrapper">
            <h3>Messages</h3>
            <div className="messages__body ws-card">
                <Users users={props.users} />
                <div className="col">
                    <div className="messages__chat chat">
                        {msgList.map((msg, index) => <li key={index}>{msg}</li>)}
                    </div>
                    <div className="input-group">
                        <input type="text" onChange={msgChangeHandler} ref={inputRef} name="newMsg" id="newMsg" className="form-control" value={msg} />
                        <button type="submit" onClick={msgSendHandler} className="btn-msg-send btn">Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Messages;
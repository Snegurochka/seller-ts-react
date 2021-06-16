import React, { useEffect, useState } from 'react';

type PropsType = {
    description: string,
    updateSellerDescription: (description: string) => void
}

const ProfileDescription: React.FC<PropsType> = ({ description, updateSellerDescription }) => {
    const [editMode, setEditMode] = useState(false);
    const [newDescription, setDescription] = useState(description);

    useEffect( () => {
        setDescription(description)
    }, [description]);

    const enableEditMode = () => {
        setEditMode(true);
    }

    const offEditMode = () => {
        setEditMode(false);
        updateSellerDescription(newDescription);
    }

    const changeHandler = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(evt.currentTarget.value);
    }

    return (
        <div className="seller__description">
            {!editMode
                ? <div onClick={enableEditMode}>{description}</div>
                : <textarea onBlur={offEditMode} value={newDescription} onChange={changeHandler} >{description}</textarea>
            }
        </div>
    );
}

export default ProfileDescription;
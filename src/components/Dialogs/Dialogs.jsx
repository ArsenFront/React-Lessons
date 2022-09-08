import React from 'react';
import s from './Dialogs.module.css';
import{NavLink} from 'react-router-dom';

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/1'>Arsen</NavLink>
                </div>
                <div className={s.dialog}>
                <NavLink to='/dialogs/2'>Gevorg</NavLink>
                </div>
                <div className={s.dialog}>
                <NavLink to='/dialogs/3'>Vazgen</NavLink>
                </div>
                <div className={s.dialog}>
                <NavLink to='/dialogs/4'>Hayk</NavLink>
                </div>
            </div>
           <div className={s.messages}>
            <div className={s.message}>Hi</div>
            <div className={s.message}>How is your Gevor ?</div>
            <div className={s.message}>Wellcom</div>
             </div>
        </div>
    );
}
export default Dialogs;
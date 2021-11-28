import React from "react";
import s from '../styles/header.module.scss';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const Header = (props) => {
    return <section>
        <h1 className={s.main_title}>NBA profile</h1>
        <div className={s.title_teams}>Teams</div>
        <form className={props.classes.rootInput} noValidate autoComplete="off" id={s.form}>
            <div className={s.text}>name<TextField id={s.name}
                variant="outlined"
                onChange={(e) => props.setName(e.target.value)} />
            </div>
            <div className={s.text}>city<TextField id={s.city}
                variant="outlined"
                error={props.getFilterCity(props.city) === false ? false : true}
                helperText={props.getFilterCity(props.city) === false ? '' : 'only letters'}
                onChange={(e) => props.setCity(e.target.value)} />
            </div>
            <div className={s.text}>abbreviation<TextField id={s.abbreviation} inputProps={{ style: { textTransform: "uppercase" } }}
                variant="outlined"
                onChange={(e) => {
                    props.setAbb(e.target.value);
                }} />
            </div>
            <div className={s.text_select}>conference
                <select id={s.conference} defaultValue={props.conf} onChange={(e) => props.setConf(e.target.value)} >
                    <option value={'West'} >Weast</option>
                    <option value={'East'}>East</option>
                </select>
            </div>
            <div id={s.btn}><Button variant="contained" className={props.classes.rootBtn} id={s.add_teamBtn} onClick={props.onHandleClick} >Add Team</Button></div>
        </form>
    </section>;
}

export default Header;
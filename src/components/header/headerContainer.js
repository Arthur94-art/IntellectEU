import React, { useEffect, useState } from 'react';
import s from './header.module.scss';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import { addNewTeam, fetchTeams } from '../../actions';
import { display } from '@mui/system';

const useStyles = makeStyles((theme) => ({
    rootInput: {
        '& > *': {
            margin: theme.spacing(1),
            maxWidth: '29ch',
            textAlign: 'center'
        },

    },
    rootBtn: {
        '& > *': {
            margin: theme.spacing(1),
        },
    }
}));


function HeaderContainer() {

    const classes = useStyles();
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const [abb, setAbb] = useState('');
    const [conf, setConf] = useState('WEST');

    function getFilterCity(str) {
        var regex = /\d/g;
        return regex.test(str);
    }
    function getUpperCase(str) {
        return str.toUpperCase();
    }

    useEffect(() => {
        dispatch(fetchTeams());

    }, [dispatch]);

    const onHandleClick = () => {
        if (getFilterCity(city) === false) {
            dispatch(addNewTeam(name, city, abb, conf));
        }
    };


    return <section>
        <h1 className={s.main_title}>NBA profile</h1>
        <div className={s.title_teams}>Teams</div>
        <form className={classes.rootInput} noValidate autoComplete="off" id={s.form}>
            <div className={s.text}>name<TextField id={s.name}
                variant="outlined"
                onChange={(e) => setName(e.target.value)} />
            </div>
            <div className={s.text}>city<TextField id={s.city}
                variant="outlined"
                error={getFilterCity(city) === false ? false : true}
                helperText={getFilterCity(city) === false ? '' : 'only letters'}
                onChange={(e) => setCity(e.target.value)} />
            </div>
            <div className={s.text}>abbreviation<TextField id={s.abbreviation} inputProps={{ style: { textTransform: "uppercase" } }}
                variant="outlined"
                onChange={(e) => {
                    setAbb(e.target.value);
                }} />
            </div>
            <div className={s.text_select}>conference
                <select id={s.conference} defaultValue={conf} onChange={(e) => setConf(e.target.value)} >
                    <option value={'West'} >Weast</option>
                    <option value={'East'}>East</option>
                </select>
            </div>
            <div id={s.btn}><Button variant="contained" className={classes.rootBtn} id={s.add_teamBtn} onClick={onHandleClick} >Add Team</Button></div>
        </form>
    </section>;
}

export default HeaderContainer;

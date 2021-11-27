import React, { useEffect, useState } from 'react';
import s from './header.module.scss';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from 'react-redux';
import { addNewTeam, fetchTeams } from '../../actions';

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
    const newTeam = useSelector(state => state.team);
    const teams = useSelector(state => state.teams);
    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const [abb, setAbb] = useState('');
    const [conf, setConf] = useState('');

    useEffect(() => {
        dispatch(fetchTeams());

    }, [dispatch]);

    const handleClick = React.useCallback(() => {
        dispatch(addNewTeam(name, city, abb, conf));
        teams[0].unshift(newTeam[0])
        console.log(teams);
    }, [name, abb, city, conf, dispatch, newTeam[0], teams]);


    return <section>
        <h1 className={s.main_title}>NBA profile</h1>
        <div className={s.title_teams}>Teams</div>
        <form className={classes.rootInput} noValidate autoComplete="off" id={s.form}>

            <div className={s.text}>name<TextField id={s.name} variant="outlined" onChange={(e) => setName(e.target.value)} /></div>
            <div className={s.text}>city<TextField id={s.city} variant="outlined" onChange={(e) => setCity(e.target.value)} /></div>
            <div className={s.text}>abbreviation<TextField id={s.abbreviation} variant="outlined" onChange={(e) => setAbb(e.target.value)} /></div>
            <div className={s.text}>conference<TextField id={s.conference} variant="outlined" onChange={(e) => setConf(e.target.value)} /></div>
            <div id={s.btn}><Button variant="contained" className={classes.rootBtn} id={s.add_teamBtn} onClick={handleClick}>Add Team</Button></div>
        </form>
    </section>;
}

export default HeaderContainer;

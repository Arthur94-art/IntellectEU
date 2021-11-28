import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { useDispatch } from 'react-redux';
import { addNewTeam } from '../../actions';
import Header from './header';

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

    const dispatch = useDispatch();

    const classes = useStyles();

    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const [abb, setAbb] = useState('');
    const [conf, setConf] = useState('WEST');

    function getFilterCity(str) {
        var regex = /\d/g;
        return regex.test(str);
    }

    const onHandleClick = () => {
        if (getFilterCity(city) === false) {
            dispatch(addNewTeam(name, city, abb, conf));
        }
    };


    return <Header classes={classes}
        city={city}
        setCity={setCity}
        setAbb={setAbb}
        conf={conf}
        setConf={setConf}
        getFilterCity={getFilterCity}
        onHandleClick={onHandleClick}
        setName={setName} />
}

export default HeaderContainer;

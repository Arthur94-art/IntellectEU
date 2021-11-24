import React from 'react';
import s from './header.module.scss';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    rootInput: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },

    },
    rootBtn: {
        '& > *': {
            margin: theme.spacing(1),
        },
    }
}));

function Header() {

    const classes = useStyles();

    return <section>
        <h1 className={s.main_title}>NBA profile</h1>
        <div className={s.title_teams}>Teams</div>
        <form className={classes.rootInput} noValidate autoComplete="off" id={s.form}>
            <TextField id={s.name} variant="outlined" />
            <TextField id={s.city} variant="outlined" />
            <TextField id={s.abbreviation} variant="outlined" />
            <TextField id={s.conference} variant="outlined" />
            <Button variant="contained" className={classes.rootBtn} id={s.add_teamBtn}>Add Team</Button>
        </form>
    </section>;
}

export default Header;

import { makeStyles } from "@material-ui/core";
import { useEffect, useState } from 'react'
import {
    TextField,
    Button,
    Container
} from "@mui/material";
import { addUsers, resetStatusAdd } from '../features/Userslice'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';


const useStyles = makeStyles({
    container: {
        display: 'flex',
        justifyContent: 'center'
    }
})

function AddingForm() {
    const classes = useStyles()

    const dispatch = useDispatch()

    const [user, setUser] = useState({})

    const statusAdd = useSelector((state) => state.users.statusAdd)
    const navigate = useNavigate();

    useEffect(() => {
        if (statusAdd === 'done') {
            dispatch(resetStatusAdd())
            navigate('/')
        }
    }, [statusAdd])
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addUsers(user))

    }


    return (
        <Container className={classes.container} >
            <div style={{ display: 'flex', justifyContent: 'center' }}>

                <form style={{ width: '65%', alignItems: 'center', display: 'block', marginTop: '50px' }}
                    onSubmit={(e) => handleSubmit(e)}
                >
                    <TextField
                        style={{ width: "100%", margin: "5px" }}
                        name="name"
                        type="text"
                        label="Name"
                        variant="outlined"
                        onChange={(e) => setUser({ ...user, [e.target.name]: e.target.value })}
                    />

                    <br />
                    <TextField
                        style={{ width: "100%", margin: "5px" }}
                        name="age"
                        type="number"
                        label="Age"
                        variant="outlined"
                        onChange={(e) => setUser({ ...user, [e.target.name]: e.target.value })}
                    />
                    <br />
                    <TextField
                        style={{ width: "100%", margin: "5px" }}
                        name="mail"
                        type="text"
                        label="Mail"
                        variant="outlined"
                        onChange={(e) => setUser({ ...user, [e.target.name]: e.target.value })}
                    />
                    <br />
                    <Button variant="contained" color="primary" style={{ margin: '5px', width: '100%' }}
                        type="submit"

                    >
                        Save New User
                    </Button>
                </form>
            </div>
        </Container>
    );
}

export default AddingForm;

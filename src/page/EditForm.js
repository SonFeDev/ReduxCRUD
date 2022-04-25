import { makeStyles } from "@material-ui/core";
import {

    TextField,
    Button,
    Container
} from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editUsers, resetStatusAdd } from "../features/Userslice";


const useStyles = makeStyles({
    container: {
        display: 'flex',
        justifyContent: 'center'
    }
})

function EditForm() {
    const classes = useStyles()
    const dispatch = useDispatch()
    const [newUser, setNewUser] = useState({})
    const statusAdd = useSelector((state) => state.users.statusAdd)
    let params = useParams()
    const id = params.id
    const name = params.name
    const age = params.age
    const mail = params.mail
    const navigate = useNavigate()


    useEffect(() => {
        setNewUser({ ...newUser, 'idUser': id, 'name': name, 'age': age, 'mail': mail })
        console.log(id);
    }, [id])
    useEffect(() => {
        if (statusAdd === 'done') {
            dispatch(resetStatusAdd())
            navigate('/')
        }
    }, [statusAdd])
    const handleUpdate = (e) => {
        console.log(newUser);
        e.preventDefault()
        dispatch(editUsers(newUser))

    }


    return (
        <Container className={classes.container} >
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <form style={{ width: '65%', alignItems: 'center', display: 'block', marginTop: '50px' }}
                    onSubmit={(e) => handleUpdate(e)}

                >
                    <TextField
                        style={{ width: "100%", margin: "5px" }}
                        name="name"
                        type="text"
                        label="Name"
                        variant="outlined"
                        value={newUser.name || ''}
                        onChange={(e) => setNewUser({ ...newUser, [e.target.name]: e.target.value })}
                    />
                    <br />
                    <TextField
                        style={{ width: "100%", margin: "5px" }}
                        name="age"
                        type="number"
                        label="Age"
                        variant="outlined"
                        value={newUser.age || ''}
                        onChange={(e) => setNewUser({ ...newUser, [e.target.name]: e.target.value })}
                    />
                    <br />
                    <TextField
                        style={{ width: "100%", margin: "5px" }}
                        name="mail"
                        type="text"
                        label="Mail"
                        variant="outlined"
                        value={newUser.mail || ''}
                        onChange={(e) => setNewUser({ ...newUser, [e.target.name]: e.target.value })}
                    />
                    <br />
                    <Button type="submit" variant="contained" color="primary" style={{ margin: '5px', width: '100%' }}>
                        Update User
                    </Button>
                </form>
            </div>
        </Container>
    );
}

export default EditForm;
import { useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { IconButton, makeStyles } from '@material-ui/core';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { getUsers, deleteUsers } from '../features/Userslice'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';




const useStyles = makeStyles({
    container: {
        maxWidth: '1200px',
        padding: '0 15px',
        width: '100%',
        margin: 'auto'
    },
    table: {
        marginTop: '25px'
    },
    title: {
        textTransform: 'Uppercase',
        fontWeight: 'bold',
    },
    editButton: {
        padding: '5px 5px'
    }
})


function Home() {
    const { users, loading } = useSelector((state) => state.users)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUsers());
    }, []);

    const classes = useStyles()
    const navigate = useNavigate()


    return (
        <TableContainer className={classes.container}>
            {loading ? (<h1 style={{ textAlign: 'center' }}>Loading ....</h1>) : (
                <Table className={classes.table} sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow className={classes.title}  >
                            <TableCell sx={{ fontWeight: 'bold' }} >UserName</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }} align="center">Age</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }} align="center">Mail</TableCell>
                            <TableCell ></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((item) => (
                            <TableRow key={item.id}>
                                <TableCell component="th" scope="row">{item.name || ''}</TableCell>
                                <TableCell align="center">{item.age}</TableCell>
                                <TableCell align="center">{item.mail}</TableCell>
                                <TableCell>
                                    <IconButton component={Link} to={`/edit/${item.id}/${item.name}/${item.age}/${item.mail}`}><EditIcon /></IconButton>
                                    <IconButton onClick={() => dispatch(deleteUsers(item.id))}><DeleteIcon /></IconButton>
                                </TableCell>
                            </TableRow>
                        ))}

                    </TableBody>
                </Table>
            )}
        </TableContainer>
    );
}

export default Home;
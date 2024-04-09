import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { TextField, Button, Modal, IconButton, Icon } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useSelector, useDispatch } from 'react-redux'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function ModalConfig({}) {
    const [open, setOpen] = React.useState(false);
    const [minutesFocus, setMinutesFocus] = React.useState(25);
    const [minutesBreakLarge, setMinutesBreakLarge] = React.useState(15);
    const [minutesBreak, setMinutesBreak] = React.useState(5);
    const [longBreakInterval, setLongBreakInterval] = React.useState(4);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // Redux
    // const pomodoroConfig = useSelector((state) => state.pomodoroConfig.minutesFocus)
    // const dispatch = useDispatch()

    return (
        <div>
            <Button onClick={handleOpen}>Open modal</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby='modal-modal-title'
                aria-describedby='modal-modal-description'
            >
                <Box sx={style}>
                    <Typography
                        id='modal-modal-title'
                        variant='h6'
                        component='h2'
                    >
                        Configuración:
                    </Typography>
                    <Typography
                        id='modal-modal-description'
                        sx={{ mt: 2 }}
                    >
                        Tiempo de pomodoro (minutos):
                    </Typography>
                    <IconButton
                        onClick={() => {
                            setMinutesFocus(minutesFocus - 1);
                        }}
                    >
                        <RemoveIcon />
                    </IconButton>
                    <TextField
                        id='outlined-basic'
                        variant='outlined'
                        value={minutesFocus}
                        type='number'
                        onChange={(e) => {
                            setMinutesFocus(parseInt(e.target.value));
                        }}
                    />
                    <IconButton
                        onClick={() => {
                            setMinutesFocus(minutesFocus + 1);
                        }}
                    >
                        <AddIcon />
                    </IconButton>
                    <Typography
                        id='modal-modal-description'
                        sx={{ mt: 2 }}
                    >
                        Tiempo de Descanso Largo (minutos):
                    </Typography>
                    <IconButton
                        onClick={() => {
                            setMinutesBreakLarge(minutesBreakLarge - 1);
                        }}
                    >
                        <RemoveIcon />
                    </IconButton>
                    <TextField
                        id='outlined-basic'
                        variant='outlined'
                        value={minutesBreakLarge}
                        type='number'
                        onChange={(e) => {
                            setMinutesBreakLarge(parseInt(e.target.value));
                        }}
                    />
                    <IconButton
                        onClick={() => {
                            setMinutesBreakLarge(minutesBreakLarge + 1);
                        }}
                    >
                        <AddIcon />
                    </IconButton>

                    <Typography
                        id='modal-modal-description'
                        sx={{ mt: 2 }}
                    >
                        Tiempo de descanso (minutos):
                    </Typography>
                    <IconButton
                        onClick={() => {
                            setMinutesBreak(minutesBreak - 1);
                        }}
                    >
                        <RemoveIcon />
                    </IconButton>
                    <TextField
                        id='outlined-basic'
                        variant='outlined'
                        value={minutesBreak}
                        type='number'
                        onChange={(e) => {
                            setMinutesBreak(parseInt(e.target.value));
                        }}
                    />
                    <IconButton
                        onClick={() => {
                            setMinutesBreak(minutesBreak + 1);
                        }}
                    >
                        <AddIcon />
                    </IconButton>
                    <Typography
                        id='modal-modal-description'
                        sx={{ mt: 2 }}
                    >
                        Intervalo de descanso largo (veces):
                    </Typography>
                    <IconButton
                        onClick={() => {
                            setLongBreakInterval(longBreakInterval - 1);
                        }}
                    >
                        <RemoveIcon />
                    </IconButton>
                    <TextField
                        id='outlined-basic'
                        variant='outlined'
                        value={longBreakInterval}
                        type='number'
                        onChange={(e) => {
                            setLongBreakInterval(parseInt(e.target.value));
                        }}
                    />
                    <IconButton
                        onClick={() => {
                            setLongBreakInterval(longBreakInterval + 1);
                        }}
                    >
                        <AddIcon />
                    </IconButton>

                    <Button variant="text" color="primary" onClick={()=>setOpen(false)}>
                      Close
                    </Button>
                </Box>
            </Modal>
        </div>
    );
}

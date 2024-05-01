import * as React from 'react';

import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
    Divider,
} from '@nextui-org/react';

import { useDispatch } from 'react-redux';
import { setIntervalGoalAction,
    setLongBreakIntervalAction,
    setMinutesBreakAction,
    setMinutesBreakLargeAction,
    setMinutesFocusAction,
} from '../actions/pomodoroConfigAction';
import ModifyNumbers from './ModifyNumbers';

export default function ModalConfig({}) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [minutesFocus, setMinutesFocus] = React.useState(25);
    const [minutesBreak, setMinutesBreak] = React.useState(5);
    const [minutesBreakLarge, setMinutesBreakLarge] = React.useState(15);
    const [longBreakInterval, setLongBreakInterval] = React.useState(4);
	const [intervalGoal, setIntervalGoal] = React.useState(8);

    // REDUX
    const dispatch = useDispatch();

    // Store state in Redux
    const dispatchPomodoroConfig = () => {
        dispatch(setMinutesFocusAction(minutesFocus));
        dispatch(setMinutesBreakAction(minutesBreak));
        dispatch(setMinutesBreakLargeAction(minutesBreakLarge));
        dispatch(setLongBreakIntervalAction(longBreakInterval));
        dispatch(setIntervalGoalAction(intervalGoal));
    };

    const resetConfiguration = () => {
        setMinutesFocus(25);
        setMinutesBreakLarge(5);
        setLongBreakInterval(15);
        setMinutesBreak(4);
    };

    return (
        <div>
            <>
                <Button onPress={onOpen}>Configurar Pomodoro</Button>
                <Modal
                    isOpen={isOpen}
                    onOpenChange={onOpenChange}
                >
                    <ModalContent>
                        {(onClose) => (
                            <>
                                <ModalHeader className='flex flex-col gap-1'>
                                    Configuración:
                                </ModalHeader>
                                <ModalBody>
                                    Tiempo de pomodoro (minutos):
                                    <ModifyNumbers
                                        callBackSetter={setMinutesFocus}
                                        numberTemp={minutesFocus}
                                    />
                                    <Divider />
                                    Tiempo de Descanso Largo (minutos):
                                    <ModifyNumbers
                                        callBackSetter={setMinutesBreakLarge}
                                        numberTemp={minutesBreakLarge}
                                    />
                                    <Divider />
                                    Tiempo de descanso (minutos):
                                    <ModifyNumbers
                                        callBackSetter={setMinutesBreak}
                                        numberTemp={minutesBreak}
                                    />
                                    <Divider />
                                    Intervalo de descanso largo (veces):
                                    <ModifyNumbers
                                        callBackSetter={setLongBreakInterval}
                                        numberTemp={longBreakInterval}
                                    />
                                </ModalBody>
                                <ModalFooter>
                                    <Button
                                        color='danger'
                                        variant='light'
                                        onPress={() => {
                                            onClose();
                                            resetConfiguration();
                                        }}
                                    >
                                        Cancelar
                                    </Button>
                                    <Button
                                        color='primary'
                                        onPress={() => {
                                            onClose();
                                            dispatchPomodoroConfig();
                                        }}
                                    >
                                        Guardar cambios
                                    </Button>
                                </ModalFooter>
                            </>
                        )}
                    </ModalContent>
                </Modal>
            </>
        </div>
    );
}

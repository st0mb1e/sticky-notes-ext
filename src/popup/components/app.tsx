import React from 'react';
import { FC } from 'react';
import { Container, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { activateAddingNote, selectIsAddingNoteActive } from '../store/ext';

export const App: FC = () => {
    const dispatch = useDispatch();

    const isAddingNoteActive = useSelector(selectIsAddingNoteActive);

    const handleAddNote = () => {
        dispatch(activateAddingNote());
    };

    return (
        <Container maxWidth="sm">
            <Button onClick={handleAddNote} disabled={isAddingNoteActive}>
                Add note
            </Button>
        </Container>
    );
};

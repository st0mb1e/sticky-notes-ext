import { FC } from 'react';
import { Container, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { selectIsAddingNote, setIsAddingNoteActive } from '../../shared/store/notes';

export const App: FC = () => {
    const dispatch = useDispatch();

    const isAddingNoteActive = useSelector(selectIsAddingNote);

    const handleAddNote = () => {
        dispatch(setIsAddingNoteActive(true));
    };

    return (
        <Container maxWidth="sm">
            <Button onClick={handleAddNote} disabled={isAddingNoteActive}>
                Add note
            </Button>
        </Container>
    );
};

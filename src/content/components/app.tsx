import { FC } from 'react';
import { useSelector } from 'react-redux';
import { css, keyframes } from '@emotion/react';
import { selectIsAddingNote } from '../../shared/store/notes';

const pulsing = keyframes`
    0%, 100% {
        opacity: 0.5;
    }

    50% {
        opacity: 0.3;
    }
`;

const overlay = css`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 99999;
    background-color: #ffffff;
    animation: ${pulsing} 1s infinite;
    cursor: crosshair;
`;

export const App: FC = () => {
    const isAddingNote = useSelector(selectIsAddingNote);

    if (!isAddingNote) {
        return null;
    }

    return (
        <div css={overlay}></div>
    );
};

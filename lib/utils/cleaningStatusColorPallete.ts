export const getColorForCleaningStatus = (cleaningStatus: string) => {
    switch (cleaningStatus) {
        case '' || '':
            return 'green';
        case 'Deep Clean':
            return 'red';
        default:
            return 'gray';
    }
}
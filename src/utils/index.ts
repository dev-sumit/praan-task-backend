
export const convertToISODateFormat = (dateString: any) => {
    let isoFormatDate = '';

    if (!dateString) {
        return dateString;
    }

    const dateStringArray = dateString.split();
    

    for (let i= 0; i < dateStringArray; i++) {
            
        if (dateStringArray[i] === '/') {
            isoFormatDate += '-';
        } else if (dateStringArray[i] === ',') {
            isoFormatDate += 'T';
        } else {
            isoFormatDate = dateStringArray[i];
        }
    }

    return isoFormatDate;
}
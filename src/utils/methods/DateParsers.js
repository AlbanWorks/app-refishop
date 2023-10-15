const parseDate = (dateString) => {
    const date = new Date(dateString)
    const parsedDate = date.toLocaleDateString('en-GB');
    return  `${parsedDate}`  
}
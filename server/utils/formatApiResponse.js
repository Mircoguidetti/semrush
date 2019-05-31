module.exports =  (response) => {
    const responseToArray = response.split('\r\n').filter((res) => res != '');
    const resposneToObj = responseToArray.slice(1).map((res) => {
        const valueResponseSplitted = res.split(';');
        return {
            'keyword': valueResponseSplitted[0],  
            'volume': valueResponseSplitted[1],
            'position': valueResponseSplitted[2]
        }
    });
    return resposneToObj;
};


function Number({ num }){
    // its treated as a plain text
    /**
     * expression slot : {}
     */
    console.log(num);
    
    return <h1>number : { num } </h1>

}

export default Number
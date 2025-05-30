import React from "react";
import { useParams } from "react-router-dom";

function EditContact () {
    const {id} = useParams()
return 
<div> 
    {id}
 </div>

}


export default EditContact; 
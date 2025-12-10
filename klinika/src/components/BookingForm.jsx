import { useState } from "react";
import { specjalist } from "./Specialists";

function BookingForm({addVisit}){
    const[name,setName]= useState("");
    const[specjalist,setSpecjalist]=useState("");
    const[date,setDate]=useState("");
}

function handleSubmit(e){
    e.preventDefault();

    if(!name||!specjalist||!date){
        alert("wypelnij wszytskie pola!");
        return;
    }

    const selectSpecjalist = specjalist.find(
        (s)=>s.id===Number(specjalistId)
    );

    addVisit({
        id:Date.now(),
        patient:name,
        specjalist:specjalist.name,
        date
    });


    setName("");
    setSpecjalist("");
    setDate("");
    
    
}



return(

    <form onSubmit={handleSubmit} style={{marginBottom:"20px"}}>
        <h2>umow sie na wizyte!</h2>

        <div class="patient" style={{marginBottom="10px"}}>
            <label>
                Imie i nazwisko: 
                <br/>
                <input
                value={name}
                onChange={(e)=>setName(e.target.value)}
                placeholder="np:anna nowak"
                />
            </label>
        </div>

        <div class="specjalist" style={{marginBotton:"10px"}}>
            <label>
                Specjalista:
                <br/>
                <select 
                value={specjalistId}
                onChange={(e)=> specjalistId(e.target.value)}
                >
                <option value="">wybierz</option>
                {specjalist.map((spec)=>(
                <option key={spec.id} value ={spec.id}>
                    {spec.name}
                </option>
               ) )}
               </select>
            </label>
        </div>

        <div class="data" style={{marginBottom:"10px"}}>
            <label>
                Data wizyty:
                <br/>
                <input
                type="date"
                value={date}
                onChange={(e)=>setDate(e.target.value)}
                />
            </label>
        </div>





    </form>


)
function VisitList({visits}){
    return(
        <div>
            <h2>umow wizyte</h2>
            {visits.lenght===0 && <p>Brak umowionych wizyt</p>}

            <ul>
                {visits.map((v)=>(
                    <li key={v.id} style ={{marginBottom:"10px"}}>
                        <strong>{v.patient}</strong> &rarr; {v.specjalist}
                        <br/>
                        Termin: {v.date}
                    </li>
                ))}
            </ul>


        </div>
    );
}

export default VisitList;

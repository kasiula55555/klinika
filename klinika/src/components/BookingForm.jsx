import { useState } from "react";
import { specjalist } from "./Specialists";

function BookingForm({ addVisit }) {
  const [name, setName] = useState("");
  const [specjalistId, setSpecjalistId] = useState("");  
  const [date, setDate] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !specjalistId || !date) {
      alert("Wypełnij wszystkie pola!");
      return;
    }

    const selectedSpecjalist = specjalist.find(
      (s) => s.id === Number(specjalistId)
    );

    addVisit({
      id: Date.now(),
      patient: name,
      specjalist: selectedSpecjalist.name,
      date,
    });

    setName("");
    setSpecjalistId("");
    setDate("");
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <h2>Umów się na wizytę!</h2>

      <div className="patient" style={{ marginBottom: "10px" }}>
        <label>
          Imię i nazwisko:
          <br />
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="np. Anna Nowak"
          />
        </label>
      </div>

      <div className="specjalist" style={{ marginBottom: "10px" }}>
        <label>
          Specjalista:
          <br />
          <select
            value={specjalistId}
            onChange={(e) => setSpecjalistId(e.target.value)}
          >
            <option value="">wybierz</option>
            {specjalist.map((spec) => (
              <option key={spec.id} value={spec.id}>
                {spec.name}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="data" style={{ marginBottom: "10px" }}>
        <label>
          Data wizyty:
          <br />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>
      </div>

      <button type="submit">Zapisz wizytę</button>
    </form>
  );
}

export default BookingForm;

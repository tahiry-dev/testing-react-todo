function DoneTable({ doneValue }) {
    return (
      <div className="doneTable">
        <h3>DONE</h3>
        <ul>
          {doneValue.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }

  export default DoneTable;
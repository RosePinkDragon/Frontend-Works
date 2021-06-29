import employee from "./JSON/Employee.json";
import reporters from "./JSON/Reporters.json";

function App() {
  const orders = ["SRPMANAGER", "PMANAGER", "PHEAD", "SRENG", "EMP"];

  let heads = [];

  const employees = [
    {
      name: "SRPMANAGER",
      people: [],
    },
    {
      name: "PMANAGER",
      people: [],
    },
    {
      name: "PHEAD",
      people: [],
    },
    {
      name: "SRENG",
      people: [],
    },
    {
      name: "EMP",
      people: [],
    },
  ];

  employees.forEach(({ name, people }) => {
    employee.forEach(({ id }) => {
      if (name === id.split("/")[0]) {
        people.push(id);
      }
    });
  });

  reporters.forEach((reporter) => {
    const vally = heads.filter(({ name }) => name === reporter.reporting_id);
    if (vally.length) {
      return;
    } else {
      return heads.push({ name: reporter.reporting_id, reporters: [] });
    }
  });

  //check if heads name is the reporting name
  reporters.forEach((reporter) => {
    heads.forEach((head) => {
      if (reporter.reporting_id === head.name) {
        return head.reporters.push(reporter.id);
      }
    });
  });

  let hi = {};
  console.log(heads);
  heads.forEach((head) => {
    reporters.forEach((reporter) => {
      console.log(reporter);
    });
  });

  /*
  ?? structure for dev
   HEADS => {  
    head:{
      name: ...
      reporters: {
      {
        name: ...
        reporters: {

        }
      }
    }
    }
    }
  */

  return (
    <div className="App">
      {heads.map((head, idx) => (
        <div className="flex" key={idx}>
          <div className="head">{head.name}</div>
          {head.reporters.map((reporter, idx) => (
            <div className="reporter" key={idx}>
              {reporter}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;

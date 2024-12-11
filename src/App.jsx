import tasks from "./tasks.js";

function App() {
  function tasksNotCompleted() {
    const tasksInProgress = tasks.filter((task) => !task.state.includes("completed"))
      .map((task) => <li key={task.id}>
        <h3>{task.title}</h3>
        <p>Priority:{task.priority}</p>
        <p>Extimeted Time:{task.estimatedTime}</p>
      </li>);
    return tasksInProgress;
  }

  function tasksCompleted() {
    const tasksInProgress = tasks.filter((task) => task.state.includes("completed"))
      .map((task) => <li key={task.id}>
        <h3>{task.title}</h3>
        <p>Priority:{task.priority}</p>
        <p>Extimeted Time:{task.estimatedTime}</p>
      </li>);
    return tasksInProgress;
  }

  return (
    <>
      <h1>Task Manager</h1>
      <h2>Current Tasks(4)</h2>
      <ul>{tasksNotCompleted()}</ul>
      <hr />
      <h2>Completed Tasks(6)</h2>
      <ul>{tasksCompleted()}</ul>
    </>

  )
}

export default App;
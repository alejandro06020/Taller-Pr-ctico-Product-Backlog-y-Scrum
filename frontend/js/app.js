document.addEventListener("DOMContentLoaded", () => {
  const tasks = ["Estudiar para examen", "Entregar informe", "Leer capítulo 5"];
  const list = document.getElementById("task-list");

  tasks.forEach(task => {
    const item = document.createElement("li");
    item.textContent = task;
    list.appendChild(item);
  });
});

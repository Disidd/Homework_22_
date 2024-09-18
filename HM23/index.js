const amount = 100; 
const monday = [
  ['Write a tutorial', 180],
  ['Some web development', 120]
];
const tuesday = [
  ['Keep writing that tutorial', 240],
  ['Some more web development', 360],
  ['A whole lot of nothing', 240]
];

function renderTasks(tasks) {
  return tasks
    .map(function(task) {
      const taskName = task[0]; 
      const minutes = task[1]; 
      const hours = minutes / 60; 
      return [taskName, hours, hours * amount]; 
    })

    .filter(function(task) {
      return task[1] > 2; 
    })

    .map(function(task) {
      return `<tr>
               <td>Task name: ${task[0]} </td>
               <td>Task duration: ${task[1]} hours</td>
               <td>Task amount: $ ${task[2]} </td> 
             </tr>`;
    })

    .join(''); 
}

const allTasks = monday.concat(tuesday);

document.write(`<table> ${renderTasks(allTasks)} </table>`);


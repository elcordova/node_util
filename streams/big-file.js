const fs = require('fs');
const file = fs.createWriteStream('./big');

for (let i = 0; i < 1e6; i++) {
    file.write("Officia ea aute sunt adipisicing magna fugiat cupidatat Lorem ea. Laboris culpa anim amet mollit ipsum anim enim culpa consequat velit sit. Et ea dolore magna velit dolor laboris adipisicing. Proident laborum sunt sunt est eu duis sint sint tempor.")
}

file.end();
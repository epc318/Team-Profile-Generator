function generateManager(teamManager) {
const htmlManagerTemp = teamManager.map(({ name, id, email, officeNumber }) => {
    return `
    <div>
        <div>
            <h1>Team Manager</h1>
        </div>
        <div>
            <div>
                <h1>${name}</h1>
            </div>
            <div>
                 <h3>Employee ID #:${id}</h3>
            </div>
            <div>
                <h3>Email Address:${email}</a></h3>
            </div>
            <div>
                <h3>Office Number:${officeNumber}</h3>
            </div>
        </div>
    </div>`;
    });
    return `
    ${htmlManagerTemp.join('')}`;
};
function generateEngineer(engineer) {
    const htmlEngineerTemp = engineer.map(({ name, id, email, github }) => {
        return `
        <div>
            <div>
                <h1>Engineer</h1>
            </div>
            <div>
                <div>
                    <h1>${name}</h1>
                </div>
                <div>
                     <h3>Employee ID #:${id}</h3>
                </div>
                <div>
                    <h3>Email Address:${email}</a></h3>
                </div>
                <div>
                    <h3>Github Username:${github}</h3>
                </div>
            </div>
        </div>`;
        });
        return `
        ${htmlEngineerTemp.join('')}`;
    };
function generateIntern(intern) {
    const htmlInternTemp = intern.map(({ name, id, email, school }) => {
        return `
        <div>
            <div>
                <h1>Intern</h1>
            </div>
            <div>
                <div>
                    <h1>${name}</h1>
                </div>
                <div>
                     <h3>Employee ID #:${id}</h3>
                </div>
                <div>
                    <h3>Email Address:${email}</a></h3>
                </div>
                <div>
                    <h3>School/University:${school}</h3>
                </div>
            </div>
        </div>`;
        });
        return `
        ${htmlInternTemp.join('')}`;
    };



function generatePage(data) {
    return `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Team Profile Generator</title>
            <link rel="stylesheet" href="style.css">
        </head>
        <body>
            <header>
                <h1>Team Profiles</h1>
            </header>
            <main>
                ${generateManager(data.teamManager)}
                ${generateEngineer(data.engineer)}
                ${generateIntern(data.intern)}
            </main>
            <footer>
                <h3>&copy; ${new Date().getFullYear()} by Evan Carlson (Github Username: epc318)</h3>
            </footer>
        </body>
    </html>`
};

module.exports = generatePage;


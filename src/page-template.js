function generateManager(manager) {
const htmlManagerTemp = manager.map(({ name, id, email, officeNumber }) => {
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
    ${managerHTML.join('')}`;
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
        ${engineerHTML.join('')}`;
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
        ${internHTML.join('')}`;
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

            <header></header>


            <main></main>


            <footer></footer>
        </body>
    </html>
        `
}

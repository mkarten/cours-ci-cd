import http from 'http';

// Fonction d'aide pour tester l'application
export function createMessage(message: string): string {
  return `<div class="app__message">\n    <h1>${message}</h1>\n</div>`;
}

// Fonction à exporter pour les tests
export function generateHtml(message: string): string {
  return `
    <html>
        <head>
            <title>My First Page</title>
            <link rel="stylesheet" href="/public/css/styles.css"/>
        </head>
        ${createMessage(message)}
    </html>
`;
}

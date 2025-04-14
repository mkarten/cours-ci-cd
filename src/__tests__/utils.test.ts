import { createMessage, generateHtml } from "../utils";

describe("Utilitaires HTML", () => {
  test("createMessage devrait générer un message HTML correctement", () => {
    const message = "Test Message";
    const expected =
      '<div class="app__message">\n    <h1>Test Message</h1>\n</div>';
    expect(createMessage(message)).toBe(expected);
  });

  test("generateHtml devrait générer un document HTML complet", () => {
    const message = "Hello Test";
    const html = generateHtml(message);
    expect(html).toContain("<title>My First Page</title>");
    expect(html).toContain('<div class="app__message">');
    expect(html).toContain("<h1>Hello Test</h1>");
    expect(html).toContain(
      '<link rel="stylesheet" href="/public/css/styles.css"/>',
    );
  });
});

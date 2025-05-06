/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run "npm run dev" in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run "npm run deploy" to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */


export default {
  async fetch(request, env, ctx) {
    const html = `
    <!DOCTYPE html>
    <html>
    <body>

    <h2>My First JavaScript</h2>

    <button type="button"
    onclick="document.getElementById('demo').innerHTML = Date()">
    Click me to display Date and Time.</button>

    <p id="demo"></p>

    </body>
    </html> 


    `;

    return new Response(html, {
      headers: {
        'Content-Type': 'text/html;charset=UTF-8',
      },
    });
  },
};

// Purpose: This file is used to create a server for the application. This file is used to create a server for the application.

const {next} = require('next');
const { createServer } = require('http');
const { parse } = require('url');

import { IncomingMessage, ServerResponse } from 'http';
import { UrlWithParsedQuery } from 'url';

 
const port = parseInt(process.env.PORT || '3000', 10)
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
 
app.prepare().then(() => {
interface ParsedRequest extends IncomingMessage {
    url: string;
}

createServer((req: ParsedRequest, res: ServerResponse) => {
    const parsedUrl: UrlWithParsedQuery = parse(req.url!, true);
    handle(req, res, parsedUrl);
}).listen(port);
 
  console.log(
    `> Server listening at http://localhost:${port} as ${
      dev ? 'development' : process.env.NODE_ENV
    }`
  )
})
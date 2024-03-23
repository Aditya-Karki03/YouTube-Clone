//The below code provides me with some helper functions provided by the openAI

import OpenAI from 'openai';
import { openAIKey } from './constants';

const openai = new OpenAI({
  apiKey: openAIKey, // This is the default and can be omitted
  dangerouslyAllowBrowser:true
});

export default openai;

// async function main() {
//   const chatCompletion = await openai.chat.completions.create({
//     messages: [{ role: 'user', content: 'Say this is a test' }],
//     model: 'gpt-3.5-turbo',
//   });
// }

// main();
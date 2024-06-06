import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { environment } from '../../../environment';
import { OpenAI } from 'openai';

@Component({
  selector: 'app-dictionary',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.css']
})
export class DictionaryComponent {
  title = 'angular-openAI';
  textInput: string = '';
  output: any;


  chats: any = []


  constructor() { }


  async search() {
    const apiKey = '';
    if (!apiKey) {
      throw new Error('API key is missing');
    }

    // const temp1 = new OpenAI({
    //   apiKey: apiKey,
    //   dangerouslyAllowBrowser: true
    // });

    // const openai = new OpenAI();

    // async function main() {
    //   const stream = await openai.chat.completions.create({
    //     model: 'gpt-4',
    //     messages: [{ role: 'user', content: 'Say this is a test' }],
    //     stream: true,
    //   });
    //   for await (const chunk of stream) {
    //     process.stdout.write(chunk.choices[0]?.delta?.content || '');
    //   }
    // }

    // main();

    // const openai = new OpenAI({
    //   apiKey: process.env['OPENAI_API_KEY'], // This is the default and can be omitted
    // });
    //   try {
    //     await openai.chat.completions.create({
    //       messages: [
    //         {
    //           "role": "user",
    //           "content": `You possess expertise in deciphering user intentions from natural language queries and transforming them into a JSON structure with payload, showcasing the entity and its corresponding value for filtering a MongoDB collection.

    //             The various Filter option availble are STATUS, START_DATE, END_DATE,OPPURTUNITY, PREPARED_BY, PROPOSAL_ID

    //             Now given the user query understand the user intention from it and format the same into a json structure identifying the entity that needs to be filtered upon, based on the above filters available.

    //             For example:
    //             #######
    //             If the user query is : "Fetch me all the proposals which are management reviewed and are completed by 15 of this month"
    //             Output Json should be like: {{"search":"DRAFT",searchCriteria":"STATUS"}}

    //             Strictly follow the sample format while returning the response.

    //             For any Date time related queries, remember that the current date time is ${Date.now()}

    //             The User Input is ${this.textInput}
    //             The output json is :`,
    //         },
    //       ],
    //       model: 'gpt-3.5-turbo',
    //     }).then((value) => {


    //       this.output = value.choices[0].message.content
    //       const chat = {
    //         question: this.textInput,
    //         answer: this.output
    //       }
    //       this.chats.unshift(chat)
    //     })
    //   } catch (error) {
    //     console.error('Error occurred while fetching API response:', error);
    //   }
  }
}
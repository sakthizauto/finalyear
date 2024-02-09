import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ai-advisor',
  templateUrl: './ai-advisor.component.html',
  styleUrls: ['./ai-advisor.component.css']
})
export class AiAdvisorComponent {

  userInput: string = '';
  messages: { content: string; sender: string }[] = [];

  constructor(private http: HttpClient) { }

  askQuestion() {
    if (this.userInput.trim() === '') {
      return;
    }

    // Display user question
    this.messages.push({ content: this.userInput, sender: 'user' });

    // Make a request to the Express backend
    this.http.get<any>(`http://localhost:3000/api/getStockInfo?question=${encodeURIComponent(this.userInput)}`)
      .subscribe(
        response => {
          const aiResponse = { text: JSON.stringify(response.data.text.replace(/\n/g, '')) }; // Stringify "text" property
          console.log(aiResponse);
          this.messages.push({ content: aiResponse.text, sender: 'ai' });
        },
        error => {
          console.error('Error making API request:', error);
          this.messages.push({ content: 'An error occurred while processing your request.', sender: 'ai' });
        }
      );

    // Clear the input field
    this.userInput = '';
  }
  isTableContent(content: any): boolean {
    if (Array.isArray(content) && content.length > 0 && Array.isArray(content[0])) {
      // Check if it's an array of rows, where each row is an array of cells
      return true;
    }
    return false;
  }

}



export interface GPTRequest {
  model:    string;
  messages: Message[];
}

export interface Message {
  role:    string;
  content: string;
}

export interface QuestionAnswer {
  question: string;
  options:  string[];
}

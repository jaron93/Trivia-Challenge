export interface IPreferences {
   difficulty: string | null;
   amount: number;
}

export interface IfetchQuestions {
   difficulty: string | null;
   amount: number;
}

export interface IGameState {
   questions: [],
   result: [],
   status: "idle" | "loading" | "succeeded" | "failed",
   error: string | null,
}

export interface IProgressBar {
   current: number,
   total: number
}
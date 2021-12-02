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
   result: IResult[],
   status: "idle" | "loading" | "succeeded" | "failed",
   error: string | null,
}

export interface IProgressBar {
   current: number,
   total: number
}

export interface IResult {
   question: string,
   point: boolean
}


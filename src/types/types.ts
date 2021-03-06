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
   id: number;
   question: string,
   point: boolean
}

export interface IOptions {
   option: string,
   icon: React.SVGProps<SVGSVGElement>
}


export interface Task {
  id?: number;
  userId?: number; // Ahora es opcional
  title: string;
  description: string;
  completed: boolean;
  created_at?: Date;
}

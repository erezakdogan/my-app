export interface NoteFormValues {
  title: string;
  description: string;
  tags: string[];
}

export class Note {
  id: any;
  title: string;
  description: string;
  is_completed: boolean;
  created_at: Date;
  updated_at: Date;
  tags: string[];
  constructor(
    id: any,
    title: string,
    description: string,
    is_completed: boolean,
    created_at: Date,
    updated_at: Date,
    tags: string[]
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.is_completed = is_completed;
    this.created_at = created_at;
    this.updated_at = updated_at;
    this.tags = tags;
  }
}

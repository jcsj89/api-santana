import { v4 } from 'uuid';
interface ITags {
  id?: string;
  tagName: string;
  description: string;
  object_id: string;
  object_table_name: string;
}

class Tag {
  id: string;
  tagName: string;
  description: string;
  object_id: string;
  object_table_name: string;

  constructor({
    id,
    tagName,
    description,
    object_id,
    object_table_name,
  }: ITags) {
    this.id = id || v4();
    this.tagName = tagName;
    this.description = description || 'description default';
    this.object_id = object_id;
    this.object_table_name = object_table_name;
  }

  static create({ tagName, description, object_id, object_table_name }: ITags) {
    return new Tag({ tagName, description, object_id, object_table_name });
  }
}

export default Tag;

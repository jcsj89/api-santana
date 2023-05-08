import { v4 } from 'uuid';
interface ITags {
  id?: string;
  tagName: string;
  description: string;
}

class Tag {
  id: string;
  tagName: string;
  description: string;

  constructor({ id, tagName, description }: ITags) {
    this.id = id || v4();
    this.tagName = tagName;
    this.description = description || 'description default';
  }

  static create({ tagName, description }: ITags) {
    return new Tag({ tagName, description });
  }

  // this function parse User to JSON format
  static toJSON(tag: Tag) {
    return JSON.stringify(tag);
  }

  // parse Tag to object data
  static toData(tag: Tag) {
    return {
      id: tag.id,
      tagName: tag.tagName,
      description: tag.description,
    };
  }
}

export default Tag;

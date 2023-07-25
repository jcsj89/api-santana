import { v4 } from 'uuid';
interface ICategory {
  id?: string;
  tagName: string;
  description: string;
}

class Tag {
  id: string;
  tagName: string;
  description: string;

  constructor({ id, tagName, description }: ICategory) {
    this.id = id || v4();
    this.tagName = tagName;
    this.description = description || 'description default';
  }

  // getter and setter
  // validations
  get getTagName() {
    return this.tagName;
  }

  set setTagName(tagName: string) {
    if (
      typeof tagName === 'string' &&
      (tagName.length > 2 || tagName.length < 64)
    )
      this.tagName = tagName;
  }

  get getDescription() {
    return this.description;
  }

  set setDescription(description: string) {
    if (
      typeof description === 'string' &&
      (description.length > 2 || description.length < 1024)
    )
      this.description = description;
  }

  // methods
  static create({ tagName, description }: ICategory) {
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

// An abstract document containing a combination of hooks and abstract methods

export interface Document {
  [id: string]: string;
}

/** @classdesc A template class containing a template method and primitive methods */
export abstract class AbstractDocument {
  document: Document = {};

  /** Must implement */
  abstract title(document: Document): void;

  /** Optional */
  description?(document: Document): void;

  /** Optional */
  author?(document: Document): void;

  /** Optional with a default behaviour */
  backgroundColour(document: Document): void {
    document["bg-col"] = "white";
  }

  /** Must implement */
  abstract text(document: Document, text: string): void;

  /** Optional */
  footer?(document: Document): void;

  /** Optional with a default behaviour
   * @param {Document} document - The document to be printed
   */
  print(document: Document): void {
    console.log(`----------------------`);
    Object.keys(document).forEach((attribute: string) => {
      console.log(`${attribute}\t: ${document[attribute]}`);
    });
    console.log();
  }

  /** The template method */
  createDocument(text: string): void {
    this.title(this.document);
    if (this.description) this.description(this.document);
    if (this.author) this.author(this.document);
    this.backgroundColour(this.document);
    this.text(this.document, text);
    if (this.footer) this.footer(this.document);
    this.print(this.document);
  }
}

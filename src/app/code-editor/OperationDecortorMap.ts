export const OperationDecorationMap: {[key:string]:OperatorDecorator} = {
    heading1: {
        prefixDecorator: '#',
        placeHolder: 'Heading level 1'
    },
    heading2: {
        prefixDecorator: '##',
        placeHolder: 'Heading level 2'
    },
    heading3: {
        prefixDecorator: '##',
        placeHolder: 'Heading level 2'
    },
    heading4: {
        prefixDecorator: '##',
        placeHolder: 'Heading level 2'
    },
    heading5: {
        prefixDecorator: '##',
        placeHolder: 'Heading level 2'
    },
    heading6: {
        prefixDecorator: '##',
        placeHolder: 'Heading level 2'
    },
    bold: {
        prefixDecorator: '**',
        postfixDecorator: '**',
        placeHolder: 'Bold text'
    },
    italic: {
        prefixDecorator: ' *',
        postfixDecorator: ' *',
        placeHolder: 'Italic text'
    },
    strikethrough: {
        prefixDecorator: '~~',
        postfixDecorator: '~~',
        placeHolder: 'Striked text'
    },
    horizontalRule: {
        prefixDecorator: '\n------------\n',
        placeHolder: ''
    },
    unorderedList: {
        prefixDecorator: '-',
        placeHolder: 'First Item'
    },
    orderedList: {
        prefixDecorator: '1. ',
        placeHolder: 'First Item'
    },
    checkList: {
        prefixDecorator: '- [ ] ',
        placeHolder: 'First Item'
    },
    blockQuote: {
        prefixDecorator: '> ',
        placeHolder: 'Block Quote'
    },
    table: {
        prefixDecorator: '|',
        placeHolder: '',
        postfixDecorator: '|  |'+'\n|--|--|\n|  |  |'
    },
    // to do
    link: {
        prefixDecorator: '-',
        placeHolder: 'First Item'
    },
    // to do
    image: {
        prefixDecorator: '-',
        placeHolder: 'First Item'
    },
    code: {
        prefixDecorator: '```typescript',
        placeHolder: "const language = 'typescript';",
        postfixDecorator: '```'
    }
}

export interface OperatorDecorator{
    prefixDecorator: string;
    postfixDecorator?: string;
    placeHolder: string;
}

export const OPERATIONS={
    HEADING1: 'heading1',
    HEADING2: 'heading2',
    HEADING3: 'heading3',
    HEADING4: 'heading4',
    HEADING5: 'heading5',
    HEADING6: 'heading6',
    BOLD: 'bold',
    ITALIC: 'italic',
    STRIKETHROUGH: 'strikethrough',
    HORIZONTALRULE: 'horizontalRule',
    UNORDEREDLIST:  'unorderedList',
    ORDEREDLIST: 'orderedList',
    CHECKLIST: 'checkList',
    BLOCKQUOTE: 'blockQuote',
    TABLE: 'table',
    LINK: 'link',
    IMAGE: 'image',
    CODE: 'code',
}

const gen = (text:string) => `This is a ${text}`;
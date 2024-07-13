export type BlogProp = {
    id: string;
    title: string;
    content: string;
    authorId: string;
    createdAt: Date;
    updatedAt?: Date;
    img: string | null;
};

export type FormProps = {
    title: string,
    description: string
    file: FileList
}   
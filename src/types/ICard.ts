interface ICard {
    title: string;
    text: string;
    image?: {
        position: string;
        src: string;
    }
}

export default ICard;
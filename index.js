const divideBySpace = (normalText)=>{
    return normalText.split(' ');
}

const upperFirst = (text, ind) => {
    if (ind < 1) {
        return text;
    }
    const [first] = text
    return first.toUpperCase()+text.slice(1);
}
const normaltoCamelCase = (normalText) => {
    return divideBySpace(normalText).map(upperFirst).join('');
}

module.exports= normaltoCamelCase;